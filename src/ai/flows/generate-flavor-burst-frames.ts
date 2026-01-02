'use server';

/**
 * @fileOverview A tool that generates AI prompts for creating burst frames based on flavor profiles.
 *
 * - generateFlavorBurstFrames - A function that generates prompts for burst frame creation.
 * - GenerateFlavorBurstFramesInput - The input type for the generateFlavorBurstFrames function.
 * - GenerateFlavorBurstFramesOutput - The return type for the generateFlavorBurstFrames function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateFlavorBurstFramesInputSchema = z.object({
  flavor: z.string().describe('The flavor of the product (e.g., Chocolate, Toffee Caramel).'),
  flavorAsset: z.string().describe('The specific assets related to the flavor (e.g., chocolate chunks, caramel ribbons).'),
});
export type GenerateFlavorBurstFramesInput = z.infer<typeof GenerateFlavorBurstFramesInputSchema>;

const GenerateFlavorBurstFramesOutputSchema = z.object({
  prompt: z.string().describe('The generated AI prompt for creating burst frames.'),
});
export type GenerateFlavorBurstFramesOutput = z.infer<typeof GenerateFlavorBurstFramesOutputSchema>;

export async function generateFlavorBurstFrames(input: GenerateFlavorBurstFramesInput): Promise<GenerateFlavorBurstFramesOutput> {
  return generateFlavorBurstFramesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateFlavorBurstFramesPrompt',
  input: {schema: GenerateFlavorBurstFramesInputSchema},
  output: {schema: GenerateFlavorBurstFramesOutputSchema},
  prompt: `Create a 240-frame WebP animation sequence (loop optional) of the uploaded SMOODH {{flavor}} tetra-pack.\n- Camera: hero frontal angle, slight forward tilt, slow rotation from -20° to +20° across frames.\n- Lighting: clean soft studio lighting, subtle glossy highlights on tetra surface (no harsh reflections).\n- Background: pure solid black (#000000).\n- Maintain exact label colors and typography; label must remain readable on all frames.\n- Frames 0–160: smooth rotation and reveal of product.\n- Frames 160–220: gradually introduce floating {{flavorAsset}} elements (e.g., chocolate chunks for Chocolate) entering from behind and around the pack.\n- Frames 220–239: high-energy mid-air burst: sharp, frozen particles and a partial liquid splash that wraps around the pack (no label obstruction).\n- Output: 240 WebP frames, consistent framing, lossless/near-lossless quality for compositing.`,
});

const generateFlavorBurstFramesFlow = ai.defineFlow(
  {
    name: 'generateFlavorBurstFramesFlow',
    inputSchema: GenerateFlavorBurstFramesInputSchema,
    outputSchema: GenerateFlavorBurstFramesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

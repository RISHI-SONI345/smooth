"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { generateFlavorBurstFrames } from "@/ai/flows/generate-flavor-burst-frames";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';

const initialState = {
  prompt: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Generating...' : 'Generate Prompt'}
    </Button>
  );
}

export default function GenerateForm() {
  const [state, formAction] = useFormState(async (prevState: any, formData: FormData) => {
    try {
      const result = await generateFlavorBurstFrames({
        flavor: formData.get('flavor') as string,
        flavorAsset: formData.get('flavorAsset') as string,
      });
      return { prompt: result.prompt, error: '' };
    } catch (e: any) {
      return { prompt: '', error: e.message || 'An unknown error occurred.' };
    }
  }, initialState);

  return (
    <form action={formAction}>
      <Card>
        <CardHeader>
          <CardTitle>Generate Animation Prompt</CardTitle>
          <CardDescription>Fill in the details for your new flavor variant.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="flavor">Flavor Name</Label>
            <Input id="flavor" name="flavor" placeholder="e.g., Strawberry Cream" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="flavorAsset">Flavor Assets</Label>
            <Input id="flavorAsset" name="flavorAsset" placeholder="e.g., ripe strawberries, cream splashes" required />
          </div>
        </CardContent>
        <CardFooter>
          <SubmitButton />
        </CardFooter>
      </Card>
      
      {state?.error && (
        <Alert variant="destructive" className="mt-6">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.error}</AlertDescription>
        </Alert>
      )}

      {state?.prompt && (
        <div className="mt-6">
          <Label className="text-lg font-semibold">Generated Prompt</Label>
          <Textarea
            readOnly
            value={state.prompt}
            className="mt-2 h-64 font-mono text-sm bg-muted"
            aria-label="Generated AI prompt"
          />
        </div>
      )}
    </form>
  );
}

# **App Name**: Smoodh Hero

## Core Features:

- Configurable Variants: Dynamically render the hero section based on a configuration file (JSON) containing details like flavor name, subtitle, description, theme color, and WebP sequence path.
- Parallax WebP Sequence: Implement a parallax effect using WebP frame sequences, where the frame index is mapped to the scroll position for a cinematic visual experience.
- Theme Switching: Allow users to switch between dark and light themes, applying the selected theme color to CTAs and active indicators. Ensure accessibility by maintaining text contrast.
- Variant Navigation: Enable users to navigate between product variants using 'PREV' and 'NEXT' controls. Animate transitions and ensure smooth sequence preloading.
- Dynamic Content Injection: Inject content at run time in order to minimize code changes as the client adds more variants.
- AI Flavor Burst Frame Generation Tool: Provide a tool for generating new burst frames (frames 160-239). It will automatically generate the AI prompts and send them to an AI model.

## Style Guidelines:

- Primary color: Brown (#8B4513) is inspired by chocolate to match SMOODH's branding and the hero image of various flavored milk.
- Background color: Light brown (#F5EBDD) to match the brand and give a natural, muted feel.
- Accent color: Orange-Yellow (#E6A23C) to contrast with the primary color.
- Body and headline font: 'Inter' for a modern, neutral look that is suitable for both headlines and body text.
- Use simple, monochrome social media icons at the bottom center of the hero section.
- Stack the logo, title, subtitle, description, and CTAs on the left, vertically centered. Center the WebP sequence. Place variant navigation on the right, also vertically centered.
- Implement fade-in/fade-out animations for variant switching, ensuring smooth transitions and preserving label and hero visibility.
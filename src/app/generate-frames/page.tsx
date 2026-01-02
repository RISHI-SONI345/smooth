import Header from "@/components/smoodh/header";
import GenerateForm from "./generate-form";

export default function GenerateFramesPage() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Flavor Burst AI Tool
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Generate a prompt for creating a cinematic product animation sequence. Enter the flavor details below to get a custom prompt for a motion artist or an AI image model.
            </p>
          </div>
          <GenerateForm />
        </div>
      </main>
    </>
  );
}

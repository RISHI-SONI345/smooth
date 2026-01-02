"use client";

import { Check } from 'lucide-react';

const ingredients = [
  "Fresh Milk",
  "Premium Cocoa Powder",
  "Natural Sweeteners",
  "Stabilizers",
  "Vitamins & Minerals"
];

const benefits = [
  { title: "Rich in Calcium", desc: "Supports strong bones and teeth" },
  { title: "Protein Boost", desc: "Essential for muscle growth" },
  { title: "Energy Source", desc: "Natural sugars for quick energy" },
  { title: "Vitamin Fortified", desc: "Added vitamins for daily nutrition" }
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="min-h-screen bg-muted/30 py-24 px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-center mb-16">
          Ingredients & Benefits
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Ingredients */}
          <div className="bg-background/50 backdrop-blur-sm p-8 rounded-2xl border border-border">
            <h3 className="text-3xl font-bold mb-6">What's Inside</h3>
            <ul className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="text-lg">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

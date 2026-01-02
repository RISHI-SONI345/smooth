"use client";

import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Priya M.",
    rating: 5,
    text: "The chocolate flavour is absolutely divine! Rich and creamy, it's my go-to refreshment.",
    location: "Mumbai"
  },
  {
    name: "Rahul K.",
    rating: 5,
    text: "Love the Coffee Frappe variant. Perfect energy boost for my morning commute.",
    location: "Bangalore"
  },
  {
    name: "Sneha P.",
    rating: 4,
    text: "Toffee Caramel is my favorite! The taste is authentic and not too sweet.",
    location: "Delhi"
  },
  {
    name: "Arjun S.",
    rating: 5,
    text: "High quality milk with amazing flavours. Worth every rupee!",
    location: "Pune"
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="min-h-screen bg-muted/30 py-24 px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-center mb-4">
          What People Say
        </h2>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-primary text-primary" />
            ))}
          </div>
          <p className="text-2xl font-bold">4.8 / 5.0</p>
          <p className="text-muted-foreground">Based on 2,500+ reviews</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-background/50 backdrop-blur-sm p-6 rounded-xl border border-border">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-lg mb-4 italic">"{review.text}"</p>
              <div className="flex justify-between items-center">
                <p className="font-bold">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

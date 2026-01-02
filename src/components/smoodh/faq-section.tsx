"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes SMOODH different from other flavoured milk?",
    answer: "SMOODH uses premium ingredients and authentic flavours to create a rich, indulgent experience. Our milk is sourced fresh daily and fortified with essential vitamins and minerals."
  },
  {
    question: "How should I store SMOODH?",
    answer: "Keep SMOODH refrigerated at all times. Once opened, consume within 24 hours for the best taste and freshness."
  },
  {
    question: "Are there any artificial flavours or preservatives?",
    answer: "We use minimal preservatives required for safety. Our flavours are derived from natural sources wherever possible to maintain authenticity and taste."
  },
  {
    question: "Which variant is the most popular?",
    answer: "Chocolate is our bestseller, but Coffee Frappe and Toffee Caramel are gaining popularity quickly. Each variant has its own loyal fanbase!"
  },
  {
    question: "Is SMOODH suitable for children?",
    answer: "Yes! SMOODH is a great source of calcium and protein for growing children. However, we recommend moderation due to natural sugar content."
  },
  {
    question: "Where can I buy SMOODH?",
    answer: "SMOODH is available at major supermarkets, convenience stores, and online delivery platforms across India."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="min-h-screen bg-background py-24 px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-center mb-16">
          Frequently Asked Questions
        </h2>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-muted/30 px-6 rounded-xl border border-border">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

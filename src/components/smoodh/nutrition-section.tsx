"use client";

const nutritionFacts = [
  { label: "Calories", value: "180", unit: "" },
  { label: "Total Fat", value: "5", unit: "g" },
  { label: "Saturated Fat", value: "3", unit: "g" },
  { label: "Cholesterol", value: "20", unit: "mg" },
  { label: "Sodium", value: "130", unit: "mg" },
  { label: "Total Carbohydrate", value: "28", unit: "g" },
  { label: "Sugars", value: "24", unit: "g" },
  { label: "Protein", value: "8", unit: "g" },
  { label: "Calcium", value: "30", unit: "% DV" },
  { label: "Vitamin D", value: "25", unit: "% DV" }
];

export default function NutritionSection() {
  return (
    <section id="nutrition" className="min-h-screen bg-background py-24 px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight text-center mb-16">
          Nutrition Facts
        </h2>
        
        <div className="bg-white text-black p-8 rounded-2xl border-4 border-black max-w-md mx-auto">
          <div className="border-b-8 border-black pb-2 mb-2">
            <h3 className="text-4xl font-black">Nutrition Facts</h3>
            <p className="text-sm">Serving Size 200ml</p>
          </div>
          
          <div className="border-b-4 border-black py-2">
            <p className="text-sm font-bold">Amount Per Serving</p>
          </div>
          
          <div className="space-y-1">
            {nutritionFacts.map((fact, index) => (
              <div 
                key={index} 
                className={`flex justify-between py-1 ${
                  index < nutritionFacts.length - 1 ? 'border-b border-black' : ''
                }`}
              >
                <span className="font-bold">{fact.label}</span>
                <span className="font-bold">{fact.value}{fact.unit}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t-4 border-black text-xs">
            <p>* Percent Daily Values are based on a 2,000 calorie diet.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

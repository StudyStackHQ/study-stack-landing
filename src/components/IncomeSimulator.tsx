import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Users, TrendingUp } from "lucide-react";

const IncomeSimulator = () => {
  const [price, setPrice] = useState([5]);
  const [subscribers, setSubscribers] = useState([100]);
  
  const monthlyIncome = price[0] * subscribers[0];
  const yearlyIncome = monthlyIncome * 12;

  const presets = [
    { price: 1, subscribers: 100, label: "Getting Started" },
    { price: 5, subscribers: 200, label: "Growing Community" },
    { price: 10, subscribers: 500, label: "Established Creator" },
    { price: 15, subscribers: 1000, label: "Top Creator" }
  ];

  return (
    <section className="py-12 bg-muted border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Calculate Your <span className="text-gradient-success">Earning Potential</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how much you could earn by sharing your study materials with fellow students.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border border-border/30 shadow-sm bg-white overflow-hidden">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl font-bold">Income Calculator</CardTitle>
              <CardDescription>Adjust the sliders to see your potential monthly earnings</CardDescription>
            </CardHeader>
            
            <CardContent className="space-y-8">
              {/* Controls */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Price Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="price" className="text-base font-semibold">Monthly Subscription Price</Label>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-secondary" />
                      <Input 
                        id="price"
                        type="number" 
                        value={price[0]} 
                        onChange={(e) => setPrice([parseInt(e.target.value) || 1])}
                        className="w-20 h-8 text-center"
                        min="1"
                        max="50"
                      />
                    </div>
                  </div>
                  <Slider
                    value={price}
                    onValueChange={setPrice}
                    max={50}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$1</span>
                    <span>$50+</span>
                  </div>
                </div>

                {/* Subscribers Slider */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="subscribers" className="text-base font-semibold">Study Buddies (Subscribers)</Label>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-primary" />
                      <Input 
                        id="subscribers"
                        type="number" 
                        value={subscribers[0]} 
                        onChange={(e) => setSubscribers([parseInt(e.target.value) || 10])}
                        className="w-20 h-8 text-center"
                        min="10"
                        max="2000"
                      />
                    </div>
                  </div>
                  <Slider
                    value={subscribers}
                    onValueChange={setSubscribers}
                    max={2000}
                    min={10}
                    step={10}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>10</span>
                    <span>2000+</span>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-section rounded-xl p-6 text-center">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                      ${monthlyIncome.toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">per month</div>
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      ${yearlyIncome.toLocaleString()}
                    </div>
                    <div className="text-muted-foreground">per year</div>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <TrendingUp className="w-4 h-4" />
                  <span>Plus tips from live study sessions and one-time sales!</span>
                </div>
              </div>

              {/* Quick Presets */}
              <div>
                <Label className="text-base font-semibold mb-4 block">Try These Examples:</Label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {presets.map((preset, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setPrice([preset.price]);
                        setSubscribers([preset.subscribers]);
                      }}
                      className="p-3 text-center rounded-lg border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all"
                    >
                      <div className="font-semibold text-sm">{preset.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        ${preset.price}/mo × {preset.subscribers} students
                      </div>
                      <div className="text-secondary font-bold text-sm mt-1">
                        ${(preset.price * preset.subscribers).toLocaleString()}/mo
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center pt-4">
                <p className="text-muted-foreground mb-4">
                  Ready to turn your study materials into steady income?
                </p>
                <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold">
                  <DollarSign className="w-4 h-4" />
                  <span>Start earning when we launch Fall 2025</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IncomeSimulator;
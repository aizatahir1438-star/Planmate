import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Brain, Target } from 'lucide-react';

export function Problem() {
  const problems = [
    {
      icon: <Target className="h-8 w-8 text-rose-500" />,
      title: "You plan but don't follow through",
      description: "Your to-do list is full of great ideas, but at the end of the day, you've barely scratched the surface.",
    },
    {
      icon: <Brain className="h-8 w-8 text-amber-500" />,
      title: "You feel stuck and unmotivated",
      description: "The initial excitement fades quickly, leaving you struggling to find the energy to keep going.",
    },
    {
      icon: <AlertCircle className="h-8 w-8 text-slate-500" />,
      title: "You lose track of your progress",
      description: "Without clear visibility into how far you've come, it's easy to feel like you're not making any real progress.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Sound familiar?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We all want to achieve our goals, but the journey is often harder than we expect.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-200 text-center"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 ring-1 ring-slate-100">
                  {problem.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900">
                  {problem.title}
                </h3>
                <p className="mt-4 text-slate-600">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

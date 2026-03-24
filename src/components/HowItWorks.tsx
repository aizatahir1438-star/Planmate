import React from 'react';
import { motion } from 'motion/react';
import { FileText, Play, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      id: '01',
      name: 'Plan',
      description: 'Set your goals and break them down into daily actionable tasks.',
      icon: FileText,
    },
    {
      id: '02',
      name: 'Act',
      description: 'Execute your plan with smart reminders and motivational nudges.',
      icon: Play,
    },
    {
      id: '03',
      name: 'Improve',
      description: 'Review your progress, learn from your habits, and optimize your routine.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How Planmate Works
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A simple, proven process to turn your ambitions into reality.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <step.icon className="h-10 w-10" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.id}. {step.name}
                </h3>
                <p className="mt-4 text-slate-600">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-slate-200" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

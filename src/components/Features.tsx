import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ListTodo, Flame, BellRing, BarChart3 } from 'lucide-react';

export function Features() {
  const features = [
    {
      name: 'Task Planning',
      description: 'Organize your day with clarity. Break large goals into manageable steps.',
      icon: ListTodo,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      name: 'Motivation Tools',
      description: 'Stay consistent with daily quotes, reminders, and positive reinforcement.',
      icon: Flame,
      color: 'text-orange-500',
      bgColor: 'bg-orange-100',
    },
    {
      name: 'Habit Tracking',
      description: 'Build lasting habits by tracking your progress over time.',
      icon: BarChart3,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-100',
    },
    {
      name: 'Daily Reminders',
      description: 'Never miss a beat with customizable notifications and nudges.',
      icon: BellRing,
      color: 'text-purple-500',
      bgColor: 'bg-purple-100',
    },
  ];

  return (
    <section id="features" className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Features designed for action
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Planmate combines the best of task management and habit tracking to help you stay focused and motivated every single day.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-slate-900">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

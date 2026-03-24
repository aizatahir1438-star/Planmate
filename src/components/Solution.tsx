import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, LayoutList, TrendingUp } from 'lucide-react';

export function Solution() {
  const features = [
    {
      name: 'Smart Planning',
      description: 'Break down your big goals into actionable daily tasks.',
      icon: LayoutList,
    },
    {
      name: 'Motivation System',
      description: 'Get the right push at the right time to keep moving forward.',
      icon: Zap,
    },
    {
      name: 'Progress Tracking',
      description: 'Visualize your consistency and celebrate every win.',
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet Planmate. Your partner in consistency.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              We built Planmate to bridge the gap between planning and doing. It's not just a to-do list; it's a complete system designed to help you build habits and achieve your goals.
            </p>

            <dl className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-slate-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-slate-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-16 lg:mt-0"
          >
            <div className="relative rounded-2xl bg-slate-50 p-8 shadow-xl ring-1 ring-slate-200 lg:p-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Consistency Score</h3>
                  <p className="text-sm text-slate-500">You're doing great this week!</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600 w-[85%] rounded-full"></div>
                </div>
                <div className="flex justify-between text-sm font-medium text-slate-600">
                  <span>Current: 85%</span>
                  <span>Goal: 90%</span>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm text-slate-500">Current Streak</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">12 Days</p>
                </div>
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                  <p className="text-sm text-slate-500">Tasks Completed</p>
                  <p className="text-2xl font-bold text-slate-900 mt-1">48</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

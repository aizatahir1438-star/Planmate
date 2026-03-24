import React from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/Button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="text-center lg:col-span-6 lg:text-left lg:flex lg:flex-col lg:justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block">Stop planning.</span>
                <span className="block text-blue-600">Start doing.</span>
              </h1>
              <p className="mt-6 text-lg text-slate-600 sm:text-xl max-w-2xl mx-auto lg:mx-0">
                Planmate helps you stay consistent, motivated, and in control of your goals. Turn plans into action with smart motivation and daily structure.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group">
                  Start Your Journey Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg">
                  See How It Works
                </Button>
              </div>
              <div className="mt-8 flex items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 lg:col-span-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mx-auto w-full max-w-lg lg:max-w-none"
            >
              <div className="relative rounded-2xl bg-slate-50 border border-slate-200 shadow-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[600px] flex flex-col">
                {/* Mockup Header */}
                <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
                  </div>
                  <div className="mx-auto bg-slate-100 rounded-md px-3 py-1 text-xs text-slate-400 font-medium">planmate.app</div>
                </div>
                {/* Mockup Body */}
                <div className="flex-1 p-6 bg-slate-50 flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">Today's Focus</h3>
                      <p className="text-sm text-slate-500">You're on a 4-day streak! 🔥</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">
                      85%
                    </div>
                  </div>
                  
                  <div className="space-y-3 mt-4">
                    {[
                      { title: 'Morning Workout', time: '07:00 AM', done: true },
                      { title: 'Deep Work Block', time: '09:30 AM', done: true },
                      { title: 'Read 10 Pages', time: '08:00 PM', done: false },
                    ].map((task, i) => (
                      <div key={i} className={`p-4 rounded-xl border flex items-center gap-4 ${task.done ? 'bg-white border-slate-200 opacity-60' : 'bg-white border-blue-200 shadow-sm'}`}>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${task.done ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300'}`}>
                          {task.done && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <div>
                          <p className={`font-medium ${task.done ? 'text-slate-500 line-through' : 'text-slate-800'}`}>{task.title}</p>
                          <p className="text-xs text-slate-400">{task.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-4 text-white">
                    <p className="font-medium text-sm">Daily Motivation</p>
                    <p className="text-lg font-semibold mt-1">"Small disciplines repeated with consistency every day lead to great achievements."</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

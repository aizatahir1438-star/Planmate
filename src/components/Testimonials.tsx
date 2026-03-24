import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      body: "Planmate completely changed how I approach my day. I used to write lists and ignore them. Now, the gentle nudges keep me on track without feeling overwhelming.",
      author: {
        name: 'Sarah Jenkins',
        handle: '@sarahj_designs',
        imageUrl: 'https://picsum.photos/seed/sarah/100/100',
      },
    },
    {
      body: "As a student, staying consistent was my biggest struggle. The streak tracking and daily motivation in Planmate finally helped me build a solid study routine.",
      author: {
        name: 'David Chen',
        handle: '@davidc_student',
        imageUrl: 'https://picsum.photos/seed/david/100/100',
      },
    },
    {
      body: "I've tried dozens of productivity apps, but Planmate is the only one that focuses on *why* I'm doing the tasks, not just *what* they are. Highly recommend.",
      author: {
        name: 'Emily Rodriguez',
        handle: '@emilyr_writer',
        imageUrl: 'https://picsum.photos/seed/emily/100/100',
      },
    },
  ];

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Join thousands improving their lives
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Don't just take our word for it. See what our users have to say.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-slate-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <div className="col-span-2 xl:col-span-1 xl:row-span-2">
            <motion.figure
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-lg font-semibold leading-8 tracking-tight text-slate-900">
                <p>"{testimonials[0].body}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-10 w-10 rounded-full bg-slate-50"
                  src={testimonials[0].author.imageUrl}
                  alt=""
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-semibold">{testimonials[0].author.name}</div>
                  <div className="text-slate-600">{testimonials[0].author.handle}</div>
                </div>
              </figcaption>
            </motion.figure>
          </div>
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.figure
              key={testimonial.author.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-slate-700">
                <p>"{testimonial.body}"</p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-x-4">
                <img
                  className="h-10 w-10 rounded-full bg-slate-50"
                  src={testimonial.author.imageUrl}
                  alt=""
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-semibold">{testimonial.author.name}</div>
                  <div className="text-slate-600">{testimonial.author.handle}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
          <div className="col-span-2 xl:col-span-1 xl:row-span-2 flex flex-col justify-center items-center p-8 bg-blue-600 rounded-2xl text-white text-center">
            <h3 className="text-4xl font-bold mb-2">10k+</h3>
            <p className="text-blue-100 text-lg mb-6">Active Users</p>
            <h3 className="text-4xl font-bold mb-2">1M+</h3>
            <p className="text-blue-100 text-lg">Tasks Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

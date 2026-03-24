import React from 'react';
import { LayoutList, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <LayoutList className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Planmate</span>
            </div>
            <p className="text-sm leading-6 text-slate-600">
              Turn your plans into action with smart motivation and daily structure. Start achieving your goals today.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-slate-500">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-500">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-500">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Product</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Features</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Integrations</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Pricing</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Changelog</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Documentation</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Guides</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">API Status</a></li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">About</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Blog</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Jobs</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Press</a></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-slate-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Privacy</a></li>
                  <li><a href="#" className="text-sm leading-6 text-slate-600 hover:text-slate-900">Terms</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-200 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-500">&copy; {new Date().getFullYear()} Planmate, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

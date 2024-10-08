import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { H2 } from '@/components/ui/Typography/H2';

export default function NewsletterHero() {
  return (
    <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <H2>Subscribe to our blog.</H2>
            <p className="mt-4 text-lg leading-8 text-neutral-300">
              When we release a new update or have something to share with
              everyone we make a post on our blog you can subscribe to our blog
              or join our discord below to always be informed.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-neutral-800 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="transition-all duration-200 flex-none rounded-md bg-rose-800 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rosee-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CalendarDaysIcon
                  className="h-6 w-6 text-neutral-500"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-neutral-800">
                Weekly articles
              </dt>
              <dd className="mt-2 leading-7 text-neutral-400">
                Stay tuned for our latest weekly articles. Our content is
                curated to bring you insights and information that will help you
                succeed.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <HandRaisedIcon
                  className="h-6 w-6 text-neutral-500"
                  aria-hidden="true"
                />
              </div>
              <dt className="mt-4 font-semibold text-neutral-800">No spam</dt>
              <dd className="mt-2 leading-7 text-neutral-400">
                Your inbox is safe with us. We don't believe in spam. Expect
                only valuable content without the hassle.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

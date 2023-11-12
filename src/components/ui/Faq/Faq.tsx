'use client';
import React, {useState} from 'react';
import {H1} from '@/components/ui/Typography/H1';
import {H4} from '@/components/ui/Typography/H4';
import {P} from '@/components/ui/Typography/P';

const Item = ({title, children}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-neutral-900 rounded shadow">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <H4 className="text-lg font-medium">{title}</H4>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-neutral-600 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <P className="text-neutral-700">{children}</P>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2
              className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-neutral-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-neutral-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"/>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <H1>
                  <span className="relative">Frequently</span> asked questions
                </H1>
              </span>
            </h2>
            <P>
              This section is for frequently asked questions about our services.
            </P>
          </div>
        </div>
        <div className="space-y-4">
          <Item title="Why should I use Framework?">
            We provide a stable product that is able to scale to whatever you
            may require. We support lots of major server environments and you
            can deploy your own network in a matter of minutes!
          </Item>
          <Item title="Can I migrate an existing network to Framework?">
            Yes
          </Item>
          <Item title="TODO more questions here">
            someteimes raaeerly but yk
          </Item>
          <Item title="How much does it cost to start my first network?">
            TODO: add simple pricing & link to the pricing page
          </Item>
        </div>
      </div>
    </div>
  );
};

'use client'
import {cn} from '@/utils/cn'
import Link from 'next/link';
import React, {Suspense, useEffect, useState} from 'react';
import {MobileNavigation} from './MobileNavigation';
import {NavLink} from './NavLink';
// next dynamic
import dynamic from 'next/dynamic';
import {usePathname} from "next/navigation";

const DynamicAuthNavLink = dynamic(
  () => import('./AuthNavLink').then((module) => module.AuthNavLink),
  {
    ssr: false,
  }
);

const DynamicNavHero = dynamic(
  () => import('./NavHero').then((module) => module.NavHero),
  {
    ssr: false,
  }
);

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time || new Date());
    }, 500);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'transition transition-all duration-400 sticky top-0 z-50 flex flex-wrap items-center justify-between bg-transparent px-1 py-2 shadow-md shadow-neutral-900/5 transition duration-500 dark:shadow-none sm:px-3 lg:px-4',
        isScrolled
          ? ' dark:bg-neutral-900/95 backdrop-blur [@supports(backdrop-filter:blur(0))]:bg-neutral-900/75 [@supports(backdrop-filter:blur(0))]:bg-white/75'
          : 'bg-transparent'
      )}
    >
      <div className="mr-6 flex lg:hidden space-x-2">
        <MobileNavigation />
        <div className={cn('block lg:hidden', 'relative ')}>
          <Link href="/" className="block" aria-label="Home page">
            <img
              src={'/assets/logo.svg'}
              className="h-9 block sm:h-9"
              alt="Nextbase Logo"
            />
          </Link>
        </div>
      </div>

      <div className={cn(' mx-auto w-full flex justify-center ')}>
        <div
          className={cn(
            'hidden lg:flex items-center gap-8 mx-auto w-screen',
            'relative '
          )}
        >
          <Link className="text-4xl px-2 font-bold" href="/" aria-label="Home page">
            <img
              src={'/assets/logo.svg'}
              className="h-9 block sm:h-9"
              alt="Nextbase Logo"
            />
          </Link>
          <NavLink href="/" aria-label="Items">
            Home
          </NavLink>
          <NavLink href="/blog" aria-label="Blog">
            Blog
          </NavLink>
          <NavLink href="/marketplace" aria-label="Marketplace">
            Marketplace
          </NavLink>
          <Suspense fallback={<div> Loading ... </div>}>
            <DynamicAuthNavLink/>
          </Suspense>

          <div className="ml-auto w-full">
            <div className={""}>
              <Suspense fallback={<div> Loading ... </div>}>
                <DynamicNavHero/>
              </Suspense>
            </div>
          </div>
        </div>
        <div className="-my-5 mr-6 sm:mr-8 md:mr-0"></div>
        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow"></div>
      </div>

      <div>
        {pathname}
      </div>
    </header>
  );
}

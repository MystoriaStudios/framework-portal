'use client'
import {cn} from '@/utils/cn'
import Link from 'next/link';
import {Suspense, useEffect, useState} from 'react';
import {MobileNavigation} from './MobileNavigation';
import {NavLink} from './NavLink';
// next dynamic
import dynamic from 'next/dynamic';

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
  const [isScrolled, setIsScrolled] = useState(false);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
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
        'transition transition-all duration-400 sticky top-0 z-50 flex flex-wrap items-center justify-between bg-transparent px-1 py-2 shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-3 lg:px-4',
        isScrolled
          ? 'dark:bg-slate-900/95 dark:backdrop-blur dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75'
          : 'dark:bg-transparent'
      )}
    >
      <div className="mr-6 flex lg:hidden space-x-2">
        <MobileNavigation/>
        <div className={cn('block lg:hidden', 'relative ')}>
          <Link href="/" className="block" aria-label="Home page">
            #
          </Link>
        </div>
      </div>

      <div className={cn(' mx-auto w-full max-w-8xl flex justify-center ')}>
        <div
          className={cn(
            'hidden lg:flex items-center gap-8 mx-auto ',
            'relative '
          )}
        >
          <Link className="text-4xl px-2 font-bold" href="/" aria-label="Home page">
            #
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

          <div className="ml-auto">
            <Suspense fallback={<div> Loading ... </div>}>
              <DynamicNavHero/>
            </Suspense>
          </div>
        </div>
        <div className="-my-5 mr-6 sm:mr-8 md:mr-0"></div>
        <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:flex-grow"></div>
      </div>

      <div>
        {window.location.href.replace("http://localhost:3000/", "")}
      </div>
    </header>
  );
}

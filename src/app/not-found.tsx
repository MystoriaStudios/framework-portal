'use client';

import { useEffect } from 'react';
import { H1 } from '@/components/ui/Typography/H1';
import { H2 } from '@/components/ui/Typography/H2';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P } from '@/components/ui/Typography/P';

export default function NotFound({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <H1 className="font-semibold text-rose-800 dark:text-rose-800">404</H1>
        <H2>That wasn't supposed to happen</H2>
        <P>Sorry, we couldn’t find the page you’re looking for.</P>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="transition duration-300 rounded-md bg-rose-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
          >
            Go back <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          </a>
          <a href="#" className="text-sm font-semibold">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

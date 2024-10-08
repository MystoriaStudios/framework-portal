'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { T } from '@/components/ui/Typography';

export function ClientLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/dashboard');
  }, []);
  return (
    <div className=" h-full dark:bg-neutral-900/20">
      <div
        className="grid"
        style={{
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        <div className="text-center flex flex-col items-center justify-center space-y-8 h-screen">
          <div>{children}</div>
        </div>
        <div className="relative p-3">
          {/* Background Overlay */}

          {/* Blue Background Image */}
          <div
            className="gap-10 bg-cover flex flex-col justify-between rounded-xl w-full dark:bg-neutral-800 bg-neutral-100 bg-opacity-90 h-full px-10 pt-10 pb-10"
            // style={{ backgroundImage: `url(${LoginBackgroundLight.src})` }}
          >
            <div className="ml-6 space-y-8">
              <div className=" w-[640px]">
                <T.H3 className=" tracking-tight">
                  <p className="text-6xl -ml-4 mb-0 leading-none">＂</p>
                  We are now able to ship our product quicker, allowing us to
                  focus on building the features that matter most to our
                  customers and not worry about the infrastructure.
                </T.H3>
                <div className="mt-8 flex justify-between">
                  <T.P>⭐️ ⭐️ ⭐️ ⭐️ ⭐️</T.P>
                  <T.P className="dark:text-neutral-100 text-base font-[500]">
                    Jonathan Smith - CEO of Company
                  </T.P>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

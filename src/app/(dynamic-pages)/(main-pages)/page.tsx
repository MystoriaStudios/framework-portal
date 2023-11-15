import { AppSupabaseClient } from '@/types';
import { BlogHero } from './BlogHero';
import { getAllPosts } from '@/utils/supabase-queries';
import { createSupabaseServerComponentClient } from '@/supabase-clients/createSupabaseServerComponentClient';
import React from 'react';
import { H1 } from '@/components/ui/Typography/H1';
import { P } from '@/components/ui/Typography/P';
import NewsletterHero from '@/app/NewsletterHero';
import { H3 } from '@/components/ui/Typography/H3';
import { Faq } from '@/components/ui/Faq';

async function fetchData(supabaseClient: AppSupabaseClient) {
  const [items] = await Promise.all([getAllPosts(supabaseClient)]);
  return {
    items: items.slice(0, 3),
  };
}

export default async function HomePage() {
  const supabase = createSupabaseServerComponentClient();
  const { items: initialPosts } = await fetchData(supabase);
  return (
    <>
      <div className="text-center mt-16">
        <H1>Scalable, Efficient Cloud Servers</H1>
        <P className="mt-4">
          Community-Driven server framework designed with simplicity and
          usability in mind.
        </P>
      </div>
      <div className="space-y-2">
        <BlogHero items={initialPosts} />
      </div>

      <NewsletterHero />
      <Faq />
      <div className="py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-2">
          <H3 className="text-center">
            Built using a range of languages and services
          </H3>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="dark:hidden col-span-2 max-h-12 w-full object-contain lg:col-span-1 p-2"
              src="/assets/kotlin_black.svg"
              alt="Kotlin"
              width={158}
              height={48}
            />
            <img
              className="hidden dark:block col-span-2 max-h-12 w-full object-contain lg:col-span-1 p-2"
              src="/assets/kotlin_white.svg"
              alt="Kotlin"
              width={158}
              height={48}
            />

            <img
              className="dark:hidden col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/MongoDB_Fores-Green.svg"
              alt="MongoDB"
              width={158}
              height={48}
            />
            <img
              className="hidden dark:block col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/MongoDB_White.svg"
              alt="MongoDB"
              width={158}
              height={48}
            />

            <img
              className="dark:hidden col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/tailwindcss-logotype.svg"
              alt="Tailwind"
              width={158}
              height={48}
            />
            <img
              className="hidden dark:block col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/tailwindcss-logotype-white.svg"
              alt="Tailwind"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 xl:ml-8 max-h-12 w-full object-contain lg:col-span-1 p-2"
              src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg"
              alt="NextJS"
              width={158}
              height={48}
            />

            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 p-2"
              src="/assets/grpc.svg"
              alt="GRPC"
              width={158}
              height={48}
            />

            <img
              className="dark:hidden col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/black-docker-logo.svg"
              alt="Docker"
              width={158}
              height={48}
            />
            <img
              className="hidden dark:block col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/white-docker-logo.svg"
              alt="Docker"
              width={158}
              height={48}
            />

            <img
              className="dark:hidden col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/redis-logo-full-color-rgb.svg"
              alt="Redis"
              width={158}
              height={48}
            />
            <img
              className="hidden dark:block col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/redis-logo-red-white-rgb.svg"
              alt="Redis"
              width={158}
              height={48}
            />

            <img
              className="dark:hidden col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/github.png"
              alt="Github"
              width={158}
              height={48}
            />
            <img
              className="hidden dark:block col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/assets/github_white.png"
              alt="Github"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </>
  );
}

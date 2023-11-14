import { AppSupabaseClient } from '@/types';
import { getAllItems } from '@/utils/supabase-queries';
import { createSupabaseServerComponentClient } from '@/supabase-clients/createSupabaseServerComponentClient';
import React from 'react';
import { H1 } from '@/components/ui/Typography/H1';
import { P } from '@/components/ui/Typography/P';
import Link from 'next/link';
import { H4 } from '@/components/ui/Typography/H4';

async function fetchData(supabaseClient: AppSupabaseClient) {
  const [items] = await Promise.all([getAllItems(supabaseClient)]);
  return {
    items: items,
  };
}

export default async function HomePage() {
  const supabase = createSupabaseServerComponentClient();
  const { items: initialItems } = await fetchData(supabase);
  return (
    <>
      <div className="space-y-2">
        <div className="mt-8 md:w-1/2 lg:w-2/3 mx-auto">
          <div className="mt-16 mb-8">
            <H1>Blog Area</H1>
            <P className="mt-4">
              We are constantly working to update and improve the usability of
              framework we regularly post updates on our blog!
            </P>
          </div>

          {initialItems.length ? (
            <div
              className={
                'grid lg:grid-cols-2 xl:grid-cols-3 grid-span-row gap-4'
              }
            >
              {initialItems.map((item) => (
                <article
                  key={item.id}
                  className="flex max-w-xl flex-col items-start justify-between shadow rounded-lg"
                >
                  <img
                    width={512}
                    className="mx-auto rounded-t-lg"
                    src={
                      'https://media.istockphoto.com/id/1413837275/photo/abstract-it-design-background-with-a-tilted-triangular-grid-surface-and-python-computer.webp?b=1&s=170667a&w=0&k=20&c=niNjthAGYXZ9zF8a5d9klfKftbd4Ih_F0jWKP4N3DNM='
                    }
                  />

                  <div className="flex items-center gap-x-4 text-xs p-4">
                    <time
                      dateTime={item.created_at}
                      className="text-neutral-500"
                    >
                      {item.created_at}
                    </time>
                    <div className="relative z-10 rounded-full bg-neutral-50 px-3 py-1.5 font-medium text-neutral-600 hover:bg-neutral-100">
                      {item.id.substring(0, 8)}
                    </div>
                  </div>
                  <div className="group relative p-4">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600">
                      <Link href={`/blog/${item.id}`}>
                        <H4>{item.name}</H4>
                      </Link>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <p>No Items</p>
          )}
        </div>
      </div>
    </>
  );
}

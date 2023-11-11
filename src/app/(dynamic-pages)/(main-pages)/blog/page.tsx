import {AppSupabaseClient} from '@/types';
import {getAllItems} from '@/utils/supabase-queries';
import {createSupabaseServerComponentClient} from '@/supabase-clients/createSupabaseServerComponentClient';
import React from "react";
import {H1} from "@/components/ui/Typography/H1";
import {P} from "@/components/ui/Typography/P";
import Link from "next/link";

async function fetchData(supabaseClient: AppSupabaseClient) {
  const [items] = await Promise.all([
    getAllItems(supabaseClient)
  ]);
  return {
    items: items
  };
}

export default async function HomePage() {
  const supabase = createSupabaseServerComponentClient();
  const {items: initialItems} =
    await fetchData(supabase);
  return (
    <>
      <div className="text-center mt-16">
        <H1>Blog Area</H1>
        <P className="mt-4">We are constantly working to update and improve the usability of framework we regularly post
          updates on our blog!</P>
      </div>
      <div className="space-y-2">
        <div className="mt-8 md:w-1/2 lg:w-2/3 mx-auto">
          {initialItems.length ? (
            <div className={'grid lg:grid-cols-2 xl:grid-cols-3 grid-span-row gap-4'}>
              {initialItems.map((item) => (
                <Link
                  href={`/blog/${item.id}`}
                  className="px-3 block cursor-pointer pt-4 pb-3 text-left text-sm font-semibold text-gray-900 divide-y divide-gray-200 bg-white shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
                  key={item.id}
                >
                  <div className="space-y-2">
                    <p className="text-rose-800 text-lg">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </Link>
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

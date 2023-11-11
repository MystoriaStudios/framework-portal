'use client';
import {Table} from '@/types';
import Link from 'next/link';
import React from "react";

export const BlogHero = ({items}: { items: Table<'items'>[] }) => {
  return (
    <div className="mt-8 md:w-1/2 lg:w-2/3 mx-auto">
      {items.length ? (
        <div className={'grid lg:grid-cols-2 xl:grid-cols-3 grid-span-row gap-4'}>
          {items.map((item) => (
            <article key={item.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={item.created_at} className="text-gray-500">
                  {item.created_at}
                </time>
                <div
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {item.id.substring(0, 8)}
                </div>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link
                    href={`/blog/${item.name}`}>
                    <span className="absolute inset-0"/>
                    {item.name}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No Items</p>
      )}
    </div>
  );
};

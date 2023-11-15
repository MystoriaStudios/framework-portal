'use client';
import { Table } from '@/types';
import Link from 'next/link';
import React from 'react';
import { H4 } from '@/components/ui/Typography/H4';
import {P} from "@/components/ui/Typography/P";

export const BlogHero = ({ posts }: { posts: Table<'posts'>[] }) => {
  return (
    <div className="mt-8 md:w-1/2 lg:w-2/3 mx-auto">
      {posts && posts.length ? (
        <div
          className={'grid lg:grid-cols-2 xl:grid-cols-3 grid-span-row gap-4'}
        >
          {posts.map((item) => (
            <article
              key={item.id}
              className="flex max-w-xl flex-col posts-start justify-between shadow rounded-lg"
            >
              <img
                width={512}
                className="mx-auto rounded-t-lg"
                src={
                  'https://media.istockphoto.com/id/1413837275/photo/abstract-it-design-background-with-a-tilted-triangular-grid-surface-and-python-computer.webp?b=1&s=170667a&w=0&k=20&c=niNjthAGYXZ9zF8a5d9klfKftbd4Ih_F0jWKP4N3DNM='
                }
              />

              <div className="flex posts-center gap-x-4 text-xs p-4">
                <time dateTime={item.created_at} className="text-neutral-500">
                  {item.created_at}
                </time>
                <div className="relative z-10 rounded-full bg-neutral-50 px-3 py-1.5 font-medium text-neutral-600 hover:bg-neutral-100">
                  {item.id}
                </div>
              </div>
              <div className="group relative p-4">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-neutral-900 group-hover:text-neutral-600">
                  <Link href={`/blog/${item.id}`}>
                    <H4>{item.title}</H4>
                  </Link>
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-neutral-600">
                  {item.content}
                </p>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <P>No Posts</P>
      )}
    </div>
  );
};

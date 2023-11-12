'use client';

import { supabaseUserClientComponentClient } from '@/supabase-clients/supabaseUserClientComponentClient';
import { createSuspenseResource } from '@/utils/createSuspenseResource';
import { User } from '@supabase/supabase-js';

import { NavLink } from './NavLink';
import NavTheme from '@/app/NavTheme';
import React from 'react';

// This will only be run on the client side and without SSR.
// We need to check if a user is logged in and show the appropriate link

const userResource = createSuspenseResource<User | null>(
  supabaseUserClientComponentClient.auth
    .getUser()
    .then(({ data }) => data?.user ?? null)
);

export function NavHero() {
  const user = userResource.read();

  return (
    <div className="flex gap-x-4">
      {user ? (
        <span className="flex ml-auto">
          {user.user_metadata.full_name}
          <img
            className="h-6 w-6 rounded-lg ml-2"
            src={user.user_metadata.avatar_url}
          />
        </span>
      ) : (
        <>
          <NavLink href="/login">Login</NavLink>
          <NavLink href="/register">Register</NavLink>
        </>
      )}

      <NavTheme />
    </div>
  );
}

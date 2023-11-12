'use client';
import {redirect, useParams} from 'next/navigation';
import {getOrganization} from '@/utils/supabase-queries';
import {createSupabaseStaticClient} from '@/supabase-clients/createSupabaseStaticClient';
import React from "react";
import Link from "next/link";

export default function OrganizationAuthWrapper({id, children}) {
  const params = useParams();
  const organization_id = `${params.organization}`;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore

  const comp = OrganizationAuthWrapperServer({id, organization_id})
  return (
    <>
      {comp}
      {comp ? children : <></>}
    </>
  );
}

async function OrganizationAuthWrapperServer({
  id,
  organization_id,
  children,
}) {
  try {
    const supabaseClient = createSupabaseStaticClient();
    const organization = await getOrganization(supabaseClient, organization_id);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (organization.director !== id) {
      return redirect('/dashboard');
    }
    return (
      <>
        <div
          className={
            'block w-1/2 -mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-neutral-50/75 dark:bg-neutral-900/75 dark:rounded-t-2xl rounded-b-2xl p-2'
          }
        >
          <Link
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            href={`/dashboard/${organization.id}`}
            className={'flex mx-auto'}
          >
            Dashboard
          </Link>

          <Link
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            href={`/dashboard/${organization.id}/nodes`}
            className={'flex mx-auto'}
          >
            Nodes
          </Link>

          <Link
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            href={`/dashboard/${organization.id}/templates`}
            className={'flex mx-auto'}
          >
            Templates
          </Link>

          <Link
            /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
            // @ts-ignore
            href={`/dashboard/${organization.id}/billing`}
            className={'flex mx-auto'}
          >
            Billing
          </Link>
      </div>
      {children}
    </>);
  } catch (err) {
    return redirect('/dashboard');
  }
}

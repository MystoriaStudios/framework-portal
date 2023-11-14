'use client';
import { notFound, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getOrganization } from '@/utils/supabase-queries';
import Link from 'next/link';
import { createSupabaseStaticClient } from '@/supabase-clients/createSupabaseStaticClient';

export default function OrganizationAuthWrapper({ id, children }) {
  const params = useParams();

  const organization_id = `${params.organization}`;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const supabaseClient = createSupabaseStaticClient();
  const [organization, setOrganization] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const data: any = await getOrganization(supabaseClient, organization_id);

      setOrganization(data);
    };

    fetch();
  });

  if (organization == undefined) {
    return 'Loading organization data.';
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (organization.director !== id) {
    return notFound();
  }
  return (
    <>
      <div
        className={
          'block w-1/2 -mt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 bg-neutral-50/75 dark:bg-neutral-900/75 dark:rounded-t-2xl rounded-b-2xl p-2'
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
          href={`/dashboard/${organization.id}/moderation`}
          className={'flex mx-auto'}
        >
          Moderation
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
    </>
  );
}

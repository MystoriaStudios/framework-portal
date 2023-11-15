'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { H4 } from '@/components/ui/Typography/H4';
import { P } from '@/components/ui/Typography/P';
import Link from 'next/link';
import { faAdd, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { getOrganizations } from '@/utils/supabase-queries';
import { H1 } from '@/components/ui/Typography/H1';
import React, { useEffect, useState } from 'react';
import { supabaseUserClientComponentClient } from '@/supabase-clients/supabaseUserClientComponentClient';

export default function Dashboard() {
  const supabaseClient = supabaseUserClientComponentClient;
  const [organizations, setOrganizations] = useState(undefined);

  useEffect(() => {
    const fetch = async () => {
      const data = await getOrganizations(supabaseClient);

      setOrganizations(data);
    };

    fetch();
  });
  return (
    <div className={'md:w-3/4 mx-auto'}>
      <H1 className={'xl:mx-20 xl:mb-8 xl:mt-12'}>Choose a dashboard</H1>
      <div
        className={
          'xl:m-20 border-neutral-300 dark:border-neutral-900 rounded-lg border-2 border-dashed'
        }
      >
        {organizations && organizations.length > 0 ? (
          <div className={'grid grid-cols-3'}>
            {organizations.map((organization) => (
              <Link
                key={organization.id}
                href={`/dashboard/${organization.id}`}
                className="m-4 border-rose-800 odd:border-amber-500 border-2 rounded-2xl p-3"
              >
                <H4>{organization.name}</H4>
                <hr />
                <div className={'py-4 flex flex-col'}>
                  <strong>Assigned Nodes: 0</strong>

                  <strong>Active Deployments: 0</strong>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className={'2xl:p-8'}>
            <div className={'lg:w-2/4 mx-auto text-center'}>
              <div className={'flex flex-col p-4'}>
                <FontAwesomeIcon
                  className={'mx-auto text-rose-800 h-12 w-12 mb-4'}
                  icon={faFolder}
                ></FontAwesomeIcon>
                <H4>No organizations</H4>
                <P className={'tracking-tighter'}>
                  Get started by creating an organization or follow join link.
                </P>

                <div className={'px-24 grid grid-cols-2 gap-x-4 mt-12'}>
                  <Link
                    href={'/dashboard/organization-onboarding'}
                    className="flex w-full justify-center rounded-md bg-rose-700 px-3 py-1.5 text-xs font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                  >
                    Create{' '}
                    <FontAwesomeIcon
                      className={'h-5 w-5 mt-0.5 ml-1'}
                      icon={faAdd}
                    ></FontAwesomeIcon>
                  </Link>
                  <Link
                    href={'/dashboard/self'}
                    className="flex w-full justify-center rounded-md bg-rose-700 px-3 py-1.5 text-xs font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                  >
                    Your Account{' '}
                    <FontAwesomeIcon
                      className={'h-4 w-4 mt-1 ml-2'}
                      icon={faUserAlt}
                    ></FontAwesomeIcon>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

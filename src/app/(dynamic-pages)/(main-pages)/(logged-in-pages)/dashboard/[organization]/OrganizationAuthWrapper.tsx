'use client';
import { notFound, useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getOrganization } from '@/utils/supabase-queries';
import Link from 'next/link';
import { supabaseUserClientComponentClient } from '@/supabase-clients/supabaseUserClientComponentClient';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

import Image from 'next/image';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OrganizationAuthWrapper({ id, children }) {
  const params = useParams();

  const organization_id = `${params.organization}`;
  const supabaseClient = supabaseUserClientComponentClient;
  const [organization, setOrganization] = useState(undefined);
  const [showNav, setShowNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [dynClass, setDynClass] = useState(
    'dark:bg-neutral-900 top-24 rounded-t-2xl'
  );

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 50) {
      setHidden(true);
      setShowNav(false);
      setDynClass('dark:bg-neutral-900/95 shadow top-[4.8em] rounded-t-none');
    } else {
      setHidden(false);
      setDynClass('dark:bg-neutral-900 top-24 rounded-t-2xl');
    }
  });
  useEffect(() => {
    const fetch = async () => {
      const data = await getOrganization(supabaseClient, organization_id);

      setOrganization(data);
    };

    fetch();
  });

  if (organization == null) {
    return 'Loading organization data.';
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (organization.director !== id) {
    return notFound();
  }
  return (
    <>
      <motion.nav
        className={`z-40 ${dynClass} backdrop-blur fixed inset-0 w-[95%] sm:w-[90%] mx-auto bg-neutral-100 font-medium flex  max-sm:justify-between gap-4 px-3 max-w-7xl items-center rounded-b-2xl font-mono h-14 p-5 overflow-hidden `}
        variants={{
          long: { maxWidth: 950 },
          short: { maxWidth: 280 },
          hideNav: {
            height: 56,
            borderRadius: 50,

            alignItems: 'center',
            transition: { delay: 0, duration: 0.3 },
          },
          showNav: {
            height: 280,
            borderRadius: 22,
            alignItems: 'start',
            transition: { delay: 0 },
          },
        }}
        initial={'short'}
        animate={[hidden ? 'short' : 'long', showNav ? 'showNav' : 'hideNav']}
        transition={{
          duration: 0.6,
          type: 'spring',
          stiffness: 80,
          damping: 14,
        }}
      >
        <div className="min-w-[40px] min-h-[40px] rounded-full gap-2 bg-slate-50 flex items-center justify-center">
          <Image src={'/assets/logo.svg'} alt="logo" width={44} height={44} />
        </div>
        <motion.ul
          className={`w-full ${
            showNav
              ? '[--display-from:none] [--display-to:flex]'
              : 'max-sm:[--display-from:none] sm:[--display-to:flex]'
          }  [--opacity-from:0.1] [--opacity-to:1] flex-col sm:flex-row items-center justify-center gap-10 max-sm:gap-5 max-sm:pt-10`}
          variants={{
            hidden: {
              display: 'var(--display-from, none)',
              opacity: 'var(--opacity-from, 1)',
              transition: { duration: 0.6, delay: 0 },
            },
            visible: {
              display: 'var(--display-to, none)',
              opacity: 'var(--opacity-to, 1)',
              transition: { duration: 0.6, delay: 0 },
            },
          }}
          initial={'hidden'}
          animate={[
            hidden && !showNav ? 'hidden' : 'visible',
            showNav ? 'visible' : '',
          ]}
        >
          {[
            {
              name: 'Dashboard',
              href: ``,
            },
            {
              name: 'Deployments',
              href: `deployments`,
            },
            {
              name: 'Templates',
              href: `templates`,
            },
            {
              name: 'Moderation',
              href: `moderation`,
            },
            {
              name: 'Billing',
              href: `billing`,
            },
          ].map((link) => (
            <li key={link.name}>
              <Link
                /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                // @ts-ignore
                className={
                  'transition-all transition duration-200 delay-50 flex mx-auto hover:border-b-4 border-rose-800'
                }
                href={`/dashboard/${organization.id}/${link.href}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </motion.ul>

        <motion.div
          className="w-full [--display-from:none][--display-to:inline-block] "
          variants={{
            hidden: {
              display: 'var(--display-from, none)',
              transition: { delay: 0, duration: 0.3 },
            },
            visible: {
              display: 'var(--display-to)',
              transition: { delay: 0.2, duration: 0.3 },
            },
          }}
          initial="hidden"
          animate={hidden ? 'visible' : 'hidden'}
        >
          <Button variant={'secondary'} className="w-full">
            Contact
          </Button>
        </motion.div>

        <Button
          size={'icon'}
          variant={'ghost'}
          className="rounded-full min-w-[40px] sm:hidden"
          onClick={() => {
            setHidden(false);
            setShowNav((prev) => !prev);
          }}
        >
          {showNav ? <ChevronUp /> : <ChevronDown />}
        </Button>
      </motion.nav>
      <div className="pt-8">{children}</div>
    </>
  );
}

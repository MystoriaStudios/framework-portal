import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { H4 } from '@/components/ui/Typography/H4';
import { P } from '@/components/ui/Typography/P';
import Link from 'next/link';
import { faAdd, faUserAlt } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  return (
    <div className={'md:w-3/4 mx-auto'}>
      <div
        className={
          'xl:m-20 border-neutral-300 dark:border-neutral-900 rounded-lg border-2 border-dashed'
        }
      >
        <div className={'2xl:p-8'}>
          <div className={'lg:w-2/4 mx-auto text-center'}>
            <div className={'flex flex-col p-4'}>
              <FontAwesomeIcon
                className={'mx-auto text-rose-800 h-12 w-12'}
                icon={faFolder}
              ></FontAwesomeIcon>
              <H4>No organizations</H4>
              <P className={'tracking-tighter'}>
                Get started by creating an organization or follow join link.
              </P>

              <div className={'px-24 grid grid-cols-2 gap-x-4 mt-12'}>
                <Link
                  href={'/dashboard/organization-onboarding'}
                  className="flex w-full justify-center rounded-md bg-rose-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
                >
                  Create{' '}
                  <FontAwesomeIcon
                    className={'h-5 w-5 mt-0.5 ml-1'}
                    icon={faAdd}
                  ></FontAwesomeIcon>
                </Link>
                <Link
                  href={'/dashboard/self'}
                  className="flex w-full justify-center rounded-md bg-rose-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
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
      </div>
    </div>
  );
}

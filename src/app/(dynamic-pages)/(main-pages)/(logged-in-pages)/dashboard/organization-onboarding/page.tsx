import {insertOrganizationAction} from '@/app/(dynamic-pages)/(main-pages)/(logged-in-pages)/actions';
import {
  ClientPage
} from '@/app/(dynamic-pages)/(main-pages)/(logged-in-pages)/dashboard/organization-onboarding/ClientPage';

export default function Dashboard() {
  return <ClientPage insertItemAction={insertOrganizationAction}/>;
}

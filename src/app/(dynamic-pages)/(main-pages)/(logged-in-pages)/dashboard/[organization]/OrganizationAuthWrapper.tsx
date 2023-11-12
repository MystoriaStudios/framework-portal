'use client';
import {redirect, useParams} from 'next/navigation';
import {getOrganization} from '@/utils/supabase-queries';
import {createSupabaseStaticClient} from '@/supabase-clients/createSupabaseStaticClient';

export default function OrganizationAuthWrapper({id, children}) {
  const params = useParams();
  const organization_id = `${params.organization}`;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (
    <OrganizationAuthWrapperServer id={id} organization_id={organization_id}>
      {children}
    </OrganizationAuthWrapperServer>
  );
}

async function OrganizationAuthWrapperServer({
                                               id,
                                               organization_id,
                                               children,
                                             }) {
  ('');
  try {
    const supabaseClient = createSupabaseStaticClient();
    const organization = await getOrganization(supabaseClient, organization_id);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (organization.director !== id) {
      return redirect('/dashboard');
    }
    return children;
  } catch (err) {
    return redirect('/dashboard');
  }
}

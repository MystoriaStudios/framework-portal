import { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { createSupabaseServerComponentClient } from '@/supabase-clients/createSupabaseServerComponentClient';
import OrganizationAuthWrapper from '@/app/(dynamic-pages)/(main-pages)/(logged-in-pages)/dashboard/[organization]/OrganizationAuthWrapper';

export default async function Layout({ children }: { children: ReactNode }) {
  const supabaseClient = createSupabaseServerComponentClient();
  const { data, error } = await supabaseClient.auth.getUser();

  if (!data.user) {
    // This is unreachable because the user is authenticated
    // But we need to check for it anyway for TypeScript.
    return redirect('/login');
  } else if (error) {
    return <p>Error: An error occurred.</p>;
  }

  // WEWE NEEED TO DO SOMEE FORM OF CHEECK HRE O AMEK SSUREE THAT THEE PARARMEETEER IN  THE URL IS LIKE ACCESSIBLEE BY THE LOGGEED IN USSSER IF NOT DETEEER THEM AWAYA FROM IT.

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <OrganizationAuthWrapper id={data.user.id}>
      {children}
    </OrganizationAuthWrapper>
  );
}

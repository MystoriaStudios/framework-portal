'use client';

import {redirect, useParams} from "next/navigation";
import {getOrganization} from "@/utils/supabase-queries";
import {createSupabaseStaticClient} from "@/supabase-clients/createSupabaseStaticClient";

export default async function OrganizationAuthWrapper({ id, children }) {
  try {
    const params = useParams();
    const organization_id = `${params.organization}`;

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

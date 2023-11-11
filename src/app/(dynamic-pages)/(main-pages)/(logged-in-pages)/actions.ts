'use server';

import {createSupabaseServerActionClient} from '@/supabase-clients/createSupabaseServerActionClient';
import {deleteOrganization, getOrganization, insertOrganization, updateOrganization,} from '@/utils/supabase-queries';
import {revalidatePath} from 'next/cache';

export async function insertOrganizationAction(payload: {
  name: string;
  description: string;
}) {
  const supabaseClient = createSupabaseServerActionClient();
  const data = await insertOrganization(supabaseClient, payload);
  revalidatePath('/');
  return data.id;
}
export async function getOrganizationAction(id: string | string[]) {
  const supabaseClient = createSupabaseServerActionClient();
  return await getOrganization(supabaseClient, id);
}

export async function updateOrganizationAction(payload: {
  id: string;
  name: string;
  description: string;
}) {
  const supabaseClient = createSupabaseServerActionClient();
  const data = await updateOrganization(supabaseClient, payload);
  revalidatePath('/');
  return data;
}

export const deleteOrganizationAction = async (id: string) => {
  const supabaseClient = createSupabaseServerActionClient();
  await deleteOrganization(supabaseClient, id);

  revalidatePath('/');
};

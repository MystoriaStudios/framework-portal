'use server';

import { createSupabaseServerActionClient } from '@/supabase-clients/createSupabaseServerActionClient';
import {
  deleteOrganization,
  getOrganization,
  getOrganizations,
  insertOrganization,
  updateOrganization,
} from '@/utils/supabase-queries';
import { revalidatePath } from 'next/cache';

export async function insertOrganizationAction(payload: {
  name: string;
  description: string;
}) {
  const supabaseClient = createSupabaseServerActionClient();
  const data = await insertOrganization(supabaseClient, payload);
  revalidatePath('/');
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return data.id;
}

export async function getOrganizationAction(id: string) {
  const supabaseClient = createSupabaseServerActionClient();
  return await getOrganization(supabaseClient, id);
}

export async function getOrganizationsAction(id: string) {
  const supabaseClient = createSupabaseServerActionClient();
  return await getOrganizations(supabaseClient);
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

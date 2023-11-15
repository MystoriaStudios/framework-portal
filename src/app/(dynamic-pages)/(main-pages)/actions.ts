'use server';

import { createSupabaseServerActionClient } from '@/supabase-clients/createSupabaseServerActionClient';
import {
  deletePost,
  getAllPosts,
  getPost,
  insertPost,
  updatePost,
} from '@/utils/supabase-queries';
import { revalidatePath } from 'next/cache';

export async function insertPostAction(payload: {
  title: string;
  content: string;
}) {
  const supabaseClient = createSupabaseServerActionClient();
  const data = await insertPost(supabaseClient, payload);
  revalidatePath('/');
  return data.id;
}

export async function getAllPostsAction() {
  const supabaseClient = createSupabaseServerActionClient();
  return await getAllPosts(supabaseClient);
}

export async function getPostAction(id: number) {
  const supabaseClient = createSupabaseServerActionClient();
  return await getPost(supabaseClient, id);
}

export async function updatePostAction(payload: {
  id: number;
  title: string;
  content: string;
}) {
  const supabaseClient = createSupabaseServerActionClient();
  const data = await updatePost(supabaseClient, payload);
  revalidatePath('/');
  return data;
}

export const deletePostAction = async (id: number) => {
  const supabaseClient = createSupabaseServerActionClient();
  await deletePost(supabaseClient, id);

  revalidatePath('/');
};

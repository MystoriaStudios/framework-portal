import {AppSupabaseClient, AuthProvider, Table} from '@/types';
import {toSiteURL} from './helpers';

export const getAllItems = async (
  supabase: AppSupabaseClient
): Promise<Array<Table<'items'>>> => {
  const {data, error} = await supabase.from('items').select('*');

  if (error) {
    throw error;
  }

  return data;
};

export const insertItem = async (
  supabase: AppSupabaseClient,
  item: { name: string; description: string }
): Promise<Table<'items'>> => {
  const {data, error} = await supabase
    .from('items')
    .insert(item)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const updateItem = async (
  supabase: AppSupabaseClient,
  item: { id: string; name: string; description: string }
) => {
  const {data, error} = await supabase.from('items').update(item).single();

  if (error) {
    throw error;
  }

  return data;
};

export const deleteItem = async (supabase: AppSupabaseClient, id: string) => {
  const {error} = await supabase.from('items').delete().match({id});

  if (error) {
    throw error;
  }

  return true;
};

export const getItem = async (
  supabase: AppSupabaseClient,
  id: string
): Promise<Table<'items'>> => {
  const {data, error} = await supabase
    .from('items')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const insertOrganization = async (
  supabase: AppSupabaseClient,
  item: { name: string }
): Promise<Table<'organizations'>> => {
  const {data, error} = await supabase
    .from('organizations')
    .insert(item)
    .select('*')
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const updateOrganization = async (
  supabase: AppSupabaseClient,
  item: { id: string; name: string }
) => {
  const {data, error} = await supabase
    .from('organizations')
    .update(item)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const deleteOrganization = async (
  supabase: AppSupabaseClient,
  id: string
) => {
  const {error} = await supabase.from('organizations').delete().match({id});

  if (error) {
    throw error;
  }

  return true;
};
export const getOrganization = async (
  supabase: AppSupabaseClient,
  id: string
): Promise<Table<'organizations'>> => {
  const {data, error} = await supabase
    .from('organizations')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw error;
  }

  return data;
};

export const getOrganizations = async (
  supabase: AppSupabaseClient
): Promise<Array<Table<'organizations'>>> => {
  const {data, error} = await supabase
    .from('organizations')
    .select('*')

  if (error) {
    throw error;
  }

  return data;
};

export const signInWithMagicLink = async (
  supabase: AppSupabaseClient,
  email: string
) => {
  const {error} = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: toSiteURL('/auth/callback'),
    },
  });

  if (error) {
    throw error;
  }
};

export const signInWithPassword = async (
  supabase: AppSupabaseClient,
  email: string,
  password: string
) => {
  const {error} = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }
};

export const resetPassword = async (
  supabase: AppSupabaseClient,
  email: string
) => {
  const {error} = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: toSiteURL('/update-password'),
  });

  if (error) {
    throw error;
  }
};

export const updatePassword = async (
  supabase: AppSupabaseClient,
  password: string
) => {
  const {error} = await supabase.auth.updateUser({
    password,
  });

  if (error) {
    throw error;
  }
};

export const signInWithProvider = async (
  supabase: AppSupabaseClient,
  provider: AuthProvider
) => {
  const {error} = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: toSiteURL('/auth/callback'),
    },
  });

  if (error) {
    throw error;
  }
};

export const signUp = async (
  supabase: AppSupabaseClient,
  email: string,
  password: string
) => {
  const {error} = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: toSiteURL('/auth/callback'),
    },
  });

  if (error) {
    throw error;
  }
};

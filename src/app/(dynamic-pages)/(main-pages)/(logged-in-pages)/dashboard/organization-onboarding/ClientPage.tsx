'use client';

import { Button } from '@/components/ui/button';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

export const ClientPage = ({
  insertItemAction,
}: {
  insertItemAction: (item: { name: string }) => Promise<string>;
}) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const toastRef = useRef<string | null>(null);

  const { mutate } = useMutation(
    async (item: { name: string }) => {
      return insertItemAction(item);
    },
    {
      onMutate: () => {
        const toastId = toast.loading('Creating organization');
        toastRef.current = toastId;
      },

      onSuccess: (newItemId) => {
        toast.success('Organization created', { id: toastRef.current });
        toastRef.current = null;
        router.refresh();
        queryClient.invalidateQueries(['organizations']);
        router.push(`/dashboard/${newItemId}`);
      },
      onError: () => {
        toast.error('Failed to create organization', { id: toastRef.current });
        toastRef.current = null;
      },
    }
  );
  const [name, setName] = useState('');
  return (
    <form
      className="flex flex-col space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        //TODO: do better validation 🤷‍♂️
        const name = formData.get('name') as string;
        mutate({ name });
      }}
    >
      <div>
        <h1 className="mt-1 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          Create Organization
        </h1>
      </div>
      <div className="space-y-2">
        <label
          className="block text-sm font-medium text-neutral-700"
          htmlFor="name"
        >
          Name
        </label>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          id="name"
          name="name"
          type="text"
          className="block w-full appearance-none rounded-md border border-neutral-300 px-3 py-2 placeholder-neutral-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-green-500 sm:text-sm"
        />
      </div>
      <Button variant="default" type="submit">
        Create Organization
      </Button>
    </form>
  );
};

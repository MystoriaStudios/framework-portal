'use client';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/Dialog';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import Trash from 'lucide-react/dist/esm/icons/trash';

type Props = {
  itemId: number;
  deletePostAction: (itemId: number) => Promise<void>;
};

export const ConfirmDeletePostDialog = ({
  itemId,
  deletePostAction,
}: Props) => {
  const [open, setOpen] = useState(false);
  const toastRef = useRef<string | null>(null);
  const router = useRouter();
  const { mutate, isLoading } = useMutation(
    async (id: number) => {
      return deletePostAction(id);
    },
    {
      onMutate: () => {
        const toastId = toast.loading('Deleting item');
        toastRef.current = toastId;
      },
      onSuccess: () => {
        toast.success('Post deleted', { id: toastRef.current });
        toastRef.current = null;
        router.refresh();
        router.push('/');
      },
      onError: () => {
        toast.error('Failed to delete item', { id: toastRef.current });
        toastRef.current = null;
      },
      onSettled: () => {
        setOpen(false);
      },
    }
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Trash className="mr-1" /> Delete Post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Post</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this item?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="button"
            variant="destructive"
            disabled={isLoading}
            onClick={() => {
              mutate(itemId);
            }}
          >
            {isLoading ? `Deleting item...` : `Yes, delete`}
          </Button>
          <Button
            disabled={isLoading}
            type="button"
            variant="outline"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

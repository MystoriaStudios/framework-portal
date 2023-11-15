import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPost } from '@/utils/supabase-queries';
import { ConfirmDeletePostDialog } from './ConfirmDeletePostDialog';
import { T } from '@/components/ui/Typography';
import ArrowLeft from 'lucide-react/dist/esm/icons/arrow-left';
import { createSupabaseServerComponentClient } from '@/supabase-clients/createSupabaseServerComponentClient';
import { deletePostAction } from '../../actions';

export default async function Post({
  params,
}: {
  params: {
    itemId: number;
  };
}) {
  const supabaseClient = createSupabaseServerComponentClient();

  const { itemId } = params;
  try {
    const item = await getPost(supabaseClient, itemId);
    return (
      <div className="space-y-2">
        <div className="space-y-4">
          <Link
            href="/blog"
            className="text-sm text-blue-600 text-underline flex items-center space-x-2"
          >
            <ArrowLeft /> <span>View all posts</span>
          </Link>
          <T.H1>{item.title}</T.H1>
          <T.Subtle>Description: {item.content}</T.Subtle>
        </div>
        <div className="flex">
          <ConfirmDeletePostDialog
            deletePostAction={deletePostAction}
            itemId={itemId}
          />
        </div>
      </div>
    );
  } catch (error) {
    return notFound();
  }
}

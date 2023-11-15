import { ClientPage } from './ClientPage';
import { insertPostAction } from '../actions';

export const dynamic = 'force-dynamic';

export default async function NewPost() {
  return <ClientPage insertPostAction={insertPostAction} />;
}

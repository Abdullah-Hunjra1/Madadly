import EmbedPage from '@/src/components/EmbedPage';
import { getSession } from '@/src/lib/getSession';

export const instant = false;

async function page() {
  const session = await getSession();
  const ownerId = session?.user?.id;

  if (!ownerId) return null;

  return (
    <>
        <EmbedPage ownerId={ownerId} />
    </>
  )
}

export default page
import DashboardPage from '@/src/components/DashboardPage';
import { getSession } from '@/src/lib/getSession';

async function page() {
  const session = await getSession();
  return (
    <>
        <DashboardPage ownerId={session?.user?.id!} />
    </>
  )
}

export default page
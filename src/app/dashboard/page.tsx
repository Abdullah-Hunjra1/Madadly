import DashboardPage from '@/src/components/DashboardPage';
import { getSession } from '@/src/lib/getSession';
import { redirect } from 'next/navigation';
export const instant = false;
async function page() {
  const session = await getSession();

  if (!session?.user?.id) {
    redirect('/login');
  }

  return (
    <>
        <DashboardPage ownerId={session.user.id} />
    </>
  )
}

export default page
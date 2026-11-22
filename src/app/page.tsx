import HomeClient from "../components/home/HomePage";
import { getSession } from "../lib/getSession";


export const instant = false;
export default async  function Home() {

  const session = await getSession();
  return (
    <>
    <HomeClient email={session?.user?.email!} />
    </>
  );
}

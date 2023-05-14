import { Inter } from "next/font/google";
import Head from "next/head";
import Dashboard from "../../components/Dashboard";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const { data: session } = useSession();
  // console.log(session.user.acessToken);
  return (
    <div className="">
      <Head>
        <title>Spotify 2.0</title>
      </Head>

      <Dashboard />
    </div>
  );
}

import type { NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ality Next - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1 className="text-3xl font-bold ">Dashboard</h1>
      </div>
    </>
  );
};

export default Dashboard;

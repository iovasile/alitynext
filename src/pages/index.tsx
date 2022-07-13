import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ality Next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="flex justify-between">
        <h3>Home</h3>
        <Link href="/login" className="">
          <a className="underline">Login</a>
        </Link>
      </nav>
      <div>
        <h1 className="text-3xl font-bold ">Ality next</h1>
      </div>
    </>
  );
};

export default Index;

import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <main className="overflow-none flex h-screen justify-center">
        <div className="">Single Post</div>
      </main>
    </>
  );
};

export default Home;

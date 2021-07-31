import Head from "next/head";
import Header from "../components/Header";
import Search from "../components/Search";
import Card from "../components/Card";
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Story Listing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <div className="flex flex-row flex-wrap gap-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

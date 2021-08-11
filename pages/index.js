import Head from "next/head";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <Hero />

      <div>
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
        <Welcome />
      </div>
    </div>
  );
}

import Head from "next/head";
import styles from "../styles/Home.module.css";
import Dashboard from "../src/components/Dashboard";
import { useSession } from "next-auth/react";
import Login from "../src/components/Login";

export default function Home() {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Head>
        <title> Data Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {session.status === "authenticated" ? (
        <main>
          <Dashboard />
        </main>
      ) : (
        <Login />
      )}
    </div>
  );
}

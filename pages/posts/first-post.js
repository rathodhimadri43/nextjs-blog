import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../component/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <h1>First Post</h1>
      <h2 className="title">
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image src="/images/logo.png" height={144} width={144} alt="App Logo" />
    </Layout>
  );
}

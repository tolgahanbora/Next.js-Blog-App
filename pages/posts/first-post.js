import Link from "next/link";
import Head from "next/head"
import Script from "next/script"
import Layout from "../../components/Layout";

export default function FirstPost() {
    return <>
    <Layout>
    <Head>
        <title>Post Page</title>
        <link rel="icon" href="/favicon.ico"/>
    </Head>

    <Script
    src="https://connect.facebook.net/en_US/sdk.js"
    strategy="lazyOnload"
    onLoad={() => {
        console.log("Script loaded correctly")
    }}
    />

        <h1 className="title">First Post</h1>
        <h2>
            <Link href="/">Back to Home</Link>
        </h2>
        </Layout>
    </>
}
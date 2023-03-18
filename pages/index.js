import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          I am an Engineering Physicist and a developer may develop feelings for
          you
        </p>
        <p>
          This is a sample website
          <a href="/">arigato</a>
        </p>
      </section>
    </Layout>
  );
}

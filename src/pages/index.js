import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Homepage from "@site/src/components/Homepage";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import LandingPageAnimation from "../components/LandingPageAnimation";
import { ChevronRight } from "lucide-react";
import BrowserOnly from "@docusaurus/BrowserOnly";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroContainer}>
      <div className="container" style={{ zIndex: 3 }}>
        <Heading as="h1" className={styles.heroTitle}>
          <img
            src="/img/logo.png"
            alt="Pine Logo"
            style={{ width: "5rem", height: "auto", objectFit: "contain" }}
          />
          Pine
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroButtonsContainer}>
          <div className={styles.buttons}>
            <Link
              to="/docs/intro"
              className={`${styles.heroLinks} ${styles.documentation}`}
            >
              Documentation
              <ChevronRight />
            </Link>
          </div>
          <div className={styles.buttons}>
            <Link
              to="https://github.com/BryanMwangi/pine"
              className={`${styles.heroLinks} ${styles.github}`}
            >
              <img
                height="32"
                width="32"
                src="https://simpleicons.org/icons/github.svg"
                alt="Github"
              />
              Github
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
      <LandingPageAnimation />
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A simple Go server framework inspired by Express"
    >
      <HomepageHeader />
      <main>
        <Homepage />
      </main>
    </Layout>
  );
}

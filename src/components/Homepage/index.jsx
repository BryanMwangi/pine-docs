import { useEffect, useState } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import "./styles.css";
import {
  advancedExample,
  averageLatency,
  exampleOne,
  MainFeatureList,
  requestsPerSecond,
  simpleExample,
  slowest,
} from "./data";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
import { MoveRight, MoveDown, ChevronRight } from "lucide-react";
import Link from "@docusaurus/Link";
import ColumnChart from "../Chart/ColumnChart";
import BrowserOnly from "@docusaurus/BrowserOnly";

function Feature({ imageUrl, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className="featureSvg" role="img" src={imageUrl} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Homepage() {
  const [isDesktop, setIsDesktop] = useState(true);
  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      setIsDesktop(window.innerWidth > 996);
    });

    useEffect(() => {
      setIsDesktop(window.innerWidth > 996);
      const highlightElements = document.querySelectorAll(".highlights");

      if (highlightElements.length) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
            } else {
              entry.target.classList.remove("in-view");
            }
          });
        });
        highlightElements.forEach((element) => {
          observer.observe(element);
        });
        return () => observer.disconnect();
      }
    }, []);
  }
  return (
    <>
      <section className="features">
        <article className="article">
          <h1>Simple Go server framework inspired by Express</h1>
          <p>
            Pine is built on the same concepts of ease of use such as Fiber
            golang or Express JS.
          </p>
          <p>
            If you are familiar with Express or Fiber, Pine will be a breeze to
            use.
          </p>
        </article>
      </section>
      <section className="features">
        <div className="codeDiv">
          <SyntaxHighlighter language="go" style={nightOwl}>
            {exampleOne}
          </SyntaxHighlighter>
        </div>
      </section>
      <section className="features">
        <div className="ctaDiv">
          <article className="article">
            <h1>Get started with Pine</h1>
          </article>
          <Link to="/docs/intro" className="ctaButton">
            Get Started <ChevronRight />
          </Link>
        </div>
      </section>
      <section className="features">
        <article className="articleMinor">
          <h1>Why Pine?</h1>
          <p>
            There are a tonne of frameworks out there and often than not, they
            do not differ from each other. Pine is no different. However, what
            Pine wants to offer is not just a{" "}
            <span className="highlights">tool</span> or a{" "}
            <span className="highlights">framework</span>, but a place to{" "}
            <span className="highlights">learn</span> how frameworks are
            actually built.
          </p>
          <p>
            Understand how frameworks work and as you advance as a developer
            learn how to implement some of the solutions yourself. You can check
            out deep dive examples in our <a>advanced documentation</a>.
          </p>
        </article>
      </section>
      <section className="features">
        <div className="codeRow">
          <div className="codeDiv" style={{ alignSelf: "flex-start" }}>
            <SyntaxHighlighter language="go" style={nightOwl}>
              {simpleExample}
            </SyntaxHighlighter>
          </div>
          <span className="codeSpan">
            <p>Under the hood</p>
            {isDesktop ? <MoveRight /> : <MoveDown />}
          </span>
          <div className="codeDiv">
            <SyntaxHighlighter language="go" style={nightOwl}>
              {advancedExample}
            </SyntaxHighlighter>
          </div>
        </div>
      </section>
      <section className="features">
        <article className="articleMinor">
          <h1>Extreme performance</h1>
          <p>
            Pine offers exceptional performance compared to other frameworks.
            Currently Pine aims to compete with Express JS and Fiber. Pine is
            able to keep up or sometimes beat Fiber in synthetic tests.
            Benchmarks were carried out using{" "}
            <Link to="https://github.com/hatoo/oha">Oha</Link>
          </p>
        </article>
        <div className="chartRow">
          <div className="chartDiv">
            <ColumnChart
              label={"Req/s"}
              dataType1={"Req/s"}
              unit={""}
              data={requestsPerSecond}
            />
          </div>
          <div className="chartDiv">
            <ColumnChart
              label={"Latency"}
              unit={"ms"}
              dataType1={"Avg Latency"}
              dataType2={"Slowest"}
              data={averageLatency}
              secondaryData={slowest}
            />
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            {MainFeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

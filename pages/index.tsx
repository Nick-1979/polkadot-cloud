import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { ButtonPrimary } from "../lib/buttons/ButtonPrimary";
import { ButtonSecondary } from "../lib/buttons/ButtonSecondary";
import { faUser } from "@fortawesome/free-solid-svg-icons";

/*
 * Sandbox page for component tests and class inclusion.
 */
const Home: NextPage = () => {
  return (
    <div>
      {/* dump all themes here as to not be purged at build */}
      <div className="theme-polkadot theme-kusama theme-westend theme-light theme-dark"></div>
      <Head>
        <title>Polkadot Dashboard UI</title>
        <meta name="description" content="Polkadot Dashboard UI" />
      </Head>
      <main className="p-4 flex flex-col gap-8">
        <h1 className="text-3xl">Components</h1>
        <h2 className="text-xl">Button Primary</h2>

        <div className="theme-polkadot theme-light">
          <ButtonPrimary text="Button" iconLeft={faUser} marginRight />
          <ButtonPrimary text="Button" iconLeft={faUser} marginRight />
          <ButtonPrimary
            text="Button"
            iconLeft={faUser}
            iconRight={faUser}
            lg
            marginRight
          />
          <ButtonPrimary text="Button" lg disabled />
        </div>

        <h2 className="text-xl">Button Secondary</h2>
        <div className="theme-polkadot theme-light">
          <ButtonSecondary text="Button" marginRight />
          <ButtonSecondary text="Button" iconLeft={faUser} marginRight />
          <ButtonSecondary text="Button" iconRight={faUser} marginX />
          <ButtonSecondary
            text="Button"
            iconLeft={faUser}
            iconRight={faUser}
            marginRight
          />
          <ButtonSecondary text="Button" disabled />
        </div>
      </main>
    </div>
  );
};

export default Home;

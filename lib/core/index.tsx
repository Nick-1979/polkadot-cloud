// Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { ComponentBase, Networks } from "../types";
import { RefObject, forwardRef } from "react";
import { valOr } from "../utils";
import { VariantLabels, motion } from "framer-motion";

export type EntryProps = ComponentBase & {
  // the theme mode
  mode: "light" | "dark";
  // the active network
  network: Networks;
};

export type SideProps = ComponentBase & {
  open: number;
  minimised: number;
};

/* Entry
 * The outer-most wrapper that hosts core tag styling.
 */
export const Entry = ({ children, style, mode, network }: EntryProps) => (
  <div className={`core-entry theme-${mode} theme-${network}`} style={style}>
    {children}
  </div>
);

/* Body
 * An element that houses Side and Main.
 */
export const Body = ({ children, style }: ComponentBase) => {
  return (
    <div className="body-interface" style={style}>
      {children}
    </div>
  );
};

/* Main
 * A column flex wrapper that hosts the main page content.
 */
export const Main = forwardRef(
  ({ children, style }: ComponentBase, ref?: RefObject<HTMLDivElement>) => (
    <div ref={ref} className="main-interface" style={style}>
      {children}
    </div>
  )
);
Main.displayName = "Main";

/* Side
 * A column flex wrapper that hosts the side menus content.
 */
export const Side = ({ children, style, open, minimised }: SideProps) => (
  <div
    className={`side-interface${valOr(open === 1, "zero", "minus")}${valOr(
      minimised === 1,
      "min",
      "max"
    )}`}
    style={style}
  >
    {children}
  </div>
);

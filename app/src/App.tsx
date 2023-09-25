/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { HashRouter } from "react-router-dom";
import { Providers } from "./Providers";

export const App = () => {
  const BaseUri = import.meta.env.VITE_BASE_URI || "/";
  return (
    <HashRouter basename={BaseUri}>
      <Providers />
    </HashRouter>
  );
};

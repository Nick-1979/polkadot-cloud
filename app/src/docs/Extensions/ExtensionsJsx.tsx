/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";
import { FearlessWallet } from "@packages/community/lib/extensions/jsx/FearlessWallet";
import { Enkrypt } from "@packages/community/lib/extensions/jsx/Enkrypt";
import { NovaWallet } from "@packages/community/lib/extensions/jsx/NovaWallet";
import { PolkadotJS } from "@packages/community/lib/extensions/jsx/PolkadotJS";
import { PolkaGate } from "@packages/community/lib/extensions/jsx/PolkaGate";
import { SubwalletJS } from "@packages/community/lib/extensions/jsx/SubwalletJS";
import { Talisman } from "@packages/community/lib/extensions/jsx/Talisman";
import { Demo } from "../lib/Demo";

export const ExtensionsJsx = () => {
  const code = `import { FearlessWallet } from "@polkadot-cloud/community/extensions/jsx/FearlessWallet";
import { NovaWallet } from "@packages/community/lib/extensions/jsx/NovaWallet";
import { PolkadotJS } from "@polkadot-cloud/community/extensions/jsx/PolkadotJS";
import { PolkaGate } from "@polkadot-cloud/community/extensions/jsx/PolkaGate";
import { SubwalletJS } from "@polkadot-cloud/community/extensions/jsx/SubwalletJS";
import { Talisman } from "@polkadot-cloud/community/extensions/jsx/Talisman";  

const App = () => (
  <>
    <Enkrypt />
    <FearlessWallet />
    <NovaWallet />
    <PolkadotJs />
    <PolkaGate />
    <SubwalletJs />
    <Talisman />
  </>
)`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box sm">
          <Enkrypt />
        </div>
        <div className="svg-box sm">
          <FearlessWallet />
        </div>
        <div className="svg-box sm">
          <NovaWallet />
        </div>
        <div className="svg-box sm">
          <PolkadotJS />
        </div>
        <div className="svg-box sm">
          <PolkaGate />
        </div>
        <div className="svg-box sm">
          <SubwalletJS />
        </div>
        <div className="svg-box sm">
          <Talisman />
        </div>
      </Demo>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};

/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { SimpleEditor } from "../lib/SimpleEditor";
import EnkryptSVG from "@packages/assets/lib/extensions/svg/enkrypt.svg?react";
import FearlessWalletSVG from "@packages/assets/lib/extensions/svg/fearlesswallet.svg?react";
import NovaWalletSVG from "@packages/assets/lib/extensions/svg/novawallet.svg?react";
import PolkadotJSSVG from "@packages/assets/lib/extensions/svg/polkadotjs.svg?react";
import PolkaGateSVG from "@packages/assets/lib/extensions/svg/polkagate.svg?react";
import SubwalletJSSVG from "@packages/assets/lib/extensions/svg/subwalletjs.svg?react";
import TalismanSVG from "@packages/assets/lib/extensions/svg/talisman.svg?react";
import { Demo } from "../lib/Demo";

export const ExtensionsSvg = () => {
  const code = `import { EnkryptSVG } from "@polkadot-cloud/assets/extensions/svg/enkrypt.svg";
import { FearlessWalletSVG } from "@polkadot-cloud/assets/extensions/svg/fearlesswallet.svg";
import { NovaWalletSVG } from "@polkadot-cloud/assets/extensions/svg/novawallet.svg";
import { PolkadotJSSVG } from "@polkadot-cloud/assets/extensions/svg/polkadotjs.svg";
import { PolkaGateSVG } from "@polkadot-cloud/assets/extensions/svg/polkagate.svg";
import { SubwalletJSSVG } from "@polkadot-cloud/assets/extensions/svg/subwalletjs.svg";
import { TalismanSVG } from "@polkadot-cloud/assets/extensions/svg/talisman.svg";

const App = () => (
  <>
    <EnkryptSVG />
    <FearlessWalletSVG />
    <NovaWalletSVG />
    <PolkadotJsSVG />
    <PolkaGateSVG />
    <SubwalletJsSVG />
    <TalismanSVG />
  </>
)`;

  return (
    <>
      <Demo showThemes={false}>
        <div className="svg-box sm">
          <EnkryptSVG />
        </div>
        <div className="svg-box sm">
          <FearlessWalletSVG />
        </div>
        <div className="svg-box sm">
          <NovaWalletSVG />
        </div>
        <div className="svg-box sm">
          <PolkadotJSSVG />
        </div>
        <div className="svg-box sm">
          <PolkaGateSVG />
        </div>
        <div className="svg-box sm">
          <SubwalletJSSVG />
        </div>
        <div className="svg-box sm">
          <TalismanSVG />
        </div>
      </Demo>
      <SimpleEditor code={code} language="javascript" />
    </>
  );
};

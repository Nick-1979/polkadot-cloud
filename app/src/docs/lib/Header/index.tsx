/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { Label } from "../Label";
import { NPM } from "../NPM";

export interface Props {
  title: string;
  subtitle: string;
  npm: string;
  status: "stable" | "experimental";
}
export const Header = ({ npm, status, subtitle, title }: Props) => {
  return (
    <>
      <h1 className="header">
        {title}{" "}
        <Label
          text={status}
          type={
            status === "experimental"
              ? "secondary"
              : status === "stable"
              ? "primary"
              : undefined
          }
          icon={status === "experimental" ? faCompassDrafting : undefined}
        />
      </h1>
      <h3 className="header">{subtitle}</h3>
      <NPM npm={npm} />
    </>
  );
};

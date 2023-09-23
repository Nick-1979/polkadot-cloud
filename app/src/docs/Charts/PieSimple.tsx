/* @license Copyright 2023 @paritytech/polkadot-cloud authors & contributors
SPDX-License-Identifier: GPL-3.0-only */

import { Chart } from "@packages/cloud-react/lib/base/structure/Chart";
import { SimpleEditor } from "../lib/SimpleEditor";
import { Demo } from "../lib/Demo";

export const PieSimple = () => {
  const code = `<Chart
  diameter={100}
  items={[
    { value: 60, color: "red" },
    { value: 200, color: "var(--background-default)" },
  ]}
/>
</div>`;

  return (
    <>
      <Demo>
        <div className="row">
          <Chart
            diameter={100}
            items={[
              { value: 60, color: "var(--accent-color-primary)" },
              { value: 200, color: "var(--background-default)" },
            ]}
          />
        </div>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};

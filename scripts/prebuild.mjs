// Copyright 2023 @paritytech/polkadot-cloud authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import fs from "fs";
import { dirFilesExist } from "./index.mjs";

const dirFoldersOnly = async (dir, files) => {
  for (let file of files) {
    fs.stat(`${dir}${file}`, (err, stat) => {
      if (err) {
        console.error(`❌ Folder in packages directory not found`);
        return;
      }
      if (!stat.isDirectory()) {
        console.error(`❌ Packages directory must only contain folders.`);
      }
    });
  }
};

const matchNameNScripts = (dir, files) => {
  for (let file of files) {
    fs.stat(`${dir}${file}/package.json`, (err) => {
      if (err) {
        console.error(`❌ package.json file not found in ${dir}${file}`);
        return;
      }
      const json = JSON.parse(
        fs.readFileSync(`${dir}${file}/package.json`).toString()
      );

      if (json?.name != `polkadotcloud-${file}`) {
        console.error(
          `❌ ${json?.name} package name doesn't meet the naming requirement`
        );
      }

      if (
        !Object.keys(json?.scripts).includes("build:mock" && "build" && "clear")
      ) {
        console.error(
          `❌ All of the scripts field in package.json are required to have build:mock, build and clear properties`
        );
      }
    });
  }
};

try {
  // Ensure that the package directory exists.
  fs.readdir("./packages", async (err, files) => {
    if (err) {
      console.error(`❌ Packages folder not found`);
      return;
    }

    // Ensure packages directory only contains folders.
    await dirFoldersOnly("./packages/", files);

    // Check `LICENSE`, `README.md`, `package.json`, `lib` exist in each package.
    await dirFilesExist("./packages/", files, [
      "README.md",
      "package.json",
      "lib",
    ]);
    matchNameNScripts("./packages/", files);

    console.log(`✅ Pre-build integrity checks complete.`);
  });
} catch (e) {
  console.error(`❌ Could not complete integrity checks.`);
}

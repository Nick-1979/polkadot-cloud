/* @license Copyright 2023 @paritytech/polkadot-dashboard-ui authors & contributors
SPDX-License-Identifier: Apache-2.0 */

import { ComponentBase } from "../types";
import { AnimationProps } from "framer-motion";

// eslint-disable-next-line
export type AnyObject = any;

export type ActionItemProps = ComponentBase & {
  // the title.
  text: string;
  // the state of the item.
  toggled?: boolean;
  // whether the item is disabled.
  disabled?: boolean;
  // the switch action.
  onToggle?: (val: boolean) => void;
  // whether the item should be inactive.
  inactive?: boolean;
};

export type ModalPaddingProps = ComponentBase & {
  // whether there is only vertical padding.
  verticalOnly?: boolean;
  // whether there is only horizontal padding.
  horizontalOnly?: boolean;
};

export type ModalNotesProps = ComponentBase & {
  // whether there is padding vertically.
  withPadding?: boolean;
};

export type ModalWarningsProps = ComponentBase & {
  // whether there is margin on top.
  withMargin?: boolean;
};

export type ModalFixedTitleProps = ComponentBase & {
  // whether there is customized css.
  withStyle?: boolean;
};

export type ModalSectionProps = ComponentBase & {
  // the type of window (tab | carousel).
  type: "tab" | "carousel";
};

export type ModalHeightProps = ComponentBase & {
  // the maximum width
  size: string;
};

export type ModalAnimationProps = ComponentBase & AnimationProps;

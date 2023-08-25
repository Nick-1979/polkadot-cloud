// Copyright 2023 @paritytech/polkadot-staking-dashboard authors & contributors
// SPDX-License-Identifier: GPL-3.0-only

import type { RefObject, FC } from "react";
import type { AnyJson } from "../../types";

export interface OverlayContextInterface {
  openOverlayInstances: number;
  setOpenOverlayInstances: (
    direction: OverlayInstanceDirection,
    instanceType: "modal" | "canvas"
  ) => void;
  activeOverlayInstance: ActiveOverlayInstance;
  setActiveOverlayInstance: (instance: ActiveOverlayInstance) => void;
  canvas: {
    status: CanvasStatus;
    config: CanvasConfig;
    openCanvas: (config: CanvasConfig) => void;
    closeCanvas: () => void;
    setCanvasStatus: (status: CanvasStatus) => void;
  };
  modal: {
    status: ModalStatus;
    config: AnyJson;
    modalHeight: number;
    modalResizeCounter: number;
    modalMaxHeight: number;
    setModalResize: () => void;
    setModalHeight: (v: number) => void;
    setModalRef: (v: RefObject<HTMLDivElement>) => void;
    setModalHeightRef: (v: RefObject<HTMLDivElement>) => void;
    setModalStatus: (status: ModalStatus) => void;
    replaceModal: (config: ModalConfig) => void;
    openModal: (config: ModalConfig) => void;
  };
}
export interface Fallback {
  fallback?: FC;
}

export type CanvasProps = Fallback & {
  canvas?: Record<string, FC>;
  externalOverlayStatus: CanvasStatus;
};

export type ModalProps = Fallback & {
  modals?: Record<string, FC>;
  externalOverlayStatus: CanvasStatus;
};
export type OverlayProps = ModalProps & CanvasProps;

export type OverlayInstanceDirection = "inc" | "dec";

export type ActiveOverlayInstance = "modal" | "canvas" | null;

export type OverlayType = "modal" | "canvas" | "prompt";

export type CanvasStatus = "open" | "closing" | "closed";

export type ModalStatus =
  | "closed"
  | "opening"
  | "open"
  | "closing"
  | "replacing";

export type ConfigOptions = Record<string, AnyJson>;

export type ModalSize = "small" | "large" | "xl";

export interface ModalConfig {
  key: string;
  options?: ConfigOptions;
  size?: ModalSize;
}

export interface CanvasConfig {
  key: string;
  options?: ConfigOptions;
}

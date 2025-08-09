import type { DeviceTypeOptions } from "./DeviceTypeOptions.enum";

export type DeviceType =
  (typeof DeviceTypeOptions)[keyof typeof DeviceTypeOptions];

import { useState, useEffect } from "react";
import { type DeviceType } from "../interfaces/DeviceType.type";
import { DeviceTypeOptions } from "../interfaces/DeviceTypeOptions.enum";

const checkCurrentDevice = () =>
  window.innerWidth >= 1000
    ? DeviceTypeOptions.DESKTOP
    : DeviceTypeOptions.MOBILE;

export function useDeviceType() {
  const [deviceType, setDeviceTypsetDeviceType] =
    useState<DeviceType>(checkCurrentDevice());

  useEffect(() => {
    const handleResize = () => setDeviceTypsetDeviceType(checkCurrentDevice());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return deviceType;
}

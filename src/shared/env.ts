import getConfig from "next/config";
import { isBrowser } from "./helpers/isBrowser";

const { publicRuntimeConfig } = getConfig();

export const getEnv = (): string => {
  return publicRuntimeConfig.NODE_ENV || "";
};

export const getHost = (): string => {
  return publicRuntimeConfig.NODE_ENV || "";
};

export const getApiUrl = (): string => {
  return publicRuntimeConfig.API_URL || "";
};

export const host: string = publicRuntimeConfig.REACT_APP_HOST || "";

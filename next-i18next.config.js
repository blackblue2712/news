/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prefer-node-protocol */
// const HttpBackend = require("i18next-http-backend/cjs");
// const ChainedBackend = require("i18next-chained-backend").default;
// // const LocalStorageBackend = require("i18next-localstorage-backend").default;

// const isBrowser = typeof window !== "undefined";

module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    defaultNS: "General",
  },
  localePath: "./public/locales",
  // interpolation: {
  //   prefix: "{{",
  //   suffix: "}}",

  //   format: (value, format, lng) => {
  //     // if (format === "number") return formatters[lng].format(value);

  //     // const isDate = value instanceof Date;
  //     // if (isDate) {
  //     //   const locale = localeMap[lng];
  //     //   switch (format) {
  //     //     case "en-date":
  //     //       return formatDate(value, "MMMM dd, yyyy", { locale });
  //     //     case "vi-date":
  //     //       return formatDate(value, "dd MMMM yyyy", { locale });
  //     //     default:
  //     //       return formatDate(value, format);
  //     //   }
  //     // }

  //     return value;
  //   },
  // },
  objectNotation: true,
  keySeparator: ".",
  nsSeparator: ":",

  // backend: {
  // backendOptions: [{ expirationTime: 60 * 60 * 1000 }, {}], // 1 hour
  // backends: isBrowser ? [LocalStorageBackend, HttpBackend]: [],
  // backends: [HttpBackend],
  // },
  // use: isBrowser ? [ChainedBackend] : [],

  resources: {
    en: {
      General: {
        "general": "Hello world"
      },
      Item: {
        "item": "sakalala"
      }
    }
  }

};

import "react-i18next";
import "i18next";
import * as en from "../locales/en";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      home: typeof en.home;
    };
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

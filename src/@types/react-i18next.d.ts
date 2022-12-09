import "react-i18next";
import * as en from "../locales/en";

declare module "react-i18next" {
  interface CustomTypeOptions {
    resources: {
      home: typeof en.home;
    };
  }
}

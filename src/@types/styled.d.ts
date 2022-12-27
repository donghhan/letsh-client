import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      prompt: string;
      ibmSans: string;
      charmonman: string;
      rubik: string;
    };
    colors: {
      orange300: string;
      orange400: string;
      orange500: string;
    };
  }
}

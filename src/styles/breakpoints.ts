interface ISize {
  mobileS: number;
  mobileM: number;
  mobileL: number;
  tablet: number;
  laptop: number;
  laptopL: number;
  desktop: number;
}

const size: ISize = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560,
};

export const device = {
  mobileS: `screen and (min-width: ${size.mobileS}px)`,
  mobileM: `screen and (min-width: ${size.mobileM}px)`,
  mobileL: `screen and (min-width: ${size.mobileL}px)`, // sm
  tablet: `screen and (min-width: ${size.tablet}px)`, // md
  laptop: `screen and (min-width: ${size.laptop}px)`, // lg
  laptopL: `screen and (min-width: ${size.laptopL}px)`, // xl
  desktop: `screen and (min-width: ${size.desktop}px)`, // 2xl
};

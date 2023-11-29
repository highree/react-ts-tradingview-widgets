import React, { memo } from "react";
import { ColorTheme, CopyrightStyles, Locales } from "../index";
import Widget from "./Widget";

export type EconomicCalendarProps = {
  colorTheme?: ColorTheme;
  isTransparent?: boolean;
  width?: string | number;
  height?: string | number;
  autosize?: boolean;
  locale?: Locales;
  importanceFilter?: "-1,0,1" | "0,1";
  currencyFilter?: string;
  countryFilter?: string;
  children?: never;

  copyrightStyles?: CopyrightStyles;
};

const EconomicCalendar: React.FC<EconomicCalendarProps> = ({
  colorTheme = "light",
  isTransparent = false,
  width = 510,
  height = 600,
  autosize = false,
  locale = "en",
  importanceFilter = "-1,0,1",
  currencyFilter = undefined,
  copyrightStyles,
  countryFilter,
  ...props
}) => {
  return (
    <Widget
      scriptHTML={{
        colorTheme,
        isTransparent,
        ...(!autosize ? { width } : { width: "100%" }),
        ...(!autosize ? { height } : { height: "100%" }),
        locale,
        importanceFilter,
        currencyFilter,
        countryFilter,
        ...props,
      }}
      scriptSRC="https://s3.tradingview.com/external-embedding/embed-widget-events.js"
      copyrightProps={{
        copyrightStyles,
        href: `https://www.tradingview.com/markets/currencies/economic-calendar/`,
        spanText: `Economic Calendar`,
      }}
    />
  );
};

export default memo(EconomicCalendar);

/* eslint-disable */
// @ts-ignore
import {
  FunctionComponent,
  useMemo,
  type CSSProperties
} from "react";
import React from "react";

type BtnIconsType = {
  btnIcon?: string;

  /** Style props */
  btnAni?: CSSProperties["animation"];
  btnAccentColor?: CSSProperties["accentColor"];
};

const BtnIcons: FunctionComponent<BtnIconsType> = ({
  btnAni,
  btnIcon,
  btnAccentColor,
}) => {
  const btnMicStyle: CSSProperties = useMemo(() => {
    return {
      animation: btnAni,
      accentColor: btnAccentColor,
    };
  }, [btnAni, btnAccentColor]);

  return (
    <button
      className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-6 h-6"
      autoFocus
      style={btnMicStyle}
      // src={btnIcon}
    >
      <div className="absolute top-[-5px] left-[-8px] rounded-[50%] bg-black box-border w-[38px] h-[38px] border-[2px] border-solid border-darkcyan" />
      <img
        className="absolute top-[2px] left-[-1px] w-6 h-6 overflow-hidden"
        alt=""
        src="/mic.svg"
      />
    </button>
  );
};

export default BtnIcons;

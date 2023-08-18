/* eslint-disable */
import { FunctionComponent } from "react";
import React from "react";

type CharaPanelType = {
  charaIcon?: string;
};

const CharaPanel: FunctionComponent<CharaPanelType> = ({ charaIcon }) => {
  return (
    <div className="flex-1 rounded-xl bg-whitesmoke flex flex-col p-4 items-center justify-start gap-[45px] text-left text-5xl text-black font-roboto">
      <div className="self-stretch flex flex-row py-0 px-px items-center justify-center relative gap-[10px]">
        <div className="relative rounded-[50%] bg-gainsboro w-[155px] h-[155px] z-[0]" />
        <img
          className="absolute my-0 mx-[!important] top-[calc(50%_-_12.5px)] left-[calc(50%_-_12.33px)] w-6 h-6 overflow-hidden shrink-0 z-[1]"
          alt=""
          src={charaIcon}
        />
      </div>
      <b className="relative leading-[24px]">达芬奇</b>
      <div className="self-stretch relative text-base leading-[24px] text-center">
        主讲课程：《文艺复兴时期的艺术》《艺术史》《达芬奇的艺术》
      </div>
    </div>
  );
};

export default CharaPanel;

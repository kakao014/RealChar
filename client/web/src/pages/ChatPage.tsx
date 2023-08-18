import { FunctionComponent } from "react";
import { Input } from "@chakra-ui/react";
import Header from "../components/Header0";
import BtnIcons from "../components/BtnIcons";

const ChatPage: FunctionComponent = () => {
  return (
    <div className="relative bg-black w-full h-[1024px] overflow-hidden flex flex-col py-[34px] px-[100px] box-border items-center justify-start gap-[13px] text-left text-base text-white font-roboto">
      <Header />
      <div className="relative bg-gainsboro w-[480px] h-[595px]" />
      <div className="w-[469px] h-[145px] flex flex-row items-start justify-start">
        <div className="relative leading-[24px]">afdsfasdfdafdsafasdfsd</div>
      </div>
      <div className="self-stretch flex-1 flex flex-col py-10 px-0 items-center justify-end gap-[15px]">
        <div className="self-stretch flex flex-row items-start justify-center gap-[226px]">
          <img
            className="relative w-[116px] h-[27px]"
            alt=""
            src="/frame-1.svg"
          />
          <img
            className="relative w-[105px] h-[27px]"
            alt=""
            src="/frame-3.svg"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-[21px]">
          <BtnIcons btnIcon="24x24x3066875005" btnAccentColor="#FFF" />
          <Input
            className="bg-[transparent]"
            variant="outline"
            width="333px"
            borderColor="#3cbcad"
            focusBorderColor="#fa761d"
            placeholder="Input"
            w="333px"
          />
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0"
            alt=""
            src="/send.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

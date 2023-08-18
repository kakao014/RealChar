import { FunctionComponent, useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import CharaPanel from "../components/CharaPanel";

const CharaPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onCharaPanelContainerClick = useCallback(() => {
    navigate("/chatpage");
  }, [navigate]);

  return (
    <div className="relative bg-black w-full h-[1024px] overflow-hidden flex flex-col py-[34px] px-[100px] box-border items-center justify-start gap-[253px] text-center text-base text-darkcyan font-roboto">
      <div className="self-stretch flex flex-row items-start justify-between">
        <div className="flex flex-col items-center justify-center">
          <div className="relative rounded-[50%] bg-gainsboro w-[41px] h-[41px]" />
        </div>
        <div className="flex flex-row items-center justify-start gap-[52px] mq768:flex mq768:[&_.pcmenu]:hover:hidden mq768:[&_.union-icon]:hover:flex">
          <nav
            className="pcmenu m-0 flex flex-row items-center justify-end gap-[52px] text-left text-base text-darkcyan font-roboto mq768:hidden"
            id="nav"
          >
            <div className="relative leading-[24px]">关于</div>
            <div className="relative leading-[24px]">联系</div>
            <Button
              variant="outline"
              w="87px"
              colorScheme="teal"
              rightIcon={<ArrowForwardIcon />}
            >
              Button
            </Button>
          </nav>
          <img
            className="union-icon relative w-5 h-3.5 hidden mq768:flex"
            alt=""
            src="/union.svg"
          />
        </div>
      </div>
      <section
        className="self-stretch grid flex-row py-0 px-px items-start justify-start gap-[50px] grid-cols-[repeat(3,1fr)] text-left text-5xl text-black font-roboto mq768:grid mq768:grid-cols-[1fr] mq768:gap-[50px]"
        id="Charas"
      >
        <div
          className="flex-1 rounded-xl bg-whitesmoke flex flex-col p-4 items-center justify-start gap-[45px] cursor-pointer"
          onClick={onCharaPanelContainerClick}
        >
          <div className="self-stretch flex flex-row py-0 px-px items-center justify-center relative gap-[10px]">
            <div className="relative rounded-[50%] bg-gainsboro w-[155px] h-[155px] z-[0]" />
            <img
              className="absolute my-0 mx-[!important] top-[calc(50%_-_12.5px)] left-[calc(50%_-_12.33px)] w-6 h-6 overflow-hidden shrink-0 z-[1]"
              alt=""
              src="/lock.svg"
            />
          </div>
          <h3
            className="m-0 relative text-[inherit] leading-[24px] font-bold font-inherit"
            id="CharaName"
          >
            达芬奇
          </h3>
          <div className="self-stretch relative text-base leading-[24px] text-center">
            主讲课程：《文艺复兴时期的艺术》《艺术史》《达芬奇的艺术》
          </div>
        </div>
        <CharaPanel />
        <CharaPanel charaIcon="/lock2.svg" />
        <CharaPanel charaIcon="/lock.svg" />
        <CharaPanel charaIcon="/lock3.svg" />
        <CharaPanel charaIcon="/lock4.svg" />
      </section>
      <div className="w-[301px] flex flex-row items-center justify-center">
        <div className="flex-1 relative leading-[24px]">
          Copyright © 2023 CAA. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default CharaPage;

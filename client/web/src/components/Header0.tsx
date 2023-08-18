import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Header0: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-between">
      <div className="flex flex-col items-center justify-center">
        <div className="relative rounded-[50%] bg-gainsboro w-[41px] h-[41px]" />
      </div>
      <div className="flex flex-row items-center justify-start gap-[52px] mq768:[&_.pcmenu1]:hover:hidden mq768:[&_.union-icon1]:hover:flex">
        <nav
          className="pcmenu1 m-0 flex flex-row items-center justify-end gap-[52px] text-left text-base text-darkcyan font-roboto"
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
          className="union-icon1 relative w-5 h-3.5 hidden"
          alt=""
          src="/union.svg"
        />
      </div>
    </div>
  );
};

export default Header0;

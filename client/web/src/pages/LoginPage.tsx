import { FunctionComponent, useCallback } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import React from "react";

const LoginPage: FunctionComponent = () => {
  const onBtnBottomContainerClick = useCallback(() => {
    window.location.href = "charaPage";
  }, []);

  return (
    <div className="relative bg-black w-full h-[1024px] overflow-hidden flex flex-col py-[180px] px-0 box-border items-center justify-start gap-[258px]">
      <div className="w-[268px] h-[268px] flex flex-col items-center justify-start">
        <div className="relative rounded-[50%] bg-gainsboro w-[268px] h-[268px]" />
      </div>
      <div
        className="rounded-[10px] w-[450px] h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center cursor-pointer"
        onClick={onBtnBottomContainerClick}
      >
        <Button
          variant="solid"
          w="1440px"
          colorScheme="teal"
          size="lg"
          rightIcon={<ArrowForwardIcon />}
        >
          Button
        </Button>
      </div>
    </div>
  );
};

export default LoginPage;

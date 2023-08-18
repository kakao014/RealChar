
// import React from 'react';
// import logo from '../../assets/svgs/logo.svg';
// import './style.css';
import SignIn from '../Auth/SignIn';
import SignOut from '../Auth/SignOut';
import { Navbar } from '@nextui-org/react';
import { FunctionComponent } from "react";
import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const Header: FunctionComponent = () => {
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
//
// const Header = ({ user, isLoggedIn, setToken, handleDisconnect }) => (
//   <Navbar id='navbar' variant='floating'>
//     <a href='/'>
//       <Navbar.Brand
//         css={{
//           '@xs': {
//             w: '12%',
//           },
//         }}
//       >
//         <img src={logo} alt='Logo' />
//       </Navbar.Brand>
//     </a>
//
//     <Navbar.Content
//       id='navbar'
//       css={{
//         '@xs': {
//           w: '19%',
//           jc: 'flex-end',
//         },
//       }}
//     >
//       {user ? (
//         <SignOut
//           isLoggedIn={isLoggedIn}
//           user={user}
//           handleDisconnect={handleDisconnect}
//         />
//       ) : (
//         <SignIn isLoggedIn={isLoggedIn} setToken={setToken} />
//       )}
//     </Navbar.Content>
//   </Navbar>
// );

export default Header;

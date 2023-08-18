
import React from 'react';
import logo from  '../../assets/svgs/logo.svg';
// import './style.css';
import SignIn from '../Auth/SignIn';
import SignOut from '../Auth/SignOut';
import { Navbar } from '@nextui-org/react';
// import Button from '@mui/material/Button';
import Avatar from "@mui/material/Avatar";
import GroupsIcon from "@mui/icons-material/Groups";
import Typography from "@mui/material/Typography";



import { Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import "./Header.css";

const Header =  ({ user, isLoggedIn, setToken, handleDisconnect }) => {
  return (

    <div className="header1">
    <div className="logo2">
      <div className="logoimg2" />
    </div>
    <div className="nav1">
      <nav className="pcmenu1" id="nav">
        <div className="div4">关于</div>
        <div className="div4">联系</div>
        {/*<Button*/}
        {/*  variant="outline"*/}
        {/*  w="87px"*/}
        {/*  colorScheme="teal"*/}
        {/*  rightIcon={<ArrowForwardIcon />}*/}
        {/*>*/}
        {/*  Button*/}
        {/*</Button>*/}

          <Navbar.Content
      id='navbar'
      css={{
        '@xs': {
          w: '19%',
          jc: 'flex-end',
        },
      }}
    >
      {user ? (
        <SignOut
          isLoggedIn={isLoggedIn}
          user={user}
          handleDisconnect={handleDisconnect}
        />
      ) : (
        <SignIn isLoggedIn={isLoggedIn} setToken={setToken} />
      )}
    </Navbar.Content>



      </nav>
      <img className="union-icon1" alt="" src="/union.svg" />
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

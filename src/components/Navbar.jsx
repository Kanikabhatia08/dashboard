import React, { useEffect, useRef } from 'react';
import logo from '../data/logo.png'
import user from '../data/user.jpeg'
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { useAuth } from '../contexts/AuthContext';

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={() => customFunc()}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full size-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const { currentColor, activeMenu, setActiveMenu, handleClick, setIsClicked, isClicked, setScreenSize, screenSize } = useStateContext();
  const {userLoggedIn, currentUser} = useAuth();
  
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [screenSize]);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      if(userLoggedIn === true){
        setActiveMenu(true)
      }
      else{
        setActiveMenu(false);
      };
    }
  }, [screenSize]);

  const handleActiveMenu = () => setActiveMenu(!activeMenu);
  const ProfileRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ProfileRef.current && !ProfileRef.current.contains(event.target) ) {
        // console.log(ProfileRef.current)
        setIsClicked({
          cart: false,
          chat: false,
          notification: false,
          userProfile: false,
        });
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  });

  return (
    <div ref={ProfileRef}>
      {
        userLoggedIn ?
        <>
          <div className="flex justify-between p-2 md:ml-6 md:mr-6 relative" >
            <NavButton title="Menu"  customFunc={handleActiveMenu}  color={currentColor} icon={<AiOutlineMenu />} />
            <div className="flex">
              <NavButton 
                title="Cart" 
                customFunc={() => handleClick('cart')} 
                color={currentColor} icon={<FiShoppingCart />} 
              />
              <NavButton 
                title="Chat" 
                dotColor="#03C9D7" 
                customFunc={() => handleClick('chat')} 
                color={currentColor} icon={<BsChatLeft />} 
              />
                <NavButton 
                  title="Notification" 
                  dotColor="rgb(254, 201, 15)" 
                  customFunc={() => handleClick('notification')} 
                  color={currentColor} icon={<RiNotification3Line />} 
                />
              
              <TooltipComponent content="Profile" position="BottomCenter">
                <div
                  className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
                  onClick={() => handleClick('userProfile')}
                >
                  <img
                    className="rounded-full size-8"
                    src={ currentUser.photoURL ?? user}
                    alt="user-profile"
                  />
                  <p>
                    <span className="text-gray-400 text-14">Hi,</span>{' '}
                    <span className="text-gray-400 font-bold ml-1 text-14">
                      {currentUser.displayName ?? currentUser.email}
                    </span>
                  </p>
                  <MdKeyboardArrowDown className="text-gray-400 text-14" />
                </div>
              </TooltipComponent>

              {/* {isClicked.cart && (<Cart />)}
              {isClicked.chat && (<Chat />)} */}
              {isClicked.notification && (<Notification />)} 
              {isClicked.userProfile && (<UserProfile />)}
            </div>
          </div>
        </> 
        :
        <>
        <div className='m-10 flex gap-1'>
          <img src={logo} alt='logo' className='size-10'/>
          <p className='text-4xl font-extrabold dark:text-white'>Shoppy</p>
        </div>
        </>
      }
    
    </div>

  );
};

export default Navbar;
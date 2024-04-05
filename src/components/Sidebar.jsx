import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const {activeMenu, setActiveMenu} = useStateContext();

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-white  text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-3 pb-10 h-screen overflow-auto md:overflow-hidden md:hover:overflow-auto'>
      { activeMenu && 
        (<>
          <div className='flex justify-between items-center'>
            <Link to='/' onClick={() => setActiveMenu(false)} 
              className='items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900'>
              <SiShopware /><span>Shoppy</span>
            </Link>

            <TooltipComponent content="Menu" position='ButtonCenter'>
              <button type='button' onClick={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
                className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md-hidden'>
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          <div>
            {links.map((item) => (
              <div key={item.title}>
                <p className='text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase'>
                  {item.title}
                </p>

                {item.links.map((link) => (
                  <NavLink to={`${link.name}`}
                    key={link.name}
                    onClick={() => {}}
                    className={({isActive}) => isActive ? activeLink : normalLink}
                  >
                    {link.icon}
                    <span className='capitalize'>{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>)}
    </div>
  )
}

export default Sidebar
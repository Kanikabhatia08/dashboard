import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,

}

export const ContextProvider = ({children}) =>{
    const getTheme = () =>{
        const theme = localStorage.getItem('themeMode')
        return theme;
    }
    const getColor = () =>{
        const color = localStorage.getItem('colorMode')
        return color;
    }

    const [activeMenu, setActiveMenu] = useState(false);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(initialState);
    const [currentColor, setCurrentColor] = useState(getColor());
    const [currentMode, setCurrentMode] = useState(getTheme());
    const [themeSettings, setThemeSettings] = useState(false);
    const [userObject, setUserObject] = useState('')
    console.log(activeMenu)

    const handleClick = (clicked) =>{
        setIsClicked({...initialState, [clicked] : true })
    }

    const setMode = (e) =>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
        setThemeSettings(false);
    }

    const setColor = (color) =>{
        console.log(color)
        setCurrentColor(color);
        localStorage.setItem('colorMode', color)
        setThemeSettings(false);
    }

    return (
        <StateContext.Provider 
            value = {
                {
                    activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,
                    currentColor, setCurrentColor, currentMode, setCurrentMode, userObject, setUserObject,
                    themeSettings, setThemeSettings, setMode, setColor,setScreenSize, screenSize
                }
            }>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)
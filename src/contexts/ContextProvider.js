import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,

}

export const ContextProvider = ({children}) =>{

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState);
    const [screenSize, setScreenSize] = useState(initialState);
    const [currentColor, setCurrentColor] = useState("#03C9D7");
    const [currentMode, setCurrentMode] = useState("light");
    const [themeSettings, setThemeSettings] = useState("light");


    const handleClick = (clicked) =>{
        setIsClicked({...initialState, [clicked] : true })
    }

    const setMode = (e) =>{
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value)
    }

    const setColor = (e) =>{
        setCurrentColor(e.target.value);
        localStorage.setItem('colorMode', e.target.value)
    }

    return (
        <StateContext.Provider 
            value = {
                {
                    activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick,
                    currentColor, setCurrentColor, currentMode, setCurrentMode,
                    themeSettings, setThemeSettings
                }
            }>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext)
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSettings } from './components';
import { useStateContext } from "./contexts/ContextProvider";
import { AuthProvider } from "./contexts/AuthContext";
import Routing from './components/Routing'

function App() {

  const {activeMenu,currentMode, themeSettings, setThemeSettings, currentColor} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <AuthProvider>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-10">
            <TooltipComponent content="Settings">
              <button type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" 
                onClick={() => setThemeSettings(true)}
                style={{background : currentColor, borderRadius: '50%'}}  
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? 
            (<div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar/>
            </div>) :
            (<div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar/>
            </div>)
          }
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full
              ${activeMenu ? ' md:ml-64 w-full' : 'ml-0 w-0'}`
          }>
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar/>
            </div>

          <div>
            {themeSettings && <ThemeSettings /> }
            <Routing />
          </div>
        </div>
        </div>
        </AuthProvider>
    </div>
  );
}

export default App;

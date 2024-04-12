import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";
import { Navbar, Sidebar, ThemeSettings } from './components';
import { useStateContext } from "./contexts/ContextProvider";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoutes from "./components/PrivateRoutes";

function App() {

  const {activeMenu,currentMode, themeSettings, setThemeSettings, currentColor} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>

      <AuthProvider>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-10">
            <TooltipComponent content="Settings" position="Top">
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
            
            <Routes>
              {/* Auth */}
                <Route path='/login' element={<Login />} />
                <Route path="/register" element={(<Register />)} />

            <Route element={<PrivateRoutes/>}>
    
              {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path="/ecommerce" element={(<Ecommerce />)} />

                {/* pages  */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* apps  */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* charts  */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
            </Route>

            </Routes>
          </div>
        </div>
        </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

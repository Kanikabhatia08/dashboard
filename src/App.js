import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { FiSettings } from "react-icons/fi";

function App() {

  const activeMenu = 'true';

  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-1000">
            <TooltipComponent content="Settings" position="Top">
              <button type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white" 
                style={{background : 'blue', borderRadius: '50%'}}  
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? 
            (<div>
              Sidebar
            </div>) :
            (<div>
                Sidebar w-0
            </div>)
          }
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

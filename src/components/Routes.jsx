import React from 'react'
import { Route } from "react-router-dom";
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from '../pages';
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import PrivateRoutes from './PrivateRoutes';


const Routes = () => {
  return (
    <div>
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
  )
}

export default Routes
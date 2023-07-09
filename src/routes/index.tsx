import { Route, Routes } from "react-router-dom";
import { Home } from "../pages";

export const AppRoutes = () => {
    return(
        <Routes>
            <Route path='/pokedex' element={<Home/>}/>
        </Routes>
    );
}
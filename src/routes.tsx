import { BrowserRouter, Routes, Route } from "react-router-dom";
import {RoutesProvider} from "./store/GlobalState";
import Home from "./pages/Home/Home";

export default function AppRouter() {
    return(
        <BrowserRouter>
            <RoutesProvider>
                <Routes>
                    <Route element={<Home/>} path='/'/>
                </Routes>
            </RoutesProvider>
        </BrowserRouter>
    )
}
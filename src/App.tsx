import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ChooseGoods from "./Pages/ChooseGoods/ChooseGoods.tsx";
import Auth from "./Pages/Auth/Auth.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="auth" element={<Auth/>} />
                <Route path="goods" element={<ChooseGoods/>}/>
            </Routes>
        </BrowserRouter>
    )
}

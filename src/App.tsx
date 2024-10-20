import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import ChooseGoods from "./Pages/ChooseGoods/ChooseGoods.tsx";
import Auth from "./Pages/Auth/Auth.tsx";
import Header from "./Widgets/Header/Header.tsx";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <div className="app__body">
                <Routes>
                    <Route path="auth" element={<Auth/>}/>
                    <Route path="goods" element={<ChooseGoods/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

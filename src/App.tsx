import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import GamePage from "./pages/GamePage/GamePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./styles.scss";
import {AppStyled} from "./App.styled";

function App() {
    return (
        <AppStyled>
            <Header/>
            <main>
                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/game/:game_id"} element={<GamePage/>}/>
                </Routes>
            </main>
            <Footer/>
        </AppStyled>
    );
}

export default App;

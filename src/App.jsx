import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import User from "./components/User/User";
import { UserStorage } from "./UserContext";

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRouter from "./components/ErrorComponent/ProtectedRouter";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <UserStorage>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="login/*" element={<Login />} />
                        <Route
                            path="conta/*"
                            element={
                                <ProtectedRouter>
                                    <User />
                                </ProtectedRouter>
                            }
                        />
                    </Routes>
                    <Footer />
                </UserStorage>
            </BrowserRouter>
        </div>
    );
};

export default App;

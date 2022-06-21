import React from "react";
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router, Routes, Route,Navigate, } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { GlobalStyle } from "./styles/globalStyles";
import { lightTheme } from "./styles/theme";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

const App = () => {
    const themeStyle = lightTheme;
    const user = true;
    return (
        // <Product />
        // <Payment/>

        <ThemeProvider theme={themeStyle}>
        <Router>
                <Routes>
                <Route/>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/product/:productId" element={<Product />} />
                <Route exact path="/cart" element={<Cart />} />
                <Route
                path="/signin"
                element={user ? <Navigate to="/" replace /> : <SignIn/>}
                />
                <Route
                path="/register"
                element={user ? <Navigate to="/" replace /> : <Register/>}
                />
                </Routes>
        </Router>
        </ThemeProvider>
    );
};

export default App;

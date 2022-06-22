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
import Upload from "./pages/Upload";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { useSelector } from "react-redux";

const App = () => {
    const themeStyle = lightTheme;
    const user = useSelector(state=>state.user.currentUser);
    return (
<<<<<<< HEAD
        //<Home />
        <Payment />
        // <ThemeProvider theme={themeStyle}>
        //     <Helmet>
        //         <title>Form Component</title>
        //         <link rel="preconnect" href="https://fonts.googleapis.com" />
        //         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        //         <link
        //             href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&family=Source+Sans+Pro:wght@300;400;600;700;900&family=Ubuntu:wght@400;500;700&display=swap"
        //             rel="stylesheet"
        //         />
        //     </Helmet>
        //     <GlobalStyle />
        //     <Layout>
        //       <Router>
        //         <Routes>
        //         <Route path="/" element={<Navigate to="/signin" replace />}/>
        //             <Route exact path="/signin" element={<SignIn />} />
        //             <Route exact path="/register" element={<Register />} />
        //         </Routes>
        //         </Router>
        //     </Layout>
        // </ThemeProvider>
=======
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
>>>>>>> c613c785b487134f597179cee42bb6d507f66a35
    );
};

export default App;

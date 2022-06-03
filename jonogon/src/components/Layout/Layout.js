import React from "react";

import { SMain } from "./styles";

const Layout = ({ children }) => {
    return (
        <>
            <SMain>{children}</SMain>
        </>
    );
};

export default Layout;

import axios from "axios";
import React from "react";
import { useState } from "react";
import { SFixedContainer } from "../components/Containers/styles";
import Form from "../components/Form/Form";
import { useSelector,useDispatch } from "react-redux";
import { login } from "../redux/apiCall";

const SignIn = () => {
    const dispatch = useDispatch();
    const { isFetching, error } = useSelector(state => state.user);
    const onSubmitHandler = async (form, callback) => {
        // console.log("Sign In submitted: ", form);

        login(dispatch,form);
       
        //localStorage.setItem("user",response);
        callback();
    };

    return (
        <SFixedContainer size={275}>
            <Form
                title={"Sign In"}
                formArr={formArr}
                submitBtn={"Sign In"}
                onSubmit={onSubmitHandler}
                redirect={{
                    label: "Don't have an account?",
                    link: {
                        label: "Register",
                        to: "/register",
                    },
                }}
            />
        </SFixedContainer>
    );
};

const formArr = [
    {
        label: "Email",
        name: "email",
        type: "text",
    },
    {
        label: "Password",
        name: "password",
        type: "password",
    },
];

export default SignIn;

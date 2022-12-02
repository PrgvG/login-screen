import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";
import { ButtonType } from "../Login/utils";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";
import s from "./Home.module.css";
import { getTitle, LOREM_TEXT, LOGOUT_TEXT } from "./utils";

const Home = () => {
    const navigate = useNavigate();
    const auth = useAuth();

    const handleLogout = () => {
        localStorage.clear();
        auth.signout(() => navigate("/"));
    };

    console.log("test");

    const title = getTitle(auth.user);
    return (
        <section className={s.wrapper}>
            <header className={s.header}>
                <h1>{title}</h1>
                <CustomButton label={LOGOUT_TEXT} type={ButtonType.BUTTON} onClick={handleLogout} />
            </header>
            <section className={s.container}>{LOREM_TEXT}</section>
        </section>
    );
};

export default Home;

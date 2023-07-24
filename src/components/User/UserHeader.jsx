import React from "react";
import styles from "./UserHeader.module.css";
import UserHeaderNav from "./UserHeaderNav";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
    const [title, setTitle] = React.useState("");

    const location = useLocation();

    React.useEffect(() => {
        const { pathname } = location;
        switch (location.pathname) {
            case "/conta/postar":
                setTitle("Poste sua Foto");
                break;
            case "/conta/estatisticas":
                setTitle("Estatísticas");
                break;
            default:
                setTitle("Minhas Fotos");
                break;
        }
        if ("/conta/estatisticas" === location.pathname)
            setTitle("Estatísticas");
    }, [location]);

    return (
        <header className={styles.header}>
            <h1 className="title">{title}</h1>
            <UserHeaderNav />
        </header>
    );
};
export default UserHeader;

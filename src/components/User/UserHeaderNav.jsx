import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import iconFeed from "../../Assets/feed.svg";
import iconStats from "../../Assets/estatisticas.svg";
import iconAdd from "../../Assets/adicionar.svg";
import iconSair from "../../Assets/sair.svg";
import styles from "./UserHeaderNav.module.css";
import useMedia from "../../Hooks/useMedia";

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const mobile = useMedia("(max-width: 40rem)");
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const navigate = useNavigate();

    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    function handleLogout() {
        userLogout();
        navigate("/login");
    }

    return (
        <>
            {mobile && (
                <button
                    aria-label="Menu"
                    className={`${styles.mobileButton} ${
                        mobileMenu && styles.mobileButtonActive
                    }`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}

            <nav
                className={`${mobile ? styles.navMobile : styles.nav} ${
                    mobileMenu && styles.navMobileActive
                }`}
            >
                <NavLink to="/conta" end>
                    <img src={iconFeed} alt="feed" />
                    {mobile && "Minhas Fotos"}
                </NavLink>
                <NavLink to="/conta/estatisticas">
                    <img src={iconStats} alt="stats" />
                    {mobile && "Estatísticas"}
                </NavLink>
                <NavLink to="/conta/postar">
                    <img src={iconAdd} alt="add" />
                    {mobile && "Adicionar Foto"}
                </NavLink>
                <button onClick={handleLogout}>
                    <img src={iconSair} alt="sair" />
                    {mobile && "Sair"}
                </button>
            </nav>
        </>
    );
};

export default UserHeaderNav;

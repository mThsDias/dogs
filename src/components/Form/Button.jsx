import React from "react";
import styles from "./Button.module.css";

const Buttton = ({ children, ...props }) => {
    return (
        <button {...props} className={styles.button}>
            {children}
        </button>
    );
};

export default Buttton;

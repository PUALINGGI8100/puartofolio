
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

interface Props {
    header: string
};

const Custom_TopBar : React.FC<Props> = ({header}) => {
    const navigate = useNavigate();
    const backHandler = () => navigate(-1);
    return (
        <nav className="nav-container">
            <a role="button" onClick={backHandler}>
                <FaArrowLeft className="nav-icon" />
            </a>
            <header className="nav-title">
                <h2>{header}</h2>
            </header>
        </nav>
    )
}

export default Custom_TopBar;
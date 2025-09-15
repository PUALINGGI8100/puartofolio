
import React from "react";

interface Props {};

const Card_Certificates : React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
    return (
        <section className="card-certificates card-container">
            {children}           
        </section>
    )
}

export default Card_Certificates;
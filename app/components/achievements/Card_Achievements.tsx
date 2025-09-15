import React from "react"

interface Props {}

const Card_Achievements : React.FC<React.PropsWithChildren<Props>> = ({children}) => {
    return (
        <section className="card-achievements card-container">
            {children}           
        </section>
    )
}

export default Card_Achievements;
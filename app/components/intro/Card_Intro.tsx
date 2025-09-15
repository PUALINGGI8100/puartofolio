
import React from "react"

interface Props {}

const Card_Intro : React.FC<React.PropsWithChildren<Props>> = ({children}) => {
    return (
        <section className="card-intro card-container">
            {children}           
        </section>
    )
}

export default Card_Intro;
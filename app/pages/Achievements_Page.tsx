
import React from "react";
import Card_Achievements from "~/components/achievements/Card_Achievements";
import Content_Achievemnts from "~/components/achievements/Content_Achievements";
import Custom_TopBar from "~/components/ui/Custom_TopBar";

import "~/styles/achievements.css";

const Achievements_Page : React.FC = () => {
    return (
        <Card_Achievements>
            <Custom_TopBar header="Achievements" />
            <Content_Achievemnts />
        </Card_Achievements>
    )
}

export default Achievements_Page;
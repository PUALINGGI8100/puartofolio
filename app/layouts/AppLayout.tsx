import { Outlet } from "react-router";
import "~/styles/root.css";

const AppLayout = ()=> {
    return (
        <main className="app-main">
            <Outlet />
        </main>
    )
}

export default AppLayout;
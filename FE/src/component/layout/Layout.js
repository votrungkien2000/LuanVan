import { Outlet } from "react-router-dom"
import Header from "./header/Header"
function LayoutDefault() {
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}
export default LayoutDefault
import { Nav, Footer } from "./components"
import { Outlet } from "react-router-dom"

export default function App() {
    return (
        <div className="h-screen">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    )
}
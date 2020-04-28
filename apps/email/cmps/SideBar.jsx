import NavBar from './NavBar.jsx';
const { NavLink } = ReactRouterDOM;


export default function SideBar() {

    return (
        <section className="side-bar">

            <NavLink exact to='/compose'><button className="compose-btn">+ Compose</button></NavLink>
            <NavBar />
        </section>
    )
}
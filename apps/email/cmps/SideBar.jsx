import NavBar from './NavBar.jsx';
const { NavLink } = ReactRouterDOM;


export default function SideBar() {

    return (
        <section className="side-bar">

            <NavLink exact to='/compose'>
                <button className="compose-btn flex align-center">
                    <img height="25" src="./apps/email/assets/imgs/plus-sign.png" /> Compose</button>
            </NavLink>
            <NavBar />
        </section>
    )
}
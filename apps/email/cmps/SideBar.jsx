import NavBar from './NavBar.jsx';
import EmailStatus from './EmailStatus.jsx';

const { NavLink } = ReactRouterDOM;


export default function SideBar() {

    return (
        <section className="side-bar">

            <NavLink exact to='/compose'><button className="compose-btn">+ Compose</button></NavLink>
            <NavBar></NavBar>
            <EmailStatus></EmailStatus>
        </section>
    )
}
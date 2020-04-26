import NavBar from './NavBar.jsx';
import EmailStatus from './EmailStatus.jsx';

const { NavLink } = ReactRouterDOM;


export default function SideBar() {

    return (
        <section>

            <NavLink exact to='/compose'><button>Compose</button></NavLink>
            <NavBar></NavBar>
            <EmailStatus></EmailStatus>
        </section>
    )
}
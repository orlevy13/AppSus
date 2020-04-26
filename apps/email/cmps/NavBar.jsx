const { NavLink } = ReactRouterDOM;

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-bar flex clean-list">
                <li><NavLink exact to='/email'>Inbox</NavLink></li>
                <li><NavLink exact to='/starred'>Starred</NavLink></li>
                <li><NavLink exact to='/sent'>Sent</NavLink></li>
                <li><NavLink exact to='/drafts'>Drafts</NavLink></li>
            </ul>
        </nav>
    )
}
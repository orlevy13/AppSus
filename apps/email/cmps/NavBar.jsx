import EmailStatus from './EmailStatus.jsx';
const { NavLink } = ReactRouterDOM;

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-bar clean-list">
                <NavLink activeClassName="active" exact to='/email'>
                    <li className="flex space-between align-center">
                        <span className="flex"><img className="sidebar-icon" height="18" src="./apps/email/assets/imgs/inbox.png" />Inbox</span><EmailStatus /></li>
                </NavLink>
                <NavLink exact to='/starred'>
                    <li className="flex"><img className="sidebar-icon" height="18" src="./apps/email/assets/imgs/star.png" /> Starred</li>
                </NavLink>
                <NavLink exact to='/sent'>
                    <li className="flex"><img className="sidebar-icon" height="18" src="./apps/email/assets/imgs/sent.png" /> Sent</li>
                </NavLink>
                <NavLink exact to='/drafts'><li>📝 Drafts</li></NavLink>
            </ul>
        </nav>
    )
}
import EmailStatus from './EmailStatus.jsx';
const { NavLink } = ReactRouterDOM;

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-bar clean-list">
                <NavLink activeClassName="active" exact to='/email'>
                    <li className="flex space-between align-center">📥 Inbox <EmailStatus /></li>
                </NavLink>
                <NavLink exact to='/starred'><li>⭐ Starred</li></NavLink>
                <NavLink exact to='/sent'><li>📤 Sent</li></NavLink>
                <NavLink exact to='/drafts'><li>📝 Drafts</li></NavLink>
            </ul>
        </nav>
    )
}
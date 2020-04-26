const { NavLink } = ReactRouterDOM;

export default function NavBar() {
    return (
        <nav>
            <ul className="nav-bar flex clean-list">
                <li><NavLink exact to='/book'>Books</NavLink></li>
                <li><NavLink exact to='/addBook'>Add Books</NavLink></li>
            </ul>
        </nav>
    )
}
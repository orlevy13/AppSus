const { NavLink } = ReactRouterDOM

export default function NavBar(props) {

    return <nav>
        <ul className="main-nav-bar flex clean-list">
            {/* <li><NavLink exact to='/'>Home</NavLink></li> */}
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink exact to='/book'>Books</NavLink></li>
            <li><NavLink exact to='/email'>Email</NavLink></li>
            <li><NavLink exact to='/notes'>Notes</NavLink></li>
        </ul>
    </nav>
}
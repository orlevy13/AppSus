import NavBar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx'
const { NavLink } = ReactRouterDOM

export default class AppHeader extends React.Component {

    render() {
        return (
            <header className="flex space-between">
                <NavLink exact to='/'>
                <div className="logo">
                    <img className="logo-img" src="../assets/img/logo.png" />
                    <a className="logo-txt">Appsus</a>
                    <p>First React project</p>
                </div></NavLink>
                <SearchBar></SearchBar>
                <NavBar />
            </header>
        )
    }
}
import NavBar from './NavBar.jsx';
import SearchBar from './SearchBar.jsx'

export default class AppHeader extends React.Component {

    render() {
        return (
            <header className="flex space-between align-center">
                <h1 className="logo">Miss Books</h1>
                <SearchBar></SearchBar>
                <NavBar />
            </header>
        )
    }
}
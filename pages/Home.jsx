import eventBus from '../services/eventBusService.js';
const { NavLink } = ReactRouterDOM

export default function Home() {
    eventBus.emit('set-page', { app: 'home' });
    return (
        <ul className="home flex column clean-list">
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink exact to='/book'>Books</NavLink></li>
            <li><NavLink exact to='/email'>Email</NavLink></li>
            <li><NavLink exact to='/notes'>Notes</NavLink></li>
            <img src="./assets/img/home.jpg" />
        </ul>
    )
}
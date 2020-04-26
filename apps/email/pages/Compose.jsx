import SideBar from '../cmps/SideBar.jsx';

export default class Compose extends React.Component {

    render() {
        return (
            <section className="compose-page flex">
                <SideBar></SideBar>
                <p>Compose</p>
            </section>
        )
    }
}
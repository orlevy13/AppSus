import SideBar from '../cmps/SideBar.jsx';

export default class Compose extends React.Component {

    render() {
        return (
            <section className="compose-page flex">
                <SideBar></SideBar>
                <div className="email-list">
                    <p>Compose</p>
                </div>
            </section>
        )
    }
}
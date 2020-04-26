import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';

export default function Starred() {
    return (
        <section className="starred-page flex">
            <SideBar></SideBar>
            <EmailList></EmailList>
        </section>
    )
}
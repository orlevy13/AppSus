import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';

export default function Sent() {
    return (
        <section className="compose-page flex">
            <SideBar></SideBar>
            <EmailList></EmailList>
        </section>
    )
}
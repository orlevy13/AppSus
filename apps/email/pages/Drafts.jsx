import SideBar from '../cmps/SideBar.jsx';
import EmailList from '../cmps/EmailList.jsx';

export default function Drafts() {
    return (
        <section className="drafts-page flex">
            <SideBar></SideBar>
            <EmailList></EmailList>
        </section>
    )
}
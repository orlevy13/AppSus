import SideBar from '../apps/email/cmps/SideBar.jsx';
import EmailList from '../apps/email/cmps/EmailList.jsx';

export default class EmailApp extends React.Component {


    render() {
        return (
            <section className="inbox-page flex">
                <SideBar></SideBar>
                <EmailList></EmailList>
            </section>
        )
    }
}
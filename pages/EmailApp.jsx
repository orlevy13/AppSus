import SideBar from '../apps/email/cmps/SideBar.jsx';
import EmailList from '../apps/email/cmps/EmailList.jsx';

export default class EmailApp extends React.Component {


    render() {
        return (
            <section>
                <h1>Email app</h1>
                
                <SideBar></SideBar>
                <EmailList></EmailList>
            </section>
        )
    }
}
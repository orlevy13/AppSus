
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM
const history = History.createBrowserHistory()


import UserMsg from './cmps/UserMsg.jsx'
import AppHeader from './cmps/AppHeader.jsx'
import BookApp from './pages/BookApp.jsx';
import About from './pages/about.jsx';
import BookDetails from './apps/books/pages/BookDetails.jsx';
import BookAdd from './apps/books/pages/BookAdd.jsx';
import Home from './pages/home.jsx';
import NotesApp from './pages/NotesApp.jsx';
import EmailApp from './pages/EmailApp.jsx';
import Sent from './apps/email/pages/Sent.jsx';
import Starred from './apps/email/pages/Starred.jsx';
import Drafts from './apps/email/pages/Drafts.jsx';
import Compose from './apps/email/pages/Compose.jsx';
import EmailDetails from './apps/email/pages/EmailDetails.jsx';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <AppHeader history={history} />
                <UserMsg />
                <main>
                    <Switch>
                        <Route exact component={EmailDetails} path="/email/details" />
                        <Route history={history} exact component={Compose} path="/compose" />
                        <Route exact component={Sent} path="/sent" />
                        <Route exact component={Starred} path="/starred" />
                        <Route exact component={Drafts} path="/drafts" />
                        <Route exact component={EmailApp} path="/email" />
                        <Route exact component={NotesApp} path="/notes" />
                        <Route exact component={BookAdd} path="/addBook" />
                        <Route exact component={BookDetails} path="/book/:bookid" />
                        <Route exact component={BookApp} path="/book" />
                        <Route exact component={About} path="/about" />
                        <Route exact component={Home} path="/" />
                    </Switch>
                </main>
            </Router >
        )
    }
}


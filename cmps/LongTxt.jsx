export default class LongTxt extends React.Component {

    state = {
        isLongTxtShown: false,
        txt: '',
        shortTxt: ''
    }

    componentDidMount() {
        const { txt, length } = this.props;
        this.setState({ txt: txt, shortTxt: txt.slice(0, length) + '...' })
    }

    toggleShown = () => {
        this.setState(prevState => ({ isLongTxtShown: !prevState.isLongTxtShown }))
    }

    render() {
        const { length } = this.props;
        const { txt, isLongTxtShown, shortTxt } = this.state;

        if (txt.length > length) {
            return (
                <div onClick={this.toggleShown} className='long-txt'>
                    <p>{isLongTxtShown ? txt : shortTxt}</p>
                </div>
            )
        }
        return (
            <p>{txt}</p>
        )
    }
}
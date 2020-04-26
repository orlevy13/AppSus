export default class LongTxt extends React.Component {

    state = {
        isLongTxtShown: false
    }

    get displayTxt() {
        const { isLongTxtShown } = this.state;
        const { text, length } = this.props;
        const txtToShow = (isLongTxtShown || text.length <= length) ? text : text.substring(0, length);
        return txtToShow;
    }

    get showContinueReading() {
        const { isLongTxtShown } = this.state;
        const { text } = this.props;
        const clsName = (isLongTxtShown || text.length <= length) ? 'hide' : '';
        return clsName;
    }

    get showLessReading() {
        const { isLongTxtShown } = this.state;
        const clsName = (isLongTxtShown) ? '' : 'hide';
        return clsName;
    }

    more = () => {
        this.setState({ isLongTxtShown: true });
    }

    less = () => {
        this.setState({ isLongTxtShown: false })
    }


    render() {
        return (
            <div className="long-txt">
                <p>
                    {this.displayTxt}
                    <span onClick={this.more} className={`read-more ${this.showContinueReading}`}> ...show more</span>
                    <span onClick={this.less} className={`read-more ${this.showLessReading}`}>  show less</span>
                </p>
            </div>
        )
    }

}
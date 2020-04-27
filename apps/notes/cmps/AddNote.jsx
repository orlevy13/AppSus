import NoteTxt from './NoteTxt.jsx';

export default class AddNote extends React.Component {

    state = {
        txt: '',
        type: ''
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ ...prevState, [field]: value }), () => {
            console.log('state', this.state)
        })
    }

    render() {

        const { txt, type } = this.state;
        return (
            <div onChange={this.handleChange}>
                <input value={txt} placeholder="What's on your mind..?" type="text" />
                <label htmlFor="txt">text</label>
                <input name="txt" value="txt" type="radio" />
                <label htmlFor="img">image</label>
                <input name="img" value="img" type="radio" />
                <label htmlFor="vid">video</label>
                <input name="vid" value="video" type="radio" />
                <button onClick={
                    this.props.onAddNote(this.state)
                } >Add</button>
            </div>
        )
    }
}


















// export default class AddNote extends React.Component {


// }
// state = {
        //     noteType: 'NoteTxt'
        // }
        // onChangeType = (noteType) => {
        //     this.setState({ noteType })
        // }
        // NoteToRender = () => {
        //     const { noteType } = this.state;
        //     switch (noteType) {
        //         case 'NoteTxt':
        //             return <NoteTxt noteAdded={() => {
        //                 this.props.onAddNote()
        //             }} onChangeType={this.onChangeType} />
        //         case 'NoteImg':
        //             return <NoteImg onChangeType={this.onChangeType} />
        //         case 'NoteTodos':
        //             return <NoteTodos onChangeType={this.onChangeType} />
        //         case 'NoteVideo':
        //             return <NoteVideo onChangeType={this.onChangeType} />
        //     }
        // }
        // render() {
        //     return (
        //         this.NoteToRender()
        //     )
        // }
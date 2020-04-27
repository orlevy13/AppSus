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

        const { txt } = this.state;
        return (
            <form onChange={this.handleChange}>
                <input name="txt" value={txt} placeholder="What's on your mind..?" type="text" />
                <label>text</label>
                <input name="type" value="NoteTxt" type="radio" />
                <label>image</label>
                <input name="type" value="NoteImg" type="radio" />
                <label>video</label>
                <input name="type" value="NoteVid" type="radio" />
                <label>todo</label>
                <input name="type" value="NoteTodo" type="radio" />
                <button onClick={() => {
                    this.props.onAddNote(this.state);
                    console.log('clicked add!');

                }} >Add</button>
            </form >
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
export default class AddNote extends React.Component {

    state = {
        txt: '',
        type: ''
    }

    componentDidMount() {
        this.setState({ type: 'NoteTxt' })
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
        let placeHolderText;
        switch (type) {
            case 'NoteTxt':
                placeHolderText = 'Take a note...'
                break;
            case 'NoteImg':
                placeHolderText = 'Image URL here...'
                break;
            case 'NoteVid':
                placeHolderText = 'Video URL here...'
                break;
            case 'NoteTodo':
                placeHolderText = 'Name your To-do list...'
                break;
        
            default: placeHolderText = 'Take a note...'
                break;
        }
        return (
            <form>
                <div className="note-type-icons flex justify-center">
                    <p className ="intro-text">What kind of note?</p>
                    <label><input name="type" value="NoteTxt" type="radio" onChange={this.handleChange}  />
                        <img src="../apps/notes/assets/img/addtext.png"/></label>
                    <label><input name="type" value="NoteImg" type="radio" onChange={this.handleChange}  />
                        <img src="../apps/notes/assets/img/addimg.png"  /></label>
                    <label><input name="type" value="NoteVid" type="radio" onChange={this.handleChange}  />
                        <img src="../apps/notes/assets/img/addvid.png"  /></label>
                    <label><input name="type" value="NoteTodo" type="radio" onChange={this.handleChange}  />
                        <img src="../apps/notes/assets/img/addtodo.png"  /></label>
                </div>
                <div className="flex align-center justify-center ">
                    <input className="note-add-text" name="txt" value={txt} placeholder={placeHolderText} type="text" onChange={this.handleChange} />

                    <button className="add-note-btn" type="submit" onClick={(e) => {
                        this.props.onAddNote(this.state);
                        this.setState({txt: ''})
                        console.log('clicked add!');
                        e.preventDefault();
                    }} ><img src="../apps/notes/assets/img/plus.png" /></button>
                </div>
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
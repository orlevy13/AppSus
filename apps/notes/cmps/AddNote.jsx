export default class AddNote extends React.Component {

    state = {
        txt: '',
        type: ''
    }

    componentDidMount() {
        this.setState({type:'NoteTxt'})
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState(prevState => ({ ...prevState, [field]: value }), () => {
            console.log('state', this.state)
        })

        // if (value === 'NoteTodo') {
            // this.props.onAddNote(this.state);
        // }


    }

    render() {

        const { txt, type } = this.state;
        return (
            <form>
                <input name="txt" value={txt} placeholder="What's on your mind..?" type="text" onChange={this.handleChange} />
                <label ><input name="type" value="NoteTxt" type="radio" onChange={this.handleChange} hidden />
                <img src="../apps/notes/assets/img/addtext.png" width="30"/></label>
                <label><input name="type" value="NoteImg" type="radio" onChange={this.handleChange} hidden />
                <img src="../apps/notes/assets/img/addimg.png" width="30"/></label>
                <label><input name="type" value="NoteVid" type="radio" onChange={this.handleChange} hidden />
                    <img src="../apps/notes/assets/img/addvid.png" width="30" /></label>
                

                {/* <img name onClick={() => { }} src="../apps/notes/assets/img/addtodo.png" width="30" /> */}
                

                <label><input name="type" value="NoteTodo" type="radio" onChange={this.handleChange} hidden />
                    <img src="../apps/notes/assets/img/addtodo.png" width="30" /></label>
                

                <button type="submit" onClick={(e) => {
                    this.props.onAddNote(this.state);
                    console.log('clicked add!');
                    e.preventDefault();
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
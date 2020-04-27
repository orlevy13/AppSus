import NoteTxt from './NoteTxt.jsx';

export default class AddNote extends React.Component {
    state = {
        noteType: 'NoteTxt'
    }
    onChangeType = (noteType) => {
        this.setState({ noteType })
    }
    NoteToRender = () => {
        const { noteType } = this.state;
        switch (noteType) {
            case 'NoteTxt':
                return <NoteTxt onChangeType={this.onChangeType} />
            case 'NoteImg':
                return <NoteImg onChangeType={this.onChangeType} />
            case 'NoteTodos':
                return <NoteTodos onChangeType={this.onChangeType} />
            case 'NoteVideo':
                return <NoteVideo onChangeType={this.onChangeType} />
        }
    }
    render() {
        return (
            this.NoteToRender()
        )
    }
} 
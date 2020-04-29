export default class BookDetails extends React.Component {

    state = {
        filter: {
            title: '',
            maxPrice: '',
            minPrice: ''
        }
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = (target.type === 'number') ? parseInt(target.value) : target.value

        this.setState(prevState => ({ filter: { ...prevState.filter, [field]: value } }), () => {
            this.props.onSetFilter(this.state.filter)
        })
    }
    onFilter = (ev) => {
        ev.preventDefault()
        this.props.onSetFilter(this.state.filter)
    }

    render() {

        const { title, minPrice, maxPrice } = this.state.filter;

        return (
            <section className="filter-books flex coloumn align-center">
                <form onSubmit={this.onFilter} className="filter-form flex justify-center">
                    <label htmlFor="name">title:</label>
                    <input type="text" name="title" value={title} onChange={this.handleChange}></input>
                    <label htmlFor="">min price:</label>
                    <input type="number" name='minPrice' value={minPrice} onChange={this.handleChange} />
                    <label htmlFor="">max price:</label>
                    <input type="number" name='maxPrice' value={maxPrice} onChange={this.handleChange} />
                </form>
            </section>
        )
    }
}
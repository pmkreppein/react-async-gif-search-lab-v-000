import React, {Component} from 'react';

export default class GifSearch extends Component {

    render() {
        return(
            <form onSubmit={this.props.handleSubmit}>
                <input type="text" onChange={this.props.handleChange} value={this.props.query}/>
                <button type="submit">Find Gifs</button>
            </form>
        )
    }
}
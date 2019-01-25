import React, {Component} from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

export default class GifListContainer extends Component {
    state = {
        query: '',
        gifs: []
    }

    handleChange = (event) => {
        event.persist();
        this.setState({
            query: event.target.value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();
        const url = "http://api.giphy.com/v1/gifs/search?q=" + this.state.query + "&api_key=dc6zaTOxFJmzC&rating=g";
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    gifs: [data.data[0]["images"]["original"]["url"], 
                           data.data[1]["images"]["original"]["url"],
                           data.data[2]["images"]["original"]["url"]]
                })
            })
    }

    render() {
        return (
            <div>
                <GifSearch value={this.state.query} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

}
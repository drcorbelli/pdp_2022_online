import React from "react";
import { Container} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

export class YoutubeContainer extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = { link: 'https://www.youtube.com/embed/1B3Xi5L6siI' };
        this.handleSearch = this.handleSearch.bind(this);
        this.searchText = React.createRef();
    }

    handleSearch()
    {
        var inputSearch = this.searchText.current.value;
        var embedSearch = inputSearch.replace("watch?v=","embed/")
        this.setState({link:embedSearch});
    }

    render()
    {
        return(
            <Container>
                <div>
                    <input type="text" id="Search" name="Search" ref={this.searchText}/>
                    <button onClick={this.handleSearch}>Search</button> 
                </div>
                <h1>Searched: {this.state.link}</h1>
                <div>
                    <iframe width="560" height="315" src={this.state.link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </Container>
        );
    }
}
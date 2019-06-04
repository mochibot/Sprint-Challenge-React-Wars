import React, { Component } from 'react';
import './App.scss';
import CharacterList from './components/CharacterList'

let totalPage;

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      page: 1
    };
  }
  
  componentDidMount() {
    this.getCharacters(`https://swapi.co/api/people/`);
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        //console.log(data);
        totalPage = Math.ceil(data.count / 10)
        //console.log(totalPage)
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  toggle = (props) => {
    this.setState(prevState => {
      return {
        starwarsChars: prevState.starwarsChars.map(item => {
          if (item.name === props.name) {
            item.checked = !item.checked;
          }
          return item;
        })
      }
    })
  }

  nextPage = () => {
    if (this.state.page === totalPage) {
      alert('you are on the last page')
    } else {
      let count = this.state.page + 1;
      this.getCharacters(`https://swapi.co/api/people/?page=${count}`);
      this.setState({
        page: count
      })
    }
  }

  prevPage = () => {
    if (this.state.page === 1) {
      alert('you are on the first page');
    } else {
      let count = this.state.page - 1;
      this.getCharacters(`https://swapi.co/api/people/?page=${count}`);
      this.setState({
        page: count
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <button onClick={this.prevPage}>Previous page</button>
        <button onClick={this.nextPage}>Next page</button>
        <CharacterList 
          list={this.state.starwarsChars}
          clickHandler={this.toggle}/>
      </div>
    );
  }
}

export default App;

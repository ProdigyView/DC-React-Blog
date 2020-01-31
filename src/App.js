import React from 'react';
import logo from './logo.svg';

import Header from './components/header';
import Content from './components/content';
import Movie from './components/movie';
import Footer from './components/footer';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };


  }

  componentDidMount() {

    var that = this;

    setTimeout(function () {

      fetch("http://omdbapi.com/?s=Werewolf&apikey=5f80b222", {
      })
        .then(res => res.json())
        .then(
          (result) => {
            console.log(result);

            that.setState({
              isLoaded: true,
              items: result.Search
            });

          },

          (error) => {
            console.log("Error");
            console.log(error);
          }
        )
    }, 2000);
  }

  render() {
    const { error, isLoaded, items } = this.state;

    return (
      !isLoaded ? <div>Loading Hello WOrld</div> :
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />


            <ul>
              {items.map(item => (
                <Movie title={item.Title} year={item.Year} type={item.Type} image={item.Poster} imdb={item.imdbID}  />
              ))}
            </ul>
          </header>
          <Footer />
        </div>
    );
  }
}

export default App;

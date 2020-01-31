import React from 'react';

class Movie extends React.Component {

    render() {

      var link = "https://www.imdb.com/title/" + this.props.imdb;

      console.log(link);

        return (
           <div>
              <img src={this.props.image} />
              <h2>{this.props.title}</h2>
              <p><strong>Year:</strong> {this.props.year}</p>
              <p><strong>Type:</strong> {this.props.type}</p>
              <a href={link}>View More</a>
           </div>
        );
     }
}

export default Movie
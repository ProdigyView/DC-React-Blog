import React from 'react';

class Content extends React.Component {
    render() {
       return (
          <div>
             <h2>Content</h2>
             <p>{this.props.text}</p>
          </div>
       );
    }
  }

  export default Content;
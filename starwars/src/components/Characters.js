import React from 'react';

class Characters extends React.Component {
    render() {
      return (
        <div className='char-card'>
          <h2>{this.props.characters.name}</h2>
          <button onClick={()=> this.props.clickHandler(this.props.characters)}>Show more</button>
          <div style={{display: this.props.characters.checked ? 'block' : 'none'}}>
            <p>Birth-year: {this.props.characters.birth_year}</p>
            <p>Height: {this.props.characters.height}</p>
            <p>Mass: {this.props.characters.mass}</p>
          </div>
        </div>
      )
    }
}

export default Characters;
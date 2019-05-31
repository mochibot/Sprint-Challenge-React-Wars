import React from 'react';
import './StarWars.scss'
import Characters from './Characters'

class CharacterList extends React.Component {
  render() {
    return (
      <div className='char-list'>
        {this.props.list.map(item => <Characters characters={item} key={item.name}clickHandler={this.props.clickHandler}/>)}
      </div>
    )
  }
}

export default CharacterList;
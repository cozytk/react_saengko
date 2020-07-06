import React, { Component } from 'react';

class Control extends Component {
  render() {
    return (
      <ul>
        <li>
          <a
            href="/Create"
            onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode("create");
            }.bind(this)}
          >Create</a>
        </li>
        <li>
          <a
            href="/Update"
            onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode("update");
            }.bind(this)}
          >Udpate</a>
        </li>
        <li>
          <input
            onClick={function(e){
              e.preventDefault();
              this.props.onChangeMode("delete");
            }.bind(this)}
            type="button"
            value="delete"
          ></input>
        </li>
      </ul>
    );
  }
}

export default Control;

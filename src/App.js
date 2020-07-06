import React, { Component } from 'react';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subject : {title:"WEB", sub:"World Wide Web!"},
      mode : "welcome",
      welcome : {title : 'Welcome', desc:"Let's start to study WEB"},
      current : 0,
      contents : [
        {id:1, title:"HTML", desc:"HTML is Hyper Text Markup..."},
        {id:2, title:"CSS", desc:"CSS is Designing..."},
        {id:3, title:"Javascript", desc:" JS is interactive..."}
      ]
    }
  }
  render() {
    var _title, _desc = null;
    if (this.state.mode === 'welcome')
    {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    }
    else if (this.state.mode === 'read')
    {
           _title = this.state.contents[this.state.current].title;
           _desc = this.state.contents[this.state.current].desc;
    }
    // else if (this.state.mode === 'read')
    // {
    //   var i = 0;
    //   while (i < this.state.contents.length)
    //   {
    //     var data = this.state.contents[i];
    //     if (data.id === this.state.current)
    //     {
    //        _title = this.state.contents[i].title;
    //        _desc = this.state.contents[i].desc;
    //        break;
    //     }
    //     i++;
    //   }
    // }
    return (
      <div className="App">
        <Subject
          title = {this.state.subject.title}
          sub = {this.state.subject.sub}
          onChangePage = {function(){
            this.setState({
              mode:"welcome",
            });
          }.bind(this)}
        ></Subject>
        <TOC
          data={this.state.contents}
          onChangePage = {function(index){
            this.setState({
              mode:"read",
              current:Number(index) - 1
            });
          }.bind(this)}>
          </TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;

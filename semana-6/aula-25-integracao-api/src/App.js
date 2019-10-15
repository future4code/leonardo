import React from 'react';
import Cadastro from './components/Cadastro/Cadastro';
import Exibiçao from './components/Exibicao/Exibicao';
import PropTypes from 'prop-types';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: "",
      emailValue: "",
      view:false,
    };
  }
  
  onChangeView = () => {
    const newView = !this.state.view
    this.setState({view: newView })
    console.log(this.state.view)
  }
  render(){
  
  return (
    
    <div className="App">
      {this.state.view ? <Exibiçao onShowLogin={this.onChangeView}/> :<Cadastro onShowUsers={this.onChangeView}/>}

      
    </div>
  );
}
}

export default App;

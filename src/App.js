import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-boostrap/lib/Grid';
import Row from 'react-boostrap/lib/Row';
import Col from 'react-boostrap/lib/Col';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
              <div>
                <SayWholeName name="Smith1" surname="Smithson1" link="ya.ru" />
                <SayWholeName name="Smith2" surname="Smithson2" link="ya.ru" />
                 <SayWholeName name="Smith3" surname="Smithson3" link="ya.ru" />
             </div>
    );
  }
};

function SayWholeName(foo){
  return (  <div>
          <h1>Моё имя {foo.name}, и моя фамилия - {foo.surname}</h1>
          <a href={foo.link}>Ссылка на профиль</a>
        </div>
    )
};



export default App;

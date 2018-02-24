import React from 'react';
import { render } from 'react-dom';
import Mycomponent from './components/mycomponent.js'


class App extends React.Component {
  render() {
    return (
      <div>
        <p> Hello React project</p>
        <Mycomponent />
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));


import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyA5yz6t0ofC1xCfXF2C_QLZCZcipY4VWZY";

// create a new component. This component should produce
// some HTML

const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// Take this component's generated HTML and put it on the page in the DOM

ReactDom.render(<App />, document.querySelector('.container'));

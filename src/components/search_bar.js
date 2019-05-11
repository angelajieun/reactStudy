import React, { Component } from 'react';
// const Compoenet = React.Compononet; 라는 뜻.
// const SearchBar = () => {
//   return <input /> // React.createElement
// };

class SearchBar extends Component { //React.Component로 부터 모든 기능을 제공받으라는것.
  constructor(props) { 
    super(props); // 2) super 는 부모 메소드를 호출
    this.state = { term : '' };
    // state 왜 이 일을 하고있고, 무엇으로부터 얻으려는것일까?
  }
  
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
  onInputChange(event) { //handleInputChange
    console.log(event.target.value);
  }
  
  render() {
    return ( 
      <div>
        <input value={this.state.term} 
          onChange={event => this.setState({ term : event.target.value}) } />
        {/* this.setState 를 호출함으로써 스테이트를 업데이트한다. */}
      </div>
    )
  }

}

// 다른곳에서 이 컴색바 파일을 불러올수 있게 하려면
export default SearchBar;
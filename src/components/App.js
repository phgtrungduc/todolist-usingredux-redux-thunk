import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input:''
    }
  }
  changeInput= (e)=>{
    this.setState({input:e.target.value})
  }
  addToList = ()=>{
    this.props.addToList(this.state.input)
    this.setState({
      input: ''
    })
    //swal("Good job!", "You clicked the button!", "success");
  }
  deleteList=(index)=>{
    this.props.deleteList(index)
  }
  componentDidMount (){
    this.props.loadData();
  }
  render() {
    {console.log(this.props.list);}
    return (
      <div>
        <div className="App">
          <input type="text" onChange={this.changeInput} value={this.state.input}></input>
          <button onClick={this.addToList}>Thêm</button>
          <br/  >
          List: 
          <ol>
            {
              this.props.list.map((value,index)=>
              <div key={index}>
                  <li>{value.name}</li>
                  <button onClick={()=>this.deleteList(value.id)}>delete</button>
                </div>)
              
            }
          </ol>
      </div>
      </div >
    );
  }
}


export default App;
import React,{Component} from "react"
import CardList from "./CardList.js"
import "./App.css";
import DisplayName from "./DisplayName.js"

const loginList = [25,1,4,7,10,51,110,111,229,12,76,81,69,19,98];

class App extends Component {
 constructor(){
 	super()
 	this.state = {
 		Pokemon : "",
 		Name : "",
 		list: loginList,
 		placeholder:"enter"

 		

 	}
 }	

 onSubmit=(event)=>{
 	const date = this._inputDate.value.split("-");
 	const name = this._inputName.value;
 	const yearNum = `${date[0]}`[3]
 	this.setState({Name: name});
 	const Num = Number(date[1]) + Number(date[2]) + Number(name.length) + Number(yearNum)  ;
 	this.setState({list : [Num]});
 	event.preventDefault();
 }

 onButtonClick = ()=>{
 	this.setState({Name:""});
 	this.setState({list:loginList})
 	{let name = document.getElementById("name");
 		name.value ="";
 	let date = document.getElementById("date");
 		date.value ="";
 				

 		}

 }



 render(){
    return (
    <div className="App">

      
      <h1 className="header center" > PokeBeast </h1>
      <div className = "center" >

		 	{<form onSubmit={this.onSubmit}>
		 			 		<h4> NAME :  <input
		 			 		id = "name"  
		 			 		className = "ma3 pa2 ba b--green bg-lightest-blue"
		 			 		ref = {(a)=>this._inputName = a}
		 			 		placeholder={this.state.placeholder} type="text" required/>  
		 			 		DOB  :  
		 			 		<input  
		 			 		id = "date"
		 			 		className = "ma3 pa2 ba b--green bg-lightest-blue"
		 			 		ref = {(b)=>this._inputDate = b}
		 			 		 type="date" required/> 


		 			 		<button className="bg-light-red pa2 br3"> Submit </button>	
		 			 		<button className="bg-light-blue pa2 ma2 br3" onClick = {this.onButtonClick}> Refresh </button>
		 			 		 </h4>

		 			 		
		 			 		
		 			 		
		 			 	</form>}
	</div>
	  {this.state.Name !=="" ? <DisplayName Name={this.state.Name}/> : <div></div>}
      <CardList list = {this.state.list}  />
      
    </div>
  );
  }  
}

export default App;

import React,{Component} from "react";
import "./Card.css"



class Card extends Component{
	constructor(){
		super()
		this.state ={
			pokemon : "",
			types :""
		}
	}

	componentDidMount=()=>{
		fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`).then((response)=> response.json()).
		then((user)=> this.setState({pokemon: user.name,
			types: user.types[0].type.name}))

	}

	
	render(){
		
		
		return(

		
			
			<div id = {this.state.types} className = " dib br3 pa3 ma2 grow ba bw1 shadow-5 ">
				<img className = "poke-img" src ={`https://pokeres.bastionbot.org/images/pokemon/${this.props.id}.png`} alt=""/>
					<div className ="poke-text">
					<h3 > {this.state.pokemon}</h3>
					<h3>  {this.state.types}</h3>
					</div>
				

		</div>

	)

}


}


export default Card;
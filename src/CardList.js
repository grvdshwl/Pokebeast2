import React,{Component} from "react";
import Card from "./Card.js";
import "./Card.css"



const CardList =({list})=>{

	

	
	
	
	const pokemon = list.map((item)=>{return <Card key ={item}id={item}/>})

	return(
		<div className = " tc">
		 {pokemon}
		</div>
		)


}
export default CardList;
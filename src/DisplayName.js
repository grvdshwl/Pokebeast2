import React,{Component} from "react";
import Card from "./Card.js";
import "./Card.css";
import "./DisplayName.css"



const CardList =({Name})=>{	
		
		return(
		<div className = "text">
			{ <h3 className="name">{Name}</h3>}
			 {<h3>, your soul pokebeast is</h3>}
		
		</div>
		)



}
export default CardList;
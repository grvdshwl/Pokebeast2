import React,{Component} from "react";




const FormDisplay =({submit})=>{





	return(
		<div >
		 	<form onSubmit={submit}>
		 		<h4> Name :  <input ref=((a)=>this._inputElement =a) placeholder="enter name" type="text" required/> </h4>
		 		
		 	</form>
		</div>
		)


}
export default FormDisplay;
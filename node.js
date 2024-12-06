Function sendMail(){
	let parms={
		name : documet.getElementById("name").value,
		email : document.getElementById("email").value,
		subject : document.getElementById("subject").value,
		message : document.getElementById("message"),value
		
	}	
	
emails.send("service_193f4gs", "template_bqx52qq",parms).then(alert("Email Sent"))	
}
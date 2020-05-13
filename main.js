$(document).ready(function (){
	$("#appointmentbtn").click(function() {
	    window.location.href='appointment.html';
	});
	
	    localStorage.setItem("name", '');
	    localStorage.setItem("email", '');
	    localStorage.setItem("password", '');
	    localStorage.setItem("massage", '');
	$("#submit").click(function() {
	    var name = $("#name").val();
	    var email = $("#exampleInputEmail1").val();
	    var password = $("#exampleInputPassword1").val();
	    var massage = $("#exampleFormControlTextarea1").val();
	    localStorage.setItem("name", name);
	    localStorage.setItem("email", email);
	    localStorage.setItem("password", password);
	    localStorage.setItem("massage", massage);
	    window.location.href='appointment.html';
	});
	debugger;
	var success = localStorage.getItem("success");
	if (success=="Your Appointment successfully Sent") {
		alert(success);
	}
});
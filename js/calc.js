$(document).ready(function() { 
	var num="";
	var msg="";
	var dotFlag = false;
	var zf = false;

	$('.one').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "1";
				num = num.slice(0,-1);
				num += "1";
			}
			else{
				msg += '1';
				num += '1';
			}
			$('.monitor').val(msg);
			console.log("Button: one | Result:" + num);
		}
	});
	$('.two').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "2";
				num = num.slice(0,-1);
				num += "2";
			}
			else{
				msg += '2';
				num += '2';
			}
			$('.monitor').val(msg);
			console.log("Button: two | Result:" + num);
		}
	});
	$('.three').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "3";
				num = num.slice(0,-1);
				num += "3";
			}
			else{
				msg += '3';
				num += '3';
			}
			$('.monitor').val(msg);
			console.log("Button: three | Result:" + num);
		}
	});
	$('.four').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "4";
				num = num.slice(0,-1);
				num += "4";
			}
			else{
				msg += '4';
				num += '4';
			}
			$('.monitor').val(msg);
			console.log("Button: four | Result:" + num);
		}
	});
	$('.five').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "5";
				num = num.slice(0,-1);
				num += "5";
			}
			else{
				msg += '5';
				num += '5';
			}
			$('.monitor').val(msg);
			console.log("Button: five | Result:" + num);
		}
	});
	$('.six').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "6";
				num = num.slice(0,-1);
				num += "6";
			}
			else{
				msg += '6';
				num += '6';
			}
			$('.monitor').val(msg);
			console.log("Button: six | Result:" + num);
		}
	});

	$('.seven').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "7";
				num = num.slice(0,-1);
				num += "7";
			}
			else{
				msg += '7';
				num += '7';
			}
			$('.monitor').val(msg);
			console.log("Button: seven | Result:" + num);
		}
	});
	$('.eight').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "8";
				num = num.slice(0,-1);
				num += "8";
			}
			else{
				msg += '8';
				num += '8';
			}
			$('.monitor').val(msg);
			console.log("Button: eight | Result:" + num);
		}
	});

	$('.nine').click(function() {
		if(msg.length < 11){
			if(msg=="+0" || msg=="-0" || msg=="*0" || msg=="/0" || msg=="0"){
				msg = msg.replace("0","");
				msg += "9";
				num = num.slice(0,-1);
				num += "9";
			}
			else{
				msg += '9';
				num += '9';
			}
			$('.monitor').val(msg);
			console.log("Button: nine | Result:" + num);
		}
	});


	//Ama mpei mia fora to "0" stp msg meta den 3anampainei to programma sthn if.

	$('.zero').click(function() {
		if(msg.length < 11 && (msg.length == 0) || msg == "+" || msg == "-" || msg == "*" || msg == "/"){
			msg += '0';
			num += '0';
			$('.monitor').val(msg);
			console.log("Button: zero (1)| Result:" + num);
		}else if(msg == "+0" || msg == "-0" || msg == "*0" || msg == "/0" || msg == "0" || msg == "0" || msg == "0" || msg == "0"){
			console.log("Button: zero (2)| Result:" + num);
		}else{
			msg += '0';
			num += '0';
			$('.monitor').val(msg);
			console.log("Button: zero (3)| Result:" + num);
		}
	});

	$('.comma').click(function() {
		
		if(!dotFlag && msg.length < 11 && num != ""){
			msg += '.';
			num += '.';
			$('.monitor').val(msg);
			console.log("Button: dot | Result:" + num);
			dotFlag = true;
		}
	});
	$('.clear').click(function() {
			num = '';
			msg = ''
			dotFlag = false;
			$('.monitor').val("");
			console.log("Button: CLEAR | Result:" + num);
	});

	$('.plus').click(function() {
		if(msg){
			num += '+';
			msg = '+'
			$('.monitor').val(msg);
			console.log("Button: CLEAR | Result:" + num);
			dotFlag = 0;
		}
	});
	$('.minus').click(function() {
		if(msg){
			num += '-';
			msg = '-'
			$('.monitor').val(msg);
			console.log("Button: CLEAR | Result:" + num);
			dotFlag = 0;
		}
	});
	$('.mul').click(function() {
		if(msg){
			num += '*';
			msg = '*'
			$('.monitor').val(msg);
			console.log("Button: CLEAR | Result:" + num);
			dotFlag = 0;
		}
	});
	$('.div').click(function() {
		if(msg){
			num += '/';
			msg = '/'
			$('.monitor').val(msg);
			console.log("Button: CLEAR | Result:" + num);
			dotFlag = false;
		}
	});
	$('.enter').click(function() {
		calculate(num);
	});


	function calculate(num){
		var res;
		for (var i=0; i<=num.length; i++){
			if (num[i]!= "+"){
				
			}
		}	
	};
});

window.onload = function(){
	var oLi1 = document.getElementById('footer1_box2_li');
	var oDiv1 = document.getElementById('footer1_box2_div');
	var oDiv2 = document.getElementById('footer1_box3_div');
	var oA1 = document.getElementById('footer1_box3_a');
	var oLi2 = document.getElementById('nav_li1');
	var oDiv3 = document.getElementById('bz');
	var oDiv4 = document.getElementById('content_box3_cbox2');
	var oDiv5 = document.getElementById('content_box3_cbox3');
	var oDiv6 = document.getElementById('content_box4');
	var oDiv7 = document.getElementById('content_box3');
	var oDiv8 = document.getElementById('content');
	var oDiv9 = document.getElementById('rightbox');
	var oDiv10 = document.getElementById('rightbox_div');

	oDiv10.onclick = function(){
		oDiv9.style.display = "none";
	}

	oDiv6.onmousedown = function(){
		oDiv4.style.display = "block";
		oDiv5.style.display = "block";
		oDiv7.style.height = "228px";
		oDiv8.style.height = "380px";
	}

	oDiv6.onmouseup = function(){
		oDiv4.style.display = "none";
		oDiv5.style.display = "none";
		oDiv7.style.height = "140px";
		oDiv8.style.height = "302px";
	}

	oDiv3.onmouseover = function(){
		oDiv3.style.display = "block";
		oLi2.style.backgroundColor = "#ffffff";
	}

	oDiv3.onmouseout = function(){
		oDiv3.style.display = "none";
		oLi2.style.backgroundColor = "#f7f7f7";
	}

	oLi2.onmouseover = function(){
		oDiv3.style.display = "block";
	}

	oLi2.onmouseout = function(){
		 oDiv3.style.display = "none";
	}

	oA1.onmouseover = function(){
		oDiv2.style.display = "block";
	}

	oA1.onmouseout = function(){
		oDiv2.style.display = "none";
	}

	oLi1.onmouseover = function(){
		oDiv1.style.display = "block";
	}

	oLi1.onmouseout = function(){
		oDiv1.style.display = "none";
	}
}
$(document).ready(function(){
	$('rightbox_dl4').click(function(){
		$('html,body').animate({
			scrollTop:0},'slow');
	});
});


	
window.onload = function(){
	var oLi1 = document.getElementById('li1');
	var oLi2 = document.getElementById('li2');
	var oA1 = document.getElementById('a1');
	var oA2 = document.getElementById('a2');
	var oLogin = document.getElementById('login');
	var oRegister = document.getElementById("register");

			//立即注册
			oA1.onclick = function(ev){
				var e = ev || window.event;
				preDef(e);

				$("#loginMsg").style.display = 'none';
				$("#registerMsg").style.display = 'block';
			}
			//立即登陆
			oA2.onclick = function(ev){
				var e = ev || window.event;
				preDef(e);

				$("#loginMsg").style.display = 'block';
				$("#registerMsg").style.display = 'none';
			}

			//登陆
			oLogin.onclick = function(){

			var str = `username=${$("name=username")[0].
			value}&password=${$("name=password")[0].
			value}`;

				ajax({
					method: "post",
					url: "test.php?type=login",
					data: str, 
					success: function(data){
						alert(data);
					},
					error: function(msg){
						alert(msg);
					}
				})
			}


			//注册
			oRegister.onclick = function(){

				var str = `username=${$("name=username")[1].
				value}&password=${$("name=password")[1].
				value}&repassword=${$("name=repassword")[0].
				value}`;
				ajax({
					method: "post",
					url: "test.php?type=register",
					data: str,
					success: function(data){
						alert(data);
					},
					error: function(msg){
						alert(msg);
					}
				})
			}

	oLi1.onclick = function(ev){
		var e = ev || window.event;

		$("#dx").style.display = 'block';
		$("#li1").style.color = '#464646';
		$("#li1").style.borderBottom = '2px solid #464646';
		$("#loginMsg").style.display = 'none';
		$("#li2").style.color = '#afafaf';
		$("#li2").style.border = 'none';
		$("#registerMsg").style.display = 'none';
	}
	oLi2.onclick = function(ev){
		var e = ev || window.event;

		$("#dx").style.display = 'none';
		$("#li1").style.color = '#afafaf';
		$("#li1").style.border = 'none';
		$("#loginMsg").style.display = 'block';
		$("#li2").style.color = '#464646';
		$("#li2").style.borderBottom = '2px solid #464646';
		$("#registerMsg").style.display = 'none';	
	}	
}





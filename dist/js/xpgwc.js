window.onload = function(){
	var oLi1 = document.getElementById('footer1_box2_li');
	var oDiv1 = document.getElementById('footer1_box2_div');
	var oDiv2 = document.getElementById('footer1_box3_div');
	var oA1 = document.getElementById('footer1_box3_a');
	var oLi2 = document.getElementById('nav_li1');
	var oDiv3 = document.getElementById('bz');
	var oDiv9 = document.getElementById('rightbox');
	var oDiv10 = document.getElementById('rightbox_div');

	oDiv10.onclick = function(){
		oDiv9.style.display = "none";
	}

	oDiv3.onmouseover = function(){
		oDiv3.style.display = "block";
	}

	oDiv3.onmouseout = function(){
		oDiv3.style.display = "none";
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
		$('html,body').animate({scrollTop:0},'slow');
	});



	//事件委托，给异步加载的控件添加事件
			$("#section").on("click", ".section_btn", function(){

				ballMove(this);

				var id = this.id;
				//加入购物车 约定 goods=[{id:1,num:2},{id:2,num:1}]
				//1、判断是否是第一次添加
				var first = $.cookie("goods") == null ? true : false;
				if(first){
					//第一次添加，直接将cookie存储进去
					$.cookie("goods", `[{id:${id},num:1}]`, {
						expires: 7,
						raw: true
					});
				}else{
					//2、判断之前是否添加过商品
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);  //eval(必须是外层是数组，元素是对象) 和 JSON.parse()
					var same = false; //假设没有添加过
					for(var i = 0; i < arr.length; i++){
						if(arr[i].id == id){
							//3、之前存储过数量+1
							arr[i].num++;
							same = true;
							break;
						}
					}
					if(!same){
						//4、没有相同的
						var obj = {id: id, num: 1};
						arr.push(obj);
					}
					$.cookie("goods", JSON.stringify(arr), {
						expires: 7,
						raw: true
					});
				}
				sc_car();
			})


			//购物车内商品数量
			function sc_car(){
				var sc_str = $.cookie("goods");
				if(sc_str){
					var sc_arr = eval(sc_str);
					var sum = 0;
					for(var i = 0; i < sc_arr.length; i++){
						sum += sc_arr[i].num;
					}
					$(".yuan").html(sum);

				}
			}



			//抛物线运动
			function ballMove(sc_Btn){
				//1、显示小球，移动到按钮位置
				$("#ball").css({
					display: "block",
					left: $(sc_Btn).offset().left,
					top: $(sc_Btn).offset().top
				})

				var offX = $("#rightbox_dl2").offset().left - $("#ball").offset().left;
				var offY = $("#rightbox_dl2").offset().top - $("#ball").offset().top;

				//做抛物线运动
				//1、抛物线对象 设置参数
				var bool = new Parabola({
					el: "#ball",
					targetEl: null,
					offset: [offX, offY],
					curvature: 0.0005,
					duration: 400,
					callback: function(){
						$("#ball").hide();
					}
				})

				//2、开始运动
				bool.start();
			}










});

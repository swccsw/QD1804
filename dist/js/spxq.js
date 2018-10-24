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



	$('.orig').mouseover(function(e){ 
		$('.fd').css('display','block'); 
		$('.blocks').css('display','block'); 
	})
	$('.orig').mousemove(function(e){
		var x=e.clientX;
        var y=e.clientY;
        var sX=$('.orig').offset().left;
        var sY=$('.orig').offset().top;
        var mx=x-sX;
        var my=y-sY;
        var mw=$('.blocks').width()/2;
        var mh=$('.blocks').height()/2;
        $('.blocks').css({left:e.pageX - sX-mw+'px',top:e.pageY-sY-mh+'px'});
        var lw=$('.blocks').position().left;
        var lh=$('.blocks').position().top;
        var maxW=$('.orig').width()-$('.blocks').width();
        var maxH=$('.orig').height()-$('.blocks').height();
        // 左边界 
        if(lw<=0){$('.blocks').css('left','0px');} 
        // 右边界 
        if(lw>=maxW){ $('.blocks').css('left',maxW+'px'); } 
        // 上边界 
        if(lh<=0){$('.blocks').css('top','0px');} 
        // 下边界 
        if(lh>=maxH){ $('.blocks').css('top',maxH+'px'); } 
        // 获取小框框的偏移位置 
        var lw=$('.blocks').position().left; 
        var lh=$('.blocks').position().top; 
        // 计算鼠标在小图里的位置  *2.5计算大图移动的比例 
        var newX=lw*2.5; 
        var newY=lh*2.5; 
        $('.fd img').css({left:-newX+'px',top:-newY+'px'}); }) 
        //绑定鼠标离开原图窗口事件 
        $('.orig').mouseout(function(){ 
        	$('.fd').css('display','none'); 
        	$('.blocks').css('display','none');
    })

	$('#cbox4_img2').mouseover(function(e){
		$('#orig_img2').css('display', 'block');
		$('#fd_img2').css('display', 'block');
		$('#orig_img1').css('display', 'none');
		$('#fd_img1').css('display', 'none');
	})
	$('#cbox4_img1').mouseover(function(e){
		$('#orig_img1').css('display', 'block');
		$('#fd_img1').css('display', 'block');
	})
	$('#cbox4_img3').mouseover(function(e){
		$('#orig_img3').css('display', 'block');
		$('#fd_img3').css('display', 'block');
		$('#orig_img1',).css('display', 'none');
		$('#fd_img1').css('display', 'none');
		$('#orig_img2',).css('display', 'none');
		$('#fd_img2').css('display', 'none');
	})
	$('#cbox4_img4').mouseover(function(e){
		$('#orig_img4').css('display', 'block');
		$('#fd_img4').css('display', 'block');
		$('#orig_img1',).css('display', 'none');
		$('#fd_img1').css('display', 'none');
		$('#orig_img2',).css('display', 'none');
		$('#fd_img2').css('display', 'none');
		$('#orig_img3',).css('display', 'none');
		$('#fd_img3').css('display', 'none');
	})
	$('#cbox4_img5').mouseover(function(e){
		$('#orig_img1',).css('display', 'none');
		$('#fd_img1').css('display', 'none');
		$('#orig_img2',).css('display', 'none');
		$('#fd_img2').css('display', 'none');
		$('#orig_img3',).css('display', 'none');
		$('#fd_img3').css('display', 'none');
		$('#orig_img4',).css('display', 'none');
		$('#fd_img4').css('display', 'none');
	})

}

$(document).ready(function(){
	$('rightbox_dl4').click(function(){
		$('html,body').animate({
			scrollTop:0},'slow');
	});
});


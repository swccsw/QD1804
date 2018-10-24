var t = 0;
            var index = 0;
        //自动播放
            t = setInterval(play, 3000)

            function play() {
                index++;
                if (index > 4) {
                    index = 0
                }
                $("#lunbobox ul li").eq(index).css({
                    "background": "#999",
                    "border": "1px solid #ffffff"
                }).siblings().css({
                    "background": "#cccccc",
                    "border": ""
                })

                $(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
            };  
            //添加左右的点击事件
                $(function(){
                    $('#toleft').click(function(){
                    index--;
                    if (index <= 0) {
                        index = 4
                    }
                    $("#lunbobox ul li").eq(index).css({
                    "background": "#999",
                    "border": "1px solid #ffffff"
                }).siblings().css({
                    "background": "#cccccc",
                })
                 $(".lunbo a ").stop().eq(index).fadeIn(1000).siblings().fadeOut(1000);
                })

                    $('#toright').click(function(){
                        index++;
                        if (index > 4) {
                            index = 0
                        }
                    $('#lunbobox ul li').eq(index).css({
                        'background':'#999',
                        'border':'1px solid #ffffff'
                    }).siblings().css({
                        'background':'#cccccc'
                    })
                    $('.lunbo a').stop().eq(index).fadeIn(1000).siblings().fadeOut(1000)
                    })

                    //鼠标移入移出
                    $('#lunbobox ul li,.lunbo a img,#toright,#toleft').hover(
                        function(){
                             clearInterval(t);
                        },
                        function(){
                            t = setInterval(play, 3000);
                            function play() {
                        index++;
                        if (index > 4) {
                            index = 0
                        }
                        $("#lunbobox ul li").eq(index).css({
                            "background": "#999",
                            "border": "1px solid #ffffff"
                        }).siblings().css({
                            "background": "#cccccc",
                            "border": ""
                        })

                        $(".lunbo a").eq(index).fadeIn(1000).siblings().fadeOut(1000);
                    };
                                })                              
                    })
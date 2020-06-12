window.onload = function () {

    var str = "武鸣区隶属广西壮族自治区南宁市，意为“以武而鸣于天下”，地跨北纬 22° 59′ 58″～ 23° 33′ 16″、 东经 107° 49′ 26″～ 108° 37′ 22″之间，位于南宁市北部，西和西南与隆安县、平果县交界，北接马山县， 南邻南宁市区。 2016年，武鸣区幅员面积3378平方公里，其中63.50%为丘陵；辖13个镇；总人口70.01万（2015年），2015年，全区地区生产总值294.95亿元。 武鸣区是壮族的发源地之一，壮语以武鸣方言为标准音，被誉为“中国壮乡”， 每年在武鸣城区举办的中国壮乡·武鸣“三月三”歌圩活动已成为中外民族文化交流的平台；境内主要有国家4A级景区的伊岭岩风景区、大明山风景旅游区、花花大世界等景区。 "
    var i = 0;
    var j = 0;

    var headStr = "欢迎来到武鸣！"
    var showTitile = document.getElementById("showTitile");

    var timer = setInterval(function () {
        var span = document.createElement("span");
        span.innerText = headStr[j];
        //给新的节点添加类
        span.classList.add("activity");
        //过度显示的计时器
        setTimeout(function () {
            span.style.opacity = "1"
        }, 300)
        showTitile.appendChild(span);
        j++;
        if (j >= headStr.length) {
            clearInterval(timer);
            timer = undefined;
            j = 0;
            // 如果题目显示完了显示介绍内容
            showP();

        }

    }, 300)

    function showP() {
        //    介绍字段
        var settime = setInterval(function () {
            console.log(str[i])
            create();
            i++;
            if (i >= str.length) {
                clearInterval(settime);
                settime = undefined;
                i = 0;
            }


        }, 200)

        function create() {
            var span = document.createElement('span');
            span.innerHTML = str[i];
            //给新的节点添加类
            span.classList.add("activity");
            //过度显示的计时器
            setTimeout(function () {
                span.style.opacity = "1"
            }, 300)
            //获取父节点
            var showText = document.getElementById("showText");
            showText.appendChild(span);

        }


    }

}

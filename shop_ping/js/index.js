window.addEventListener('load', function () {
    // 1.获取元素
    var zuo = document.querySelector('.zuo');
    var you = document.querySelector('.you');
    var focus = document.querySelector('.focus');
    // 2. 鼠标经过ficus 左右箭头显示
    focus.addEventListener('mouseenter', function () {
        zuo.style.display = 'block';
        you.style.display = 'block';
        // 鼠标经过ficus 关闭定时器
        clearInterval(timer);
        timer = null; // 清楚定时器变量
    })
    focus.addEventListener('mouseleave', function () {
        zuo.style.display = 'none';
        you.style.display = 'none';
        // 鼠标离开ficus 开启定时器自动播放轮播图
        timer = setInterval(function() {
            you.click();
        },2000)
    })
    //  3. 动态创建底部圆点
    var ul = focus.querySelector('ul');
    var focus_hd = document.querySelector('.focus_hd');
    // console.log(ul.children.length);
    for (var i = 0; i < ul.children.length; i++) {
        var li = document.createElement('li');
        var focusWidth = focus.offsetWidth;
        // 记录当前小圆点的索引号，通过自定义属性实现
        li.setAttribute('index', i);
        focus_hd.appendChild(li);
        li.addEventListener('click', function () {
            // 4.排他思想，让点击的li获取class
            for (var i = 0; i < focus_hd.children.length; i++) {
                focus_hd.children[i].className = '';
            }
            this.className = 'current';
            // 5.点击小圆点  图片移动 使用动画效果
            // 点击那个小圆点获取index值
            var index = this.getAttribute('index');
            // 当点击某个li 就把 li的索引号给num
            num = index;
            // 点击某个小li 就把里索引号给circle
            circle = index;
            // var focusWidth = focus.offsetWidth;
            console.log(focusWidth);
            console.log(index);
            // animate(obj, target,callback)

            animate(ul, -index * focusWidth);
        })
    }
    focus_hd.children[0].className = 'current';
    // 6.克隆第一张图片
    var first = ul.children[0].cloneNode(true);
    ul.appendChild(first);
    // 7.设置右键切换轮播图
    var num = 0;
    var circle = 0;
    // flag 节流阀
    var flag = true;
    you.addEventListener('click', function () {
        if(flag) {
            flag = false;
            if (num == ul.children.length - 1) {
                ul.style.left = 0;
                num = 0;
            }
            num++;
            animate(ul, -num * focusWidth,function() {
                flag = true;
            });
            // 8.点击右侧按钮，小圆点随着一起变化
            circle++;
            if (circle == focus_hd.children.length) {
                circle = 0;
            }
            // console.log(circle);
            // 清楚所有下圆点current类
            for (var i = 0; i < focus_hd.children.length; i++) {
                focus_hd.children[i].className = '';
            }
            focus_hd.children[circle].className = 'current';
        }
        
    })
    // 左侧轮播图按键
    zuo.addEventListener('click', function () {
        if(flag) {
            flag = false; // 节流阀
            if (num == 0) {
                num = ul.children.length - 1;  // 控制底部小圆点移动
                ul.style.left = -num * focusWidth + 'px'; // 左建点击 = 0 时 ul left值走 第4张图位置 即 ul length -1
                
            }
            
            num--; // 修改 num--
            animate(ul, -num * focusWidth,function() {
                flag = true;
            });
            // 9.点击右侧按钮，小圆点随着一起变化
            circle--; // 修改circle--
            if (circle < 0) {  // 底部小圆点 小于0 
                circle = focus_hd.children.length -1; // 修改底部小圆点为索引 -1 即回到倒数第3个索引小圆点
            }
            // console.log(circle);
            // 清楚所有下圆点current类
            for (var i = 0; i < focus_hd.children.length; i++) {
                focus_hd.children[i].className = '';
            }
            focus_hd.children[circle].className = 'current';
        }
    })
     // 10.自动播放轮播图
        var timer = setInterval(function() {
            you.click();
        },2000)
})
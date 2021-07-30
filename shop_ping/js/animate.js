
function animate(obj, target, callback) {
    // console.log(callback);
    // 防止点击多次出现bug
    clearInterval(obj.timer);
    // obj.timer 对象的方式命名函数，避免定时器名称重复
    // var step = Math.ceil((target - obj.offsetLeft) / 10) ;

    obj.timer = setInterval(function () {
        // 计算步长 必须卸载定时器内 否则会 有bug
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     callback();
            // }
            callback && callback();
        }
        // 每次把加1 这个步长改为一个慢慢变小的值 步长公司
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15);
}


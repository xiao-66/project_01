window.onload = function(){
    var tel = /^1[3|4|5|7|8]\d{9}$/; // 手机号正则表达式验证
    var qq = /^[1-9]\d{4,}$/;  // 验证qq号
    var nc = /^[\u4e00-\u9fa5]{2,8}$/; // 验证昵称
    var yzm = /^\d{6}$/;  // 验证码
    var paw = /^[a-zA-Z\d_-]{6,16}$/
    var telVul = document.querySelector('#tel');
    var qqVul = document.querySelector('#qq');
    var ncVul =document.querySelector('#nc');
    var yzmVul =document.querySelector('#yzm');
    var passwd = document.querySelector('#passwd');
    var conPasswd = document.querySelector('#conpasswd');
    verify(telVul,tel); // 手机号
    verify(qqVul, qq);  // qq号
    verify(ncVul, nc);  // 昵称
    verify(yzmVul, yzm); // 验证码
    verify(passwd, paw); // 密码
    pass();
    function verify(param,reg) {
        param.addEventListener('blur',function() {
            if(reg.test(this.value)) {
                this.nextElementSibling.className = 'reg_success';
                this.nextElementSibling.innerHTML = ' <i class="success_icon "></i> 恭喜您，验证输入正确';
            }else if (this.value == '') {
                this.nextElementSibling.className = 'reg_error';
                this.nextElementSibling.innerHTML = ' <i class="error_icon"></i> 您输入内容不能为空';
            } else {
                this.nextElementSibling.className = 'reg_error';
                this.nextElementSibling.innerHTML = ' <i class="error_icon"></i>  格式不正确，请从新输入';
            }
        })
    }
    function pass() {
        conPasswd.addEventListener('blur',function() {
            if(this.value == passwd.value) {
                this.nextElementSibling.className = 'reg_success';
                this.nextElementSibling.innerHTML = ' <i class="success_icon "></i> 恭喜您，验证输入正确';
            } else {
                this.nextElementSibling.className = 'reg_error';
                this.nextElementSibling.innerHTML = ' <i class="error_icon"></i>  两次输入密码不一致，请重新输入';
            
            }
                
        })
    }
}
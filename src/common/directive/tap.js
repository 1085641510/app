import Vue from 'vue'

var isMove = false;
var startTime = 0;
var timeStamp = 0;
var tapInfo = {};

function isPc() {
    var uaInfo = navigator.userAgent;
    var agents = ["Android", "iPhone", "Windows Phone", "iPad", "iPod"];
    var flag = true;
    for (var i = 0; i < agents.length; i++) {
        if (uaInfo.indexOf(agents[i]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

function clickHandle(e) {
    this.callback && this.callback.apply(this, e.target.params);
}

function touchstart(e) {
    timeStamp = e.timeStamp;
    startTime = Date.now();
    var touch = e.touches[0];
    tapInfo.x1 = touch.pageX;
    tapInfo.y1 = touch.pageY;
}

function touchmove(e) {

    if (!e.touches) return;

    var touch = e.touches[0];
    tapInfo.x2 = touch.pageX;
    tapInfo.y2 = touch.pageY;

    if ((tapInfo.x2 && Math.abs(tapInfo.x1 - tapInfo.x2) > 25) ||
        (tapInfo.y2 && Math.abs(tapInfo.y1 - tapInfo.y2) > 25)) {
        isMove = true;
    } else {
        isMove = false;
    }
}

function touchend(e) {

    if (!e.changedTouches) return;

    if (!isMove && (Date.now() - startTime) < 500) {
        /*调用 callback*/
        this.callback && this.callback.apply(this, e.target.params);
    }
    /*重置 参数*/
    isMove = false;
    startTime = 0;
}


Vue.directive('tap', {
    bind: function (dom, binding) {

        var callback = function () { };
        var value = binding.value;

        if (typeof value == 'function') {
            callback = value;
        } else if (typeof value.handler == 'function') {
            callback = value.handler;
        }
        dom.params = binding.value.params;

        if (isPc()) {
            dom.addEventListener('click', clickHandle.bind({
                value: value,
                callback: callback
            }), false);
        } else {
            dom.addEventListener('touchstart', touchstart.bind({
                value: value,
                callback: callback
            }), false);
            dom.addEventListener('touchmove', touchmove.bind({
                value: value,
                callback: callback
            }), false);
            dom.addEventListener('touchend', touchend.bind({
                value: value,
                callback: callback
            }), false);
        }

    },
    inserted: function () { },
    update: function (el, binding) {
        el.params = binding.value.params;

    },
    unbind: function (el) {

        el.removeEventListener('touchstart', touchstart);
        el.removeEventListener('touchmove', touchmove);
        el.removeEventListener('touchend', touchend);
        el.removeEventListener('click', clickHandle);
    }
});

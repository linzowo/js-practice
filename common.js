/*
 * @Author: linzwo
 * @Date: 2019-03-29 10:27:21
 * @LastEditors: linzwo
 * @LastEditTime: 2019-06-21 18:09:54
 * @Description: 个人的常用函数封装区
 */
// ==========================================

var my$ = function(id) {
  // 通过id获取元素
  return document.getElementById(id);
};
// ==========================================

function getNewNum(date) {
  // 获取一个指定格式的时间串
  // 如果获取的月日小时分钟秒小于10就在前面加上一个0
  return date < 10 ? "0" + date : date;
}
function getDate(dt) {
  // 获取年
  var year = dt.getFullYear();
  // 获取月
  var month = getNewNum(dt.getMonth());
  // 获取日
  var day = getNewNum(dt.getDay());
  // 获取小时
  var hour = getNewNum(dt.getHours());
  // 获取分钟
  var minute = getNewNum(dt.getMinutes());
  // 获取秒
  var second = getNewNum(dt.getSeconds());
  return (
    year +
    "年" +
    month +
    "月" +
    day +
    "日 " +
    hour +
    ":" +
    minute +
    ":" +
    second
  );
}

// ==========================================

function setInnerText(element, text) {
  // <!-- 设置任意标签中的任意文本内容 -->
  if (typeof element.innerText == "undefined") {
    element.textContent = text;
  } else {
    element.innerText = text;
  }
}

// ==========================================

function getInnerText(element) {
  // <!-- 获取在意标签中间的文本内容 -->
  if (typeof element.innerText == "undefined") {
    return element.textContent;
  } else {
    return element.innerText;
  }
}

// <!-- 第一个子节点和第一个子元素的获取代码在ie8中可能不支持 -->
// 其余几个代码同理，主要针对部分代码在ie8中可能不支持的情况

// ==========================================

function getFirstElementChild(element) {
  // 代码1 获取任意一个父级元素的第一个子元素
  if (element.firstElementChild) {
    return element.firstElementChild;
  } else {
    // 如果其他浏览器使用firstChild获取到的不是元素，仍然是节点的情况下，我们就需要判断其获取到的是标签还是其他类型的节点
    var node = element.firstChild; // 将获取到的第一个内容存储起来
    while (node && node.nodeType != 1) {
      // 如果获取到的内容不是标签就检查下一个内容
      node = node.nextSibling;
    } // end while
    return node;
  }
}
// ==========================================

function getLastElementChild(element) {
  // 代码2 获取任意一个父级元素的最后一个子元素
  if (element.lastElementChild) {
    return element.lastElementChild;
  } else {
    var node = element.lastChild;
    while (node && node.nodeType != 1) {
      node = node.previousSibling;
    } // end while
    return node;
  }
}
// ==========================================

function getPreviousElement(element) {
  // 代码3 获取任意一个元素的前一个兄弟元素
  if (element.previousElementSibling) {
    return element.previousElementSibling;
  } else {
    var node = element.previousSibling;
    while (node && node.nodeType != 1) {
      node = node.previousSibling;
    } // end while
    return node;
  }
}
// ==========================================

function getNextElement(element) {
  // 代码4 获取任意一个元素的后一个兄弟元素
  if (element.nextElementSibling) {
    return element.nextElementSibling;
  } else {
    var node = element.nextSibling;
    while (node && node.nodeType != 1) {
      node = node.nextSibling;
    } // end while
    return node;
  }
}
// ==========================================

function getBrotherElementAll(element) {
  //  代码5 获取任意一个元素的所有兄弟元素
  var broElementList = [];
  var preEle = getPreviousElement(element);
  var nextEle = getNextElement(element);
  while (preEle || nextEle) {
    if (preEle) {
      broElementList.push(preEle);
      preEle = getPreviousElement(preEle);
    } else if (nextEle) {
      broElementList.push(nextEle);
      nextEle = getNextElement(nextEle);
    } // end if
  } // end while
  return broElementList;
}

// ==========================================

function addEventListener(element, type, fn) {
  // 为任意元素绑定任意事件，元素，事件类型，事件处理函数
  if (element.addEventListener) {
    // chrome,firefox等
    element.addEventListener(type, fn, false);
  } else if (element.attachEvent) {
    // ie8
    element.attachEvent("on" + type, fn);
  } else {
    // 其他浏览器
    element["on" + type] = fn;
  } // end if
}

// ==========================================
function removeEventListener(element, type, fnName) {
  // 为任意元素解绑任意事件s
  if (element.removeEventListener) {
    // chrome,firefox等
    element.removeEventListener(type, fnName, false);
  } else if (element.detachEvent) {
    // ie8
    element.detachEvent("on" + type, fnName);
  } else {
    // 其他浏览器
    element["on" + type] = null;
  } // end if
}
// =================================================
function getStyle(element, attr) {
  //封装:获取任意一个元素的任意一个样式属性值
  // 判断浏览器是否支持该方法,支持则使用其
  return window.getComputedStyle
    ? window.getComputedStyle(element, null)[attr]
    : element.currentStyle[attr];
}

// =====================================
function getScroll() {
  // 封装获取页面向上卷曲值的函数(top/left)
  return {
    top:
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0,
    left:
      window.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft ||
      0
  };
}

// ======================================
function getStyle(element, attr) {
  //封装:获取任意一个元素的任意一个样式属性值
  // 判断浏览器是否支持该方法,支持则使用其
  return window.getComputedStyle
    ? window.getComputedStyle(element, null)[attr]
    : element.currentStyle[attr];
}

// ===========================

function animate(element, json, fn) {
  //缓动动画，可以修改一个元素的多个属性值，并且拥有回调函数,处理透明度和层级的内容
  clearInterval(element.timeId);
  element.timeId = setInterval(function() {
    var flag = true;
    for (var attr in json) {
      if (attr == "opacity") {
        var target = json[attr] * 100;
        // 获取当期div所在位置
        var current = getStyle(element, attr) * 100;
        // 规定一个移动步数
        var step = (target - current) / 10;
        // 因为会存在浮点数的问题，所以必须要判断，step的正负然后取整
        step = step < 0 ? Math.floor(step) : Math.ceil(step);
        // 将当前值替换到移动后位置
        current += step;
        // 修改其left值,前进一步
        element.style[attr] = current / 100;
      } else if (attr == "zIndex") {
        element.style[attr] = json[attr];
      } else {
        var target = json[attr];
        // 获取当期div所在位置
        var current = parseInt(getStyle(element, attr));
        // 规定一个移动步数
        var step = (target - current) / 10;
        // 因为会存在浮点数的问题，所以必须要判断，step的正负然后取整
        step = step < 0 ? Math.floor(step) : Math.ceil(step);
        // 将当前值替换到移动后位置
        current += step;
        // 修改其left值,前进一步
        element.style[attr] = current + "px";
      }

      // 如果其中有一个没有到达目标值
      if (current != target) {
        flag = false;
      }
    }
    // 判断是否所有的都达到了达到目标值
    if (flag) {
      clearInterval(element.timeId);
      // 当所有属性到达指定位置之后才能调用回调函数
      if (fn) {
        fn();
      }
    }

    // 测试代码
    // console.log("目标："+target+"===当前值："+current+"===step："+step);
  }, 20);
}

// ===========================================

// 将document.cookie转换为一个数组或键值对
function getCookie(num) {
  /**
   * @description: 获取第n个cookie的键和值组成的数组
   * @param {int} num
   * @return: 一个数组，0=>cookie_key,1=>cookie_value|超出范围就返回false
   */

  var cookieArr = document.cookie.split(";");
  if (num >= cookieArr.length || num < 0) {
    return false;
  }
  var resultArr = cookieArr[num].split("=");
  return resultArr;
}

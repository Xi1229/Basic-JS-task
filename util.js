

function cloneObject(src) {
    let src1 = {};
    if (src.constructor === Object) {
      if (src.constructor !== Function && src.constructor !== RegExp && src.constructor !== Error) {
          return src1 = {...src};
      }
    }
}
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);
console.log(tarObj.b.b1[0]);



function uniqArray(arr) {
    return arr.filter(function(item, index, arr) {
        return arr.indexOf(item, 0) === index;
    });
}
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b);

function trim(str) {
    let result = "";
    if (str == null) return "";
    while (str[0] === " " || str.charCodeAt(0) === 12288) {
        str = str.substr(1, str.length);
    }
    while (str[str.length - 1] === " " || str.charCodeAt(str.length - 1) === 12288) {
        str = str.substr(0, str.length -1);
    }
    result = str;
    return result;
}

var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'



function each(arr, fn) {
  for(index in arr){
    fn(arr[index],index);
  }
}
var arr = ['java', 'c', 'php', 'html'];
function output(item) {
    console.log(item)
}
each(arr, output); 
var arr = ['java', 'c', 'php', 'html'];
function output(item, index) {
    console.log(index + ': ' + item)
}
each(arr, output);

function getObjectLength(obj) {
    let newArr = [];
    newArr = Object.keys(obj);
    return newArr.length;
}
var obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj));

function isEmail(emailStr) {
    let reg = /^(\w)(\w|\-)+@(\w+)\.(\w+)$/;
    return reg.test(emailStr);
}

function isMobilePhone(phone) {
    let reg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
    return reg.test(phone);
}

// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
  var value = element.className;
     element.className = value + " " + newClassName;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    var value = element.className;
    var str = value.replace(oldClassName, "");
    element.className = str;
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    if(element.parentNode === siblingNode.parentNode) {
        return true;
    } return false;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element) {
    return {
        x: element.offsetLeft,
        y: element.offsetTop
    };
}

// 实现一个简单的Query
function $(selector) {
    if (selector.indexOf("#") === 0) {
        if (selector.indexOf(" ") === -1) {
        var selector = selector.replace("#", "");
        return document.getElementById(selector);
        }
    } else if (selector.indexOf(" ") > 0 && selector.indexOf(".") > 0) {
       var x = selector.slice(1, selector.indexOf(" "));
       var y = selector.slice(selector.indexOf(".")+1);
       return document.getElementById(x).getElementsByClassName(y)[0];
    }else if (selector.indexOf(".") === 0 && selector.indexOf(" ") === -1) {
      var selector = selector.slice(1);
      return document.getElementsByClassName(selector)[0];
    } else if (/^\[[A-Za-z0-9_-\S]+\]$/.test(selector)) {
       selector = selector.slice(1, selector.length-1);
       var eles = document.getElementsByTagName("*");
       selector = selector.splt("=");
       var att = selector[0];
       var value = selector[1];
       var arr = [];
       if (value) {
          for (let i = 0; i < eles.length; i++) {
             if (eles[i].getAttribute(att) == value) {
                arr.push(eles[i]);
              }
            }
        } else {
             for (let i = 0; i < eles.length; i++) {
                 if (eles[i].getAttribute(att)) {
                     arr.push(eles[i]);
                }
            }
        }
         return arr;
    } else if (document.getElementsByTagName(selector)) {
            var j = selector.toUpperCase();
            return document.getElementsByTagName(j)[0];
        }
    }
    
$("#adom");
console.log($("p"));

// 给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element, event, listener) {
    if (element.addEventListener) {
        element.addEventListener(event, listener, false);
    }
}
// 实现对click事件的绑定
function addClickEvent(element, listener) {
    addEvent(element, "click", listener);
}
// 实现对于按Enter键时的事件绑定
function addEnterEvent(element,listener) {
    addEvent(element, "keydown", function(e) {
        if(e.keyCode === 13) {
            listener();
        }
    });
}

// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element, event, listener) {
    if (element.removeEventListener) {
        element.removeEventListener(event, listener);
    }
}

//封装函数
$.on = function (selector, event, listener) {
    addEvent($(selector), event, listener);
};
$.un = function (selector, event, listener) {
    removeEvent($(selector), event, listener);
};
$.click = function (selector, listener) {
    addClickEvent($(selector), listener);
};
$.enter = function (selector, listener) {
    addEnterEvent($(selector), listener);
};

//事件代理
function delegateEvent(element, tag, event, listener) {
    if (element.addEventListener) {
        element.addEventlistener (event, function(e) {
            var target = e.target;
            if (target.nodeName.toLowerCase() === tag) {
                listener(target);
            }
        })
    }
}

//BOM
//判断是否为IE浏览器，返回-1或者版本号
function isIE(){
    var userAgent = navigator.userAgent;
    var isIE1 = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MISE") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE1;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE1) {
        var reIE = newRegExp("MISE (\\d+\\.\\d+;");
        reIE.test(userAgent);
        var IEVersion = parseFloat(RegExp.$1);
        if (IEVersion == 7) {
            return 7;
        } else if (IEVersion == 8) {
            return 8;
        } else if (IEVersion == 9) {
            return 9;
        } else if (IEVersion == 10) {
            return 10;
        } else {
            return 6;
        }
    } else if (isEdge) {
        return 'edge';
    } else if (isIE11) {
        return 11;
    } else {
        return -1;
    }
}

// 设置cookie
function setCookie(cookieName, cookieValue, expiredays) {
    var d = new Date();
    d.setTime(d.getTime() + (expiredays*24*60*60*1000));
    var expiredays = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expiredays + ";path=/";
}

//获取cookie值
function getCookie(cookieName) {
    var name  = cookieName +"=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        var c  = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function ajax(url, options) {
    var defaults = {
        type: 'get',
        data: {},
        header: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        onsuccess: function() {},
        onfail: function() {}
    }
    Object.assign(defaults, options);
    var xhr = new XMLHttpRequest();
    var params = '';
    for (let attr in defaults.data) {
        params += attr + '=' + defaults.data[attr] + '&';
    }
    params = params.substring(0, params.length - 1);

    if (defaults.type =='get') {
        url = url + '?' + params;
    }

    xhr.open(defaults.type, url);

    if (defaults.type == 'post') {
        var contentType = defaults.header['Content-Type'];
        xhr.setRequestHeader('Content-Type', contentType);
        if (contentType == 'application/json') {
            xhr.send(JSON.stringify(defaults.data));
        } else {
            xhr.send(params);
        }
    }
}

//整数转罗马数字
function convertToRoman(num) {
    if (num >3999 || num < 0) {
        console.log ("超出运算范围！");
    }
    let M = ["", "M", "MM", "MMM"];
    let C = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    let X = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let I = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    return M[parseInt(num/1000)] + C[parseInt((num%1000)/100)] + X[parseInt((num%100)/10)] + I[parseInt(num%10)];
   }
   console.log(convertToRoman(3678))

//凯瑟密码
function rot13(str) {
    let newStr = [];
    for (let i = 0; i < str.length; i++) {
      if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 90) {
        newStr.push(str[i]);
      } else if (str.charCodeAt(i) <= 77) {
        newStr.push(String.fromCharCode(str.charCodeAt(i) + 13));
      } else {
        newStr.push(String.fromCharCode(str.charCodeAt(i)-13));
      }
    }
    return newStr.join("");
  }
  
  rot13("SERR PBQR PNZC");
console.log(rot13("SERR PBQR PNZC"))

//电话号码检查器
function telephoneCheck(str) {
    let testRegex=/^(1?)[\s\-]?(\(\d{3})|\d{3}\)[\s\-]?\d{3}[\s\-]?\d{4}$/
    return testRegex.test(str);
}
console.log(telephoneCheck("123-123-1234"))

//计算找零
function checkCashRegister(price, cash, cid) {
    price *= 100;
    cash *= 100;
    var n = cash - price;
    var changeLeft = n;
    let result = {};
    var v = [];
    function getCidTotal(cid) {
      let total = 0;
      for (let i=0; i<cid.length; i++) {
        total += cid[i][1];
      }
      return total*100;  
    }
    let cidTotal = getCidTotal(cid); 
    if (n > cidTotal) {
      return result = {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (n === cidTotal) {
      return result = {status: "CLOSED", change: [...cid]};
    }
    var coinValueObj = {
      "PENNY": 1,
      "NICKEL": 5,
      "DIME": 10,
      "QUARTER": 25,
      "ONE": 100,
      "FIVE": 500,
      "TEN": 1000,
      "TWENTY": 2000,
      "ONE HUNDRED": 10000
    };
    for (let i = cid.length-1; i >=0; i--) {
      let coinName = cid[i][0];
      let coinTotal = cid[i][1]*100;
      let coinValue = coinValueObj[coinName];
      let coinAmount = coinTotal/coinValue;
      let toReturn = 0;
      while (changeLeft >= coinValue && coinAmount > 0) {
        changeLeft -= coinValue;
        coinAmount--;
        toReturn++;
      }
      if(toReturn > 0) {
        v.push([coinName, toReturn*coinValue/100]);
        result = {status: "OPEN", change: [...v]}
      }
    }
    if(getCidTotal(v)!==n) {
      return result = {status: "INSUFFICIENT_FUNDS", change: []};
    } 
    return result = {status: "OPEN", change: [...v]}
    
  }
  
let ce1 = checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
console.log(ce1);
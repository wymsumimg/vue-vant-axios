function formatNumber(n) {
    const str = n.toString()
    return str[1] ? str : `0${str}`
  }
  /**
   * author:langwenqi
   * date: 2018/5/20
   * describe:格式化时间
   * params:{
    *
    * }
   **/
  export function formatTimeShow(date) {
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
  
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    const t1 = [year, month, day].map(formatNumber).join('/')
    const t2 = [hour, minute, second].map(formatNumber).join(':')
  
    return `${t1}`
  }
  /**
   * author:langwenqi
   * date: 2018/5/20
   * describe:验证手机号
   * params:{
    *
    * }
   **/
  export function checkPhone(mobile) {
    let reg = /(^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$)|(^((\(\d{3}\))|(\d{3}\-))?(1[3456789]\d{9})$)/;
    return reg.test(mobile)
  };
  /**
   * author:langwenqi
   * date: 2018/5/20
   * describe:验证手机号
   * params:{
    *
    * }
   **/
  export function checkMobile(mobile) {
    let reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return reg.test(mobile)
  };
  
  
  /**
   ** 乘法函数，用来得到精确的乘法结果
   ** 说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
   ** 调用：accMul(arg1,arg2)
   ** 返回值：arg1乘以 arg2的精确结果
   **/
  export function accMul(arg1 = 0, arg2 = 0) {
    var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
    try {
      m += s1.split(".")[1].length;
    }
    catch (e) {
    }
    try {
      m += s2.split(".")[1].length;
    }
    catch (e) {
    }
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  }
  
  
  /**
   ** 加法函数，用来得到精确的加法结果
   ** 说明：javascript的加法结果会有误差，在两个浮点数相加的时候会比较明显。这个函数返回较为精确的加法结果。
   ** 调用：accAdd(arg1,arg2)
   ** 返回值：arg1加上arg2的精确结果
   **/
  export function accAdd(arg1 = 0, arg2 = 0) {
    var r1, r2, m, c;
    try {
      r1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
      r1 = 0;
    }
    try {
      r2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
      r2 = 0;
    }
    c = Math.abs(r1 - r2);
    m = Math.pow(10, Math.max(r1, r2));
    if (c > 0) {
      var cm = Math.pow(10, c);
      if (r1 > r2) {
        arg1 = Number(arg1.toString().replace(".", ""));
        arg2 = Number(arg2.toString().replace(".", "")) * cm;
      } else {
        arg1 = Number(arg1.toString().replace(".", "")) * cm;
        arg2 = Number(arg2.toString().replace(".", ""));
      }
    } else {
      arg1 = Number(arg1.toString().replace(".", ""));
      arg2 = Number(arg2.toString().replace(".", ""));
    }
    return (arg1 + arg2) / m;
  }
  
  
  /** 
   ** 除法函数，用来得到精确的除法结果
   ** 说明：javascript的除法结果会有误差，在两个浮点数相除的时候会比较明显。这个函数返回较为精确的除法结果。
   ** 调用：accDiv(arg1,arg2)
   ** 返回值：arg1除以arg2的精确结果
   **/
  export function accDiv(arg1 = 0, arg2 = 1) {
    var t1 = 0, t2 = 0, r1, r2;
    try {
      t1 = arg1.toString().split(".")[1].length;
    }
    catch (e) {
    }
    try {
      t2 = arg2.toString().split(".")[1].length;
    }
    catch (e) {
    }
    r1 = Number(arg1.toString().replace(".", ""));
    r2 = Number(arg2.toString().replace(".", ""));
    return (r1 / r2) * Math.pow(10, t2 - t1);
  }
  /**
   * author:langwenqi
   * date: 2018/5/20
   * describe:判断数据类型
   * params:{
    *  obj：数据
    * }
   **/
  export function getType(obj) {
    let toString = Object.prototype.toString;
    let map = {
      '[object Boolean]': 'boolean',
      '[object Number]': 'number',
      '[object String]': 'string',
      '[object Function]': 'function',
      '[object Array]': 'array',
      '[object Date]': 'date',
      '[object RegExp]': 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]': 'null',
      '[object Object]': 'object'
    };
    return map[toString.call(obj)];
  };
  /**
   * author:langwenqi
   * date: 2018/5/20
   * describe:深拷贝
   * params:{
    *  data：数据
    * }
   **/
  export function deepClone(data) {
    let type = getType(data);
    let obj;
    if (type === 'array') {
      obj = [];
    } else if (type === 'object') {
      obj = {};
    } else {
      return data;
    }
    if (type === 'array') {
      for (let i = 0, len = data.length; i < len; i++) {
        obj.push(deepClone(data[i]));
      }
    } else if (type === 'object') {
      for (let key in data) {
        obj[key] = deepClone(data[key]);
      }
    }
    return obj;
  };
  /**
   * author:langwenqi
   * date: 2018/5/20
   * describe:表情转换为8进制
   * params:{
    *  str：字符串
    * }
   **/
  export function utf16toEntities(str) {
    if (getType(str) !== 'string') {
      return str
    }
    var patt = /[\ud800-\udbff][\udc00-\udfff]/g;
    // 检测utf16字符正则
    str = str.replace(patt, function (char) {
      var H, L, code;
      if (char.length === 2) {
        H = char.charCodeAt(0);
        // 取出高位
        L = char.charCodeAt(1);
        // 取出低位
        code = (H - 0xD800) * 0x400 + 0x10000 + L - 0xDC00;
        // 转换算法
        return "&#" + code + ";";
      } else {
        return char;
      }
    });
    return str;
  };
  /**
   * author:langwenqi
   * date: 2018/5/20
   * describe:8进制转换为表情
   * params:{
    *  str：字符串
    * }
   **/
  export function entitiestoUtf16(str) {
    if (getType(str) !== 'string') {
      return str
    }
    // 检测出形如&#12345;形式的字符串
    var strObj = utf16toEntities(str);
    var patt = /&#\d+;/g;
    var H, L, code;
    var arr = strObj.match(patt) || [];
    for (var i = 0; i < arr.length; i++) {
      code = arr[i];
      code = code.replace('&#', '').replace(';', '');
      // 高位
      H = Math.floor((code - 0x10000) / 0x400) + 0xD800;
      // 低位
      L = (code - 0x10000) % 0x400 + 0xDC00;
      code = "&#" + code + ";";
      var s = String.fromCharCode(H, L);
      strObj = strObj.replace(code, s);
    }
    return strObj;
  };
  export function formatTime(time, option) {
    time = +time * 1000
    const d = new Date(time)
    const now = Date.now()
  
    const diff = (now - d) / 1000
  
    if (diff < 30) {
      return '刚刚'
    } else if (diff < 3600) { // less 1 hour
      return Math.ceil(diff / 60) + '分钟前'
    } else if (diff < 3600 * 24) {
      return Math.ceil(diff / 3600) + '小时前'
    } else if (diff < 3600 * 24 * 2) {
      return '1天前'
    }
    if (option) {
      return parseTime(time, option)
    } else {
      return d.getMonth() + 1 + '月' + d.getDate() + '日' + d.getHours() + '时' + d.getMinutes() + '分'
    }
  }
  export function handleKey(file) {
    if (!file) {
      return {}
    }
    if (file.type.split('/')[0] == 'image') {
      return makeFileObj(1, file, file.type.split('/')[1]);
    } else if (file.type.split('/')[0] == 'video') {
      return makeFileObj(3, file, file.type.split('/')[1]);
    } else if (file.type.split('/')[1] == 'msword') {
      return makeFileObj(5, file, 'doc');
    } else if (file.type.split('/')[1] == 'vnd.openxmlformats-officedocument.wordprocessingml.document') {
      return makeFileObj(5, file, 'docx');
    } else if (file.type.split('/')[1] == 'vnd.ms-excel') {
      return makeFileObj(7, file, 'xls');
    } else if (file.type.split('/')[1] == 'vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
      return makeFileObj(7, file, 'xlsx');
    } else if (file.type.split('/')[1] == 'vnd.ms-powerpoint') {
      return makeFileObj(8, file, 'ppt');
    } else if (file.type.split('/')[1] == 'vnd.openxmlformats-officedocument.presentationml.presentation') {
      return makeFileObj(8, file, 'pptx');
    } else if (file.type.split('/')[1] == 'pdf') {
      return makeFileObj(6, file, 'pdf');
    } else if (file.type.split('/')[1] == 'plain') {
      return makeFileObj(4, file, 'txt')
    } else if (file.type.split('/')[0] == 'audio') {
      return makeFileObj(9, file, file.type.split('/')[1]);
    } else {
      return makeFileObj(127, file, file.type.split('/')[1]);
    }
  };
  
  export function makeFileObj(type, file, endType) {
    let content = {};
    content.type = type;
    content.fileName = file.name;
    content.endType = endType;
    return content;
  };
  export function getEditHtml(str) {
    if (!str) {
      return;
    }
    return str.replace(/<img/g, "<img style=\'width:100%\'")
  }
  
  export function checkExpression(str) {
    let emoji = /[\ud800-\udbff][\udc00-\udfff]/;
    let reg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
    // console.log(str);
    if(str) {
      str = str.toString()
    }
    if ((!str) || emoji.test(str) || str.trim() === '') {
      return false;
    }
    return true;
  }
  
  export function toSendFormat(str) {
    if (!str) {
      return '';
    }
    let newStr = str.replace('<', '&lt;').replace('>', '&gt;').replace(/\n|\r\n/g, "<br>").replace(/[ ]/g, "<span>&nbsp;</span>");
    return newStr;
  };
  
  export function toGetFormat(str) {
    if (!str) {
      return '';
    }
    let newStr = entitiestoUtf16(str).replace(/<br>/ig, "\n").replace(/&nbsp;/g, " ").replace('&lt;', '<').replace('&gt;', '>');
    return newStr;
  };
  
  export function toTree(data, parentId, ifCalc = false) {
    var tree = [];
    var temp = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].parentId == parentId) {
        var obj = data[i];
        temp = toTree(data, data[i].id, ifCalc);
        if (temp.length > 0) {
          obj.children = temp;
          if (ifCalc) {
            let customerCount = 0;
            let memberCount = 0;
            for (let i = 0; i < temp.length; i++) {
              const ele = temp[i];
              customerCount += ele.customerCount
              memberCount += ele.memberCount
            }
            obj.customerCount += customerCount
            obj.memberCount += memberCount
          }
        }else {
          obj.children = []
        }
        tree.push(obj);
      }
    }
    return tree;
  }
  
  // 换肤加class函数
  export function toggleClass(element, className) {
    console.log(element,'element')
    console.log(className,'className')
    if (!element || !className) {
      return;
    }
    element.className = className;
  }
  
  
  
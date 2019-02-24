// 获取一个指定格式的时间串
function getNewNum(date){
    // 如果获取的月日小时分钟秒小于10就在前面加上一个0
    return date<10?"0"+date:date;
}
function getDate(dt){
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
    return year+"年"+month+"月"+day+"日 "+hour+":"+minute+":"+second;
}
var isPalindrome = function(s) {
    if (s === "") {
        return true
    }
    // 将输入转换为只有需要内容的文本
    // s.replace(/[^a-zA-Z\d]+/g," ");
    s.replace(/,/g," ");
    console.log(s.replace(/,/g,""));
    
};
isPalindrome("A man, a plan, a canal: Panama");
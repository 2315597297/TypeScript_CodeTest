var ns = 100;
var ss = "sss";
var bs = true;
console.log(ns + ss + bs);
var abc = { name: 'st', age: 30, lang: [
        { 'l_name': 'c++' },
        { '语言名字': 'python' }
    ] };
abc.lang[0].语言名字 = 's';
console.log(abc);
//  数组的使用，及类型定义
var myarr1 = ["abc", 1122, true];
//  这样不可以
// let myarr2: (string & number)[] = ["abc",1122]
//  使用对象类型的数组，可以接受所有类型
var myarr3 = ["abc", 1122, true, {}, []];

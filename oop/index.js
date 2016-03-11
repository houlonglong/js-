/**
 * Created by houlonglong on 16/3/11.
 */

function  a(){
        this.hehe = function(){
            alert("呵呵")
        }
}
a.prototype.sayHello = function(){
   alert('原型链')
}


var a =new a();

//静态的方法

a.sayhi = function(){
    console.log('静态的方法');
}
function b(){

};
b.prototype = a;
var b = new b()
a.sayHello();
a.sayhi();
b.hehe();
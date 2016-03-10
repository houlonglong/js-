/**
 * js类的对象继承
 */

//封装父类
function People(name){
        this._name = name;
}
People.prototype.say = function(){
    alert("说话" + "-----" +this._name)
}
//封装子类
function Student(name){
    this._name = name;
}
//子类继承父类
Student.prototype = new People();
//把父类通用方法拿出来
var superSsay = Student.prototype.say;

//调用通用方法say
Student.prototype.say = function(){
    superSsay.call(this)
    alert("stu-hello"+"-----" +this._name)
}
//实例化成对像
var  s = new Student("龙龙");
//对像调用
s.say()

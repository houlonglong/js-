/**
 * js类的对象封装
 */
(function(){
    var n = '2222';
    function People(name){
        this._name = name;
    }
     People.prototype.say = function(){
        alert("说话" + "-----" +this._name + n)
    }
    window.People = People;
}());

(function(){
    function Student(name){
        this._name = name;
    }
    Student.prototype = new People();

    var superSsay = Student.prototype.say;

    Student.prototype.say = function(){
        superSsay.call(this)
        alert("stu-hello"+"-----" +this._name + n)
    }
    window.Student = Student;
}());

var  s = new Student("龙龙");
s.say()

/**
 * Credit: Jubayer Al Farabi (Software Engineer @selise.ch)
 *
 */



"use strict"; //http://www.w3schools.com/js/js_strict.asp
//x=1; //error //x = x || [] ;

/********************Object****************************/

//var obj = ; //undefined,Number,Boolean,String
//var obj2 = undefined; //[],'',1,true,null,
//console.log('obj:', obj);
//console.log('obj2:',obj2);
//console.log('type of obj:',typeof obj); //typeof operator returns
//console.log('type of obj2:',typeof obj2);
//console.log('instance of obj:',obj instanceof Object);// is obj's constructor using Object's constructor function?
//console.log('instance of obj2:',obj2 instanceof Object);// is obj's constructor using Object's constructor function?
//console.log('constructor of obj',obj.constructor);// All objects have built-in constructor.
//console.log('constructor of obj2',obj2.constructor); //read only property for primitive types.
//Returns a reference to the Object function that created the instance's prototype.

////Adding property to object======================================================================
//var expression = 'address';
//obj = {};
//obj.firstName= 'firstname';
//obj['lastName'] = 'lastname';
//obj[expression] = 'this is address';
//console.log(obj);
//
////loop on object
//for(var key in obj){
//    console.log(key);
//    console.log(obj[key]);
//}

//delete property ////VERY BAD PRACTICE!!!! make the property undefined instead
//delete obj.address;
//obj.address = undefined;
//delete obj['address'];
//delete obj[expression];
//console.log(obj);
//========================================================================================

// var value1 = 10, value2 = 20, object1 = {key:10} , object2 = {key:20};

// value1 = value2;
// console.log(value1);
// value1 = 30;
// console.log(value2);

// object1 = object2;
// console.log(object1.key);
// object1.key = 30;
// console.log(object2.key);
// object2 = {key:10};
// console.log(object1.key);

//

// var names = ["Jeremy", "John", "Adam", "Jeffrey", 'Jack'];
// names = names.filter(function (name) {
//     return name !== 'John'
// }).map(function (name) {
//     return {
//         name: name
//     }
// }).sort(function (obj1, obj2) {
//     return obj1.name > obj2.name
// });
// console.log(names);
// var justAnArray = []
// justAnArray[100] = 100;
// console.log(justAnArray);

//Array :: http://www.w3schools.com/jsref/jsref_obj_array.asp
//String :: http://www.w3schools.com/jsref/jsref_obj_string.asp
//RegEx :: http://www.w3schools.com/js/js_regexp.asp

/***************************Functional Programming*****************/
//===========================================================================================
//declaration
function function1(a, b) {
    return a + b;
}
var function2 = function (a, b) {
    return a + b;
}
var function3 = new Function('a', 'b', 'return a+b;'); //Function(arguments,code)
console.log(function1(1, 2));
console.log(function2(1, 2));
console.log(function3(1, 2));

//passing arguments===========================================================================
var letsCheck = {
    name: 'isReference'
}; //for objects it's passing the reference
function passingObject(obj) {
    obj.name = 'isReferenceTrue';
    obj = {
        name: 'differentReference'
    };
}
passingObject(letsCheck);
console.log(letsCheck.name);


function args(ar) {
    console.log(arguments); //passed by value
}
args(1, 2, 3, 4, 5);


var fn1 = function (getFn) {
    if (getFn) console.log(getFn(2));
}

var addTwo = function (value) {
    return value + 2;
};
fn1(addTwo);

/*****************************************Closure*******************************************/
//=============================================================================================
//Closure Begins ////////Don't panic it's simple
var closure = function (fn1) {
    var count = 0;

    fn1(function (value) {
        count += value;
        return count;
    });
    console.log(count);
};
closure(fn1);


var closure2 = function (value) {
    var counter = 0;
    var prefix = '. ' + value + ' ';
    return function (name) {
        counter++;
        return counter + prefix + name + '!';
    };
};

var greet = closure2('Hello');
console.log(greet('World'));
console.log(greet('Everyone'));

var greet2 = closure2('Isn\'t it easy');
console.log(greet2('Guys?'));
console.log(greet2('Amazing?'));


//Factory Constructor Function (If you hate the word new)=============================================================================

var factoryCounter = function (initVal) {
    var counter = initVal ? initVal : 0;

    return {
        incCounter: function () {
            counter++;
            return counter;
        },
        decCounter: function () {
            counter--;
            return counter;
        },
        getCounter: function () {
            return counter;
        }
    }
};



var counter1 = factoryCounter();
var counter2 = factoryCounter(10);

console.log('Counter 1', counter1.incCounter());
console.log('Counter 2', counter2.incCounter());

var mainBoard = function (Counter) {
    console.log('Main board');
    console.log(Counter.incCounter());
    console.log(Counter.incCounter());
}
var mainBoard2 = function (Counter) {
    console.log('Main board2');
    console.log(Counter.decCounter());
    console.log(Counter.decCounter());
}
mainBoard(counter1);
mainBoard2(counter1);

//Self-invoking functions==========================================================================
console.log(window.function3(1, 2)); //time to watch out

(function selfInvoked(a, b) {
    console.log(a + b);
}(1, 2));
console.log(selfInvoked()); //Reference error! no longer in window

var module = (function () {
    var publicObject = {},
        privateVariable = 1;

    function privateMethod() {
        return privateVariable + 1;
    }

    publicObject.moduleProperty = 1;
    publicObject.moduleMethod = function () {
        return privateMethod();
    };

    return publicObject;
}());

console.log(module.moduleProperty);

/*********************************OOP in JavaScript (kind of)**************************************/

function Tree(name) {
    this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);

//Introducing This  ==============================================================================
//The value of this, when used in a function, is the object that "owns" the function. The value of this, when used in an object, is the object itself. The this keyword in an object constructor does not have a value.

//var ob = {
//    prop: 37,
//    f: function() {
//        return this.prop;
//    }
//};
//console.log(ob.f()); // logs 37

//var ob1 = {prop: 37};
//function independent() {
//    return this.prop;
//}
////independent();
//ob1.f = independent;
////console.log(independent()); //Error: this is undefined
//console.log(ob1.f()); // logs 37

//Constructor function (this with new) ===========================================================================
//var service = function (val){
//    var privateVal = 10;
//    this.someName = val?val:'name';
//    this.getPrivateVal = function(){
//        return privateVal;
//    }
//};
//var refService = new service(),ref2Service = new service('new name');
//console.log(refService.someName);
//refService.someName = 'changed';
//console.log(refService.someName);
//console.log(ref2Service.someName);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

//Prototype Inheritance ===========================================================================
//We use it when we would like an object to inherit a method after it has been defined.
//var MyBluePrint = function() {
//
//    this.someFunction = function someFunction() {
//        console.log( 'some function' );
//    };
//
//    this.someOtherFunction = function someOtherFunction() {
//        console.log( 'some other function' );
//    };
//
//    this.showMyName = function showMyName() {
//        console.log( this.name );
//    };
//
//};
//
//function MyObject() {
//    this.name = 'testing';
//}
////
//MyObject.prototype = new MyBluePrint();
//MyObject.prototype.sayHii = function () {
//    this.someFunction();
//};
////// example usage
//var testObject = new MyObject();
//testObject.someFunction(); // "some function"
//testObject.someOtherFunction(); // "some other function"
//testObject.showMyName(); // "testing"

//function add(c, d){
//    return this.a + this.b + c + d;
//}
//
//var o = {a:1, b:3};
//
//// The first parameter is the object to use as
//// 'this', subsequent parameters are passed as
//// arguments in the function call
//add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16
//
//// The first parameter is the object to use as
//// 'this', the second is an array whose
//// members are used as the arguments in the function call
//add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34


//Object fundamentals ========================================================================================
////Object fundamental properties //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
//Object.defineProperty(obj,'aproperty', {
//    writable: true, //read-only or writable
//    enumerable: true, //whether you want to see this in loop, sort etc
//    configurable: true, //object can be configured (delete) or not
//    value: 'Creating aproperty'
//});
//for(key in obj ) console.log(key); //not show if enumerable false
//delete obj.aproperty; //error if not configurable
//console.log(obj.aproperty);
//
//Object.defineProperty(obj, 'fullName', {
//    get: function() {
//        return this.firstName+' '+this.lastName;
//    },
//    set: function(newValue) {
//        this.newFullName = newValue;
//        newValue=newValue?newValue.split(' '):'';
//        this.firstName = newValue.length>1?newValue.slice(0,newValue.length-1).join(' '):newValue[0];
//        this.lastName = newValue.length>1?newValue[newValue.length-1]:'';
//    }
//});
//console.log(obj.fullName);
//obj.fullName = 'new firstname lastname';
//console.log(obj.fullName);
//console.log(obj.newFullName);
//
//Object.defineProperties(obj, {
//    sayHii: {
//        value: function () {
//            return 'Hii there';
//        },
//        enumerable: true
//    },
//    fullNameInUpperCase: {
//        get: function () {
//            return (this.firstName + ' ' + this.lastName).toUpperCase();
//        },
//        enumerable: true
//    }
//});
//console.log(obj.sayHii());
//console.log(obj.fullNameInUpperCase);
//
//var Person = function(name){
//    this.name = name?name:'name';
//}
//Object.defineProperties(Person.prototype, {
//    sayHii: {
//        value: function () {
//            return 'Hii there';
//        },
//        enumerable: true
//    }
//});



//=======================================================================================
/***********************************DOM********************************************/
//=======================================================================================
//
////Finding HTML
//var idElem =  document.getElementById('demo-id');
//console.log(idElem); //{}
//var classElem =  document.getElementsByClassName('demo-class')[0];
//console.log(classElem); //[]
//var tagElem =  document.getElementsByClassName('demo-class2')[0].getElementsByTagName('p')[0];
//console.log(tagElem); //[]
////
////
////Changing HTML Elements
//classElem.innerHTML =  "<div>" +
//    "<p class=\"class1p\">P for class one is changed</p>" +
//    "</div>";
//
//var newElem = document.getElementsByClassName('class1p')[0];
//setTimeout(function(){
//    newElem.innerHTML="P for class one is changed again";
//},2000);
//
//console.log(newElem.parentNode); //getting parent node
//
//idElem.getElementsByTagName('a')[0].href = "http://www.w3schools.com/js/default.asp"; //setting attribute
//newElem.parentNode.setAttribute('class','parent-of-p'); //setting attribute
//

////Creating element
//var btn = document.createElement('button'); //not exists on body but exists on dom
//var textNode = document.createTextNode("Text for button");
//btn.appendChild(textNode);
//btn.setAttribute('onclick',"document.getElementById('demo-id').style.color = 'red'");
//document.getElementsByClassName('demo-class3')[0].appendChild(btn); //now on body

//
//var setNullToInputText = function(){
//    setTimeout(function(){
//        document.getElementById('input-text').innerHTML="";
//    },2000);
//};
////
////DOM events
//function inputFocused(event){
//    console.log(event);
//    document.getElementById('input-text').innerHTML="Input is focused";
//    setNullToInputText();
//}
//
//function inputBlurred(event){
//    console.log(event);
//    document.getElementById('input-text').innerHTML="Input is blurred";
//    setNullToInputText();
//}
//
//function inputChanged(event){
//    console.log(event);
//    document.getElementById('input-text').innerHTML="Input is changed";
//}
//
//
//var eventJsElem = document.getElementById('dom-event-js');
//eventJsElem.onfocus=inputFocused;
//eventJsElem.onblur=inputBlurred;
//eventJsElem.onchange=inputChanged;
//
////
//var jsEventElem = document.getElementById("dom-event-js-listener");
//
//var genericEventListener =  function(elem,event,eventAt,fn){ //removeEventListener for removing
//    if (elem.addEventListener) {                    // For all major browsers, except IE 8 and earlier
//        elem.addEventListener(event, fn);
//    } else if (elem.attachEvent) {                  // For IE 8 and earlier versions
//        elem.attachEvent(eventAt, fn);
//    }
//};
//genericEventListener(jsEventElem,'focus','onfocus',inputFocused);
//genericEventListener(jsEventElem,'blur','onblur',inputBlurred);
//genericEventListener(jsEventElem,'change','onchange',inputChanged);
//
//
//Creating custom event
//var myEvent = document.createEvent('MouseEvents');
//myEvent.initEvent('click',true,true);//event.initMouseEvent(type, canBubble, cancelable, view,detail, screenX, screenY, clientX, clientY,ctrlKey, altKey, shiftKey, metaKey,button, relatedTarget);
//document.getElementById('for-custom-event').dispatchEvent(myEvent);
//function itsClicked(event){
//    //event.stopPropagation();
//    console.log('Clicked');
//}
//
//
//function bubbledClick(event){
//    console.log('bubbled');
//}
//
//
//function getTextAreaContent(){
//    var text=document.getElementById("text-area").value;
//    //console.log(text.split('\n'));
//    document.getElementById('set-text').innerHTML=document.getElementById("text-area").value;
//}
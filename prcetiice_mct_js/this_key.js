// this - keyword - always point some object
//1. Global Context;
// let a=5;
// var b=5;
// console.log(this.a);
// console.log(this); //Refer to the window object


//2. Function Context;
//Normal Function
function fun(){
    console.log(this);
}
fun();

//Arrow Function
//Method Context
let user= {
    name:"Swati",
    gender:"Female",
    getDetails() {
        console.log(this);
    }
}
user.getDetails();
let user2={
    names:"Bhumika",
    gender:'female',
    obj:{
        newName:"Trisha",
        details () {
            getDetails= function abs(){
                // console.log(this.newName, "and", this.names);
                console.log(this);
            }
            getDetails();
        }
    }
}
//Arrow function(this)=Normal Function


user2.obj.details();
//Class Context
class user3{
    count;
    constructor(n){
        this.name=n;
        this.count=0
        // console.log("namaste " +this.name, "how r u?");
    }
    getCount() {
        this.count++;
        console.log(this.count);
        return this.count;
    }
}
const User1=new user3("Nipun");
const User2=new user3("Virendra");
User2.getCount();

function user4 () {
    return {
        name:"Bhumika",
        ref(){
            return this;
        }
    }
}
let userName = user4();
console.log(userName);
console.log(userName.ref().name);
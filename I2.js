//single level inheritance

// class Student {
  
//     constructor(fn,ln,a)
//     {
//         this.FirstName=fn
//         this.lastName=ln
//         this.adharno=a
//     }
//     displayName()
//     {
//         return  this.FirstName + this.lastName
//     }
// }

// class Teacher extends Student{
//     constructor(fn,ln,a,sn)
//     {
//         super(fn,ln,a)
//         this.salary=sn
//     }
// }
// let Rohan = new Teacher("Rohan","Jundare","1233","123365")
// console.log(Rohan.FirstName)
// console.log(Rohan.adharno)
// console.log(Rohan.salary)
// console.log(Rohan.lastName)

// multilevel inheritance
class Grandfather{
    constructor(gn,ln){
        this.gName= gn
        this.lastName= ln
    }
    displayNName()
        {
            console.log(this.gName +this.lastName)
        }
}
class Father extends Grandfather{
    constructor(gn,ln,fn)
    {
        super(gn,ln)
        this.fname=fn
    }
    displayFName()
    {
        console.log(this.fname +this.lastname)
    }
}
class Son extends Father{
     constructor(gn,ln,fn,sn)
     {
        super(gn,ln,fn)
        this.sname=sn
     }
     displaySName()
     {
         console.log(this.sname +this.lastname)
     }
}
let Rohan = new Father("chimanrao","jundare","mangesh","rohan")
console.log(Father.sname)
console.log(Father.sname)
console.log(Father.sname)
console.log(Father.fname)
console.log(Father.gName)  
Rohan.displayNName()
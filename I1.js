// class Student{
//        firstName ='Rohan'
//        lastName= 'Jundare'
//        adharNo= '123'
//   displayName(){
//     console.log(this.firstName+this.lastName)
//   }
// }
// class Teacher{
//   firstName ="Rohan"
//   lastName= "Jundare"
//   adharNo = '123'
//   salary = '12345'
//   displayName(){
//     console.log(this.firstName+this.lastName)
//   }
//   displaySalary()
//   {
//     console.log(this.salary)
//   }
// }
// let Rohan2 = new Student()
// console.log(Rohan2.firstName)
// console.log(Rohan2.lastName)
// console.log(Rohan2.salary)

////program 2
// class Student{

//   firstName ='Rohan'
//   lastName= 'Jundare'
//   adharNo= '123'

// displayName(){
// console.log(this.firstName + this.lastName)
// }

// }
// class Teacher extends Student{

//   salary = '12345'

// displaySalary()
// {
// console.log(this.salary)
// }

// }

// let Rohan3 =new Teacher
// console.log(Rohan3.firstName)
// console.log(Rohan3.lastName)
// console.log(Rohan3.salary)
// console.log(Rohan3.adharNo)

// Rohan3.displayName()

// class Student{
//   constructor(fn,ln,a){
//     this.FirstName = fn
//     this.LastName = ln
//     this.adharNo = a
//   }
//  displayName()
//  {
//   return(this.FirstName+this.LastName)

//  }
// }
// class Teacher extends Student{
//    salary = "123"
// }
// let Rohan = new Teacher("rohan","jundare","123")
// console.log(Rohan.salary)
// console.log(Rohan.FirstName)
// console.log(Rohan.LastName)
// console.log(Rohan.adharNo)

class Student{
  constructor(fn,ln,a){
    this.FirstName = fn
    this.LastName = ln
    this.adharNo = a
  }
 displayName()
 {
  return(this.FirstName+this.LastName)

 }
}
class Teacher extends Student{
  constructor(fn,ln,a,sn){
    super(fn,ln,a)
    this.salary=sn
  } 
}

let Rohan = new Teacher("rohan","jundare","123","12345")
console.log(Rohan.salary)
console.log(Rohan.FirstName)
console.log(Rohan.LastName)
console.log(Rohan.adharNo)


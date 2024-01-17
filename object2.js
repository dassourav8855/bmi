// singleton Object
// const obj= new Object()
// obj.name="Sourav"
// console.log(obj)
 const user={
    name:"das",
    newuser:{
        olduser:{
            age1:23,
            age2:233

        }

    }
 }
//  console.log(user.newuser.olduser.age2)

 // nested object mein ek baar me ek hi key koo acces kar sakte hai upper exampl hai


// do ya do se jayda object to eksaath jorne ka tarika  spread operator best hi
 const newobj={a:1,b:2}
const newobj2={c:1,b:3}

// const newobj3=Object.assign({},newobj,newobj2)
const newobj3={...newobj,...newobj2}
// console.log(newobj3)

const tinderuser={
    name:"sapna",
    lover:"sourav",
    loving :3

}
console.log(tinderuser)
// keys access karne k liye
console.log(Object.keys(tinderuser))
//values access karne k liye
console.log(Object.values(tinderuser))
//object me properties hai ya nahi uske liye ye use kiya jaata hai
// console.log(tinderuser.hasOwnProperty(`lover`)

//object litrels
// INTERVIEW QUESTION: if i have to acess symbol then  we have to access like this bleow//
const key1=Symbol("mykey")
const obj={
    name:"sourav",
    "full name": "sourav Das",
    age:25,
    email:"das@gogle.com",
    [key1]: "mykey"

}


console.log(obj.name)
console.log(obj["full name"])
console.log( typeof obj[key1])
//object ko 2 type se access kar sakte hai ek . aur ek [] agar variable ka naam me space ho aur double qoutes me hai to braket mme access krenge jaise ki " full name"
obj.name="guddi"
console.log(obj["name"]) 
console.log(obj)

obj.greeting=function(){
    console.log("this is a cow")
}
obj.greeting2=function(){
    console.log(`this is a cow ${this.name}`)
}
console.log(obj.greeting())
console.log(obj.greeting2())


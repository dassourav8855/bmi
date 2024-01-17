// const sou=[1,3,5,6,3]
// const deu=sou.filter((tem)=>{
//  return tem>2
// })
// console.log(deu)

//filter ek new arrey return karta hai but for each nahi

// for each se hum is tarah se new arrey le sakte hai

let love=[]
// sou.forEach((item)=>{
// if(item>3){
//   return  love.push(item)
    
   
// }
// })
// console.log(love);

// filter condition cheak karta hai jabki maps sab kuch dekhta hai
const sou=[1,3,5,6,3]
 const lo=sou.map((item,index)=>{
return item+3
 })
 console.log(lo)
 
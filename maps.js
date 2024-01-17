const sou=[1,3,5,6,3]
//  const lo=sou.map((item,index)=>{
// return item+3
//  })
//  console.log(lo)
  // ab ek ya usse jayda maps aur filter daal k dekhte hai 
  // filter condtion cheak karta hai aur nya arrey retun karta hai

 const num=sou.map((item)=>item*2)
 // pahle wale me jo item bna uspe dusra map lga hai
 .map((item)=>item+1)
 // dusre map me jo item bna hai uspe filte lga hai
 .filter((item)=>item>12)
 // ab jo bacha wo num me gya hai
//   console.log(num);

 
 
//REDUCER

const red=[2,4,5,6]
const blur=red.reduce((acc,currval)=> acc+currval,0)
console.log(blur);
// reducer me ek accumalter hota hai aur ek current value jo return k baad ,0 hai wo accumlater ka current value hai jo ki kuch bhu ho sakta hai yaha hum o se start kar rhae hai

const course=[
    {
        sub:"js",
        price:100
    },
    {
        sub :"java",
        price:900
    }
]
const jb=course.reduce((acc,item)=> acc+item?.price,0)
console.log(jb);
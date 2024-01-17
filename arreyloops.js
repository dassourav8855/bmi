const arr=[1,3,4,5]
for(const num of arr){
    // console.log(num)
}
const sourav= "hello  world!"
for (const i of sourav ) {
    if (i== " "  ) {
//   continue
    }
    // console.log(i)
    }
    const obj={
        name:"sd",
        class:"5",
        sex:'daily'
    }
    // agar obj ka key nikalna ho to
    for(key in obj){
        // console.log(key);
    }
    // agar obj ka value nikalna ho to
    for( key in obj){
        // console.log([key]);
    }
    // same cheez arrey mein bhi hoga

    const soura=[`sourav`,`neeraj`,`bhaskar`,`salman`]
//     soura.forEach((item)=>{
// // console.log(item);
//     })
    //for each me function ka naam nahi likha jaata
// ab esa nahi hai ki for each k ander function likha jay bahar k function ko v le satke hai neeche example hai
// function print (item){
//     console.log(item)
// }
// soura.forEach(print)
//yaha sirf function ka naam hi dea hai call nahi karna hai

// for each mein sirf value hi nahi index aur arrey bhi daal skte hai 

soura.forEach( (item,index,arr)=>{

// console.log( (item,index,arr));

})

const person =[
    {
        name:"Gautam",
        occupation:"Developer"
    },
    {
        name:"Saurav",
        occupation:"Student"
    },
    {
        name:"Karthik",
        occupation:"Developer",
        company : {
            name: "Wiftcap",
            address: 'Kolkata'
        }
    },
]
person.forEach((item)=>{
// console.log(item.name, item.occupation, item?.company?.name);
})

// item?.company?.name ye chaining operator hai
const loru=[1,3,4,5]
loru.forEach((num)=>{
    console.log(num+1);
 return num+1
})


console.log(loru);







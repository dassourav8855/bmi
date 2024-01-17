// iife ka use gobAL variable ke pollution ko rokne mein kiya jaata hai
// (function chai(name){
//     console.log(`my name is ${name}`);
//  })(`sourav`)
 // isme function call karne waqt function ka naam nahi likha jata hai
 // ab do ya do se jayda iife ko kaise likhe 

 (function chai(name){
    console.log(`my name is ${name}`);
 })
 (`sourav`);
 // upper wala named iife hai

//  (function code (){
//     console.log(`tum gandu ho`);
//  }) ()
// ab arrow fun mein
 (()=>{
    console.log(`kartik randibaaz hai`);
 })()

 
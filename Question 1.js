const objresume = {
    fname : "Deepa",
    lname : "Lakshmi R",
    role : "Developer",
    gender : "Female",
    age : 20,
    dob : "30-10-2002",
    skills : ["Python","Javascript"],
    contact : {
        email : "deeparavi2403@gmail.com",
        mobile : "9566821649"
    },
    nationality:"Indian",
};
//for-of
const keys = Object.keys(objresume);
for(let value of keys){
    console.log(value, objresume[value]);
}
//for-in
for(const key in objresume){
    console.log(key, objresume[key]);
}
//const person : {
     //name: string;
     //age : number
//} = {
   // const person :{
       // name : string ;
       // age :number;
       // hobbies :string[];
       // role :[number,string];

   // }= {
   // name : "anushka",
   // age:21
   // hobbies : ['sports','dance'],
   // role:[2,'author']
//};

//const ADMIN = 0;
//const READ_ONLY = 1 ;
//const AUTHOR = 2;

enum Role {ADMIN= 'ADMIN',READ_ONLY = 100,AUTHOR = 200};

const person = {
      
name : "anushka",
 age:21
hobbies : ['sports','dance'],
 role: Role.ADMIN
};
//person.role.push('admin');
//person.role[1]=10;

//person.role = [0,'admin','user'];

let fav : string[];
fav = ['sports'];
console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if (person.role == Role.ADMIN) {
    console.log('is an admin');
}
//console.log("Hello World!");
//console.error("This is an error!");
//console.warn("This is a warning!");
// var, let, const
//let age=30;
//age=31;
//console.log(age);

//const age=30;
//age=35;
//console.log(age);

//let score;
 //score=40;
 //console.log(score);

 //const age=50;
 //age=50;
  //console.log(age);

  //const name="john";
  //const age=30;
  /*const rating=4.5;
  const isCool=true;
  const x=null;
  const y=undefined;
  let z;

 console.log(typeof name); 
 console.log(typeof age); 
 console.log(typeof rating); 
 console.log(typeof isCool); 
 console.log(typeof x); 
 console.log(typeof y); 
 console.log(typeof z);*/
 //console.log("My name is " + name + " and i am " + age + "."); 
 //console.log(`My name is ${name} and i am ${age}.`);
 //or
 //const hello=`My name is ${name} and i am ${age}.`;
//console.log(hello);

/*let greeting="computer, tehnology, printer, mouse";
console.log(greeting.length);
console.log(greeting.toUpperCase()); 
console.log(greeting.toLowerCase());
console.log(greeting.substring(0,5));
console.log(greeting.substring(0,8).toUpperCase());
console.log(greeting.split(","));*/

//arrays
//var numbers=new Array(1,2,3,4,5);
//const numbers=new Array(1,2,3,4,5);
//console.log(numbers);

//constructors in array. the old method. Array constructor
/*const numbers=new Array(1,2,3,4,5);
console.log(numbers);

//the new method on arrays
const fruits=["Oranges", "Apples", "Pears","Guavas"];
console.log(fruits);
fruits[3]="Pineapples";
console.log(fruits);
fruits.push("mangoes");
console.log(fruits);
fruits.unshift("Strawberries");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.shift();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("Pears"));*/ 
//object literals
/*let person1={
     firstName:"John",
     lastName:"Doe",
     age:30,
     hobbies:["music","movies","sports"],
     address:{
               street:"50 Main Street",
               city:"Boston",
               state:"MA"
        }
}
console.log(person1.lastName,person1.firstName);
console.log(person1.hobbies[1]);
console.log(person1.address.city);*/
//destructuring
/*const {firstName,lastName}=person1;
console.log(firstName);*/
/*const {firstName, lastName, address:{city}}=person1;
console.log(city);
person1.email="aes_akpe@yahoo.ca";
console.log(person1);*/

/*let person2={
	firstName:"Akpevweoghene",
	middleName:"Ogheneowho",
	lastName:"Ugono",
	hobbies:["Music","Movies","Sports"],
	address:{
		 street:"Peacock Street West",
		 City:"Sunderland",
		 county:"Tyne and Wear"
	}
}
console.log(person2);*/

//array as objects

const todos=[
               {
               	id:1,
               	text:"Take out the trash",
               	isCompleted:true
               },
        
            {
      	      id:2,
      	      text:"Meeting with boss",
      	       isCompleted:true
            },
     
          {
   	        id:3,
   	        text:"Dentist appt",
   	        isCompleted:false
           }
      ];

/*console.log(todos);
console.log(todos[1].text);

//to convert to JSON Format
let todoJSON=JSON.stringify(todos);
console.log(todoJSON);*/
//loops
/*for(let i=0;i<=10;i++){

                        console.log(`The for loop number is: ${i}`);
                     }*/
//while loop
let i=0;
while(i<=10){

               console.log(`The while loop number is: ${i}`);
               i++;
           }
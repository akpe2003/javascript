/*let details={
               firstName:"Akpevweoghene",
               middleName:"Ogheneowho",
               lastName:"Ugono",
               hobbies:["Music","Movies","Sports"],
               address:{
                          street:"50 cent Street, Lloyd Banks Avenue, Yayo Close",
                          city:"Boston",
                          state:"MA"
                        }
            }
console.log(details.firstName,details.lastName);
details.email="aes_akpe@yahoo.ca";
console.log(details);*/

/*let person=[
                {
                	id:1,
                	text:"Brush your teeth",
                	isCompleted:true
                },
                {
                	id:2,
                	text:"Bath",
                	isCompleted:true
                },
                {
                	id:3,
                	text:"Have clothes on",
                	isCompleted:false
                }  
           ];
 console.log(person);
 console.log(person[1].text);
 let personJSON=JSON.stringify(person);
 console.log(personJSON);
 for(let index=0;index<person.length;index++)
 {
    console.log(person[index].text);                      
 } // a for loop
 for(let x of person)
 {
 	console.log(x.id);
 } // a for of loop 
 for(let x of person)
 {
 	console.log(x.text);
 }         
 for(let x of person)
 {
 	console.log(x.isCompleted);
 }
 //forEach
 person.forEach(function(personally){
     console.log(personally.id);
 }) ; //a foreach loop

//time for a map
let akpe=person.map(function(personify){

        return personify.text; // it can return anything
     });
console.log(akpe);

//filter
let name=person.filter(function(stick){
         return stick.isCompleted===true;
}).map(function(stick){
     return stick.text;
});

console.log(name);*/

//conditionals
/*let x=4;
if(x===10)
{
	console.log("X is equal to 10");
}
else if(x>10){
	console.log("X is greater than 10");
}else
{
	console.log("X is less than 10");
}*/

/*let w=6;
let z=10;

if (w > 5 && z > 8)
{
	console.log("W is more than 5 or Y is more than 10");
}*/

/*let x=10;
let color= x > 10 ? "red" : "blue";
console.log(color);*/

let h=7;
//let w=5;
let color= "green"//h > w ? "red":"blue";
console.log(color);

switch(color){
	case "red":
	console.log("color is red");
	break;
	case "blue":
	 console.log("color is blue");
	 break;
	 default:
	 console.log("color is not red or blue");
	 break;
}
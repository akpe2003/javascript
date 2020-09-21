let lady=[
             {
                  id:1,
                  text:"Brush your teeth",
                  isCompleted:true
             },
            {
            	id:2,
            	text:"Take your bath",
            	isCompleted:true
            },
            {
            	id:3,
            	text:"Put on clothes",
            	isCompleted:false
            }
        ];
 //console.log(lady);
 //console.log(lady[1].text);
 //let ladyt=JSON.stringify(lady);
 //console.log(ladyt);
 /*for(let index=0; index<lady.length; index++){
      console.log(lady[index]);
 }*/

/*for(let x of lady){
	console.log(x.text);
}*/
/*lady.forEach(function(ladyexpress){
	console.log(ladyexpress.isCompleted);
});*/

/*let meat=lady.map(function(ladylane){
         return ladylane.text;
});
console.log(meat);*/
let donot=lady.filter(function(ladyjane){
    return ladyjane.isCompleted===true;
}).map(function(ladyjane){
	return ladyjane.text;
});
console.log(donot);

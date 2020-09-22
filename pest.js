let wife=[
            {
            	id:1,
            	text:"Brush my hair",
            	isCompleted:true
            },
            {
            	id:2,
            	text:"Brush my teeth",
            	isCompleted:true
            },
            {
            	id:3,
            	text:"Put some clean clothes on",
            	isCompleted:false
            }
        ];
//console.log(wife);
//console.log(wife[2].text);
//let sweetsJSON=JSON.stringify(wife);
//console.log(sweetsJSON);
/*for(let index=0; index<wife.length; index++){
	console.log(wife[index].text);
}*/
/*for(let d of wife){
	console.log(d.isCompleted);
}*/

/*wife.forEach(function(wifest){
console.log(wifest.id);
});*/

/*let meat=wife.map(function(wify){
     return wify.text;
});
console.log(meat);*/

/*let meat=wife.filter(function(sweets){
	return sweets.isCompleted===true;
}).map(function(sweets){
	return sweets.text;
});
console.log(meat);*/

let addNums=(num1,num2)=>{
return num1+num2;
}
console.log(addNums(7,7));

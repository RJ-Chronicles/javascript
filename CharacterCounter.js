let maruti = "I am good boy.";
let myArray = new Array();

let myMap = new Map();

for(let i = 0; i<maruti.length; i++){
    if(! myMap.has(maruti.charAt(i))){
        myMap.set(maruti.charAt(i),1)
    }else{
        let count = myMap.get(maruti.charAt(i));
        count += 1;
        myMap.set(maruti.charAt(i), count);
    }
}

for(let entry of myMap){
    console.log(entry);
}

for(let key of myMap.keys()){
    if(key != " ")
    console.log("Letter : "+ key + "  Count : "+ myMap.get(key));
}

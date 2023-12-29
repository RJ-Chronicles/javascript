const arr = [1,3,4,5,6,3,2,6,7,5,2,1,5,7,7];

let key_pair = {};

for(const key of arr){
  if(key_pair[key]){
    key_pair[key] = key_pair[key] + 1
  }else {
    key_pair[key] = 1;
  }
}



const my_string ='This is the simplest way to count chars'.toLowerCase();

for(let char of my_string){
  if(key_pair[char]){
    key_pair[char] = key_pair[char]+ 1;
  }else{
    key_pair[char] = 1
  }
}
console.log(key_pair);

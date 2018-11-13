var fs = require('fs');
var to_string = fs.readFileSync('./flower.txt').toString();
var split_lines = to_string.split("\n");
var withS=0,withoutS=0;
console.log("the number of rows in the file is " + split_lines.length );

console.log("the names of flowers that start with the first letter of  my name is: ")
for(var i=0; i<split_lines.length; i++){
    if(split_lines[i].startsWith('A')){
    console.log( split_lines[i])
    }
    if(split_lines[i].startsWith('S')){
        withS++
    }
    else{withoutS++}

}
console.log("the list of word that have only 5 letters in their names is :")
for(var i=0;i<split_lines.length;i++){
    if(split_lines[i].length == 5){console.log(split_lines[i])}
}
console.log("the number of flower names that start with S is: "+ withS)
console.log("the number of flower names that dosen't start with S is: "+ withoutS );
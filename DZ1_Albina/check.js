
const array1 = [1,2,3,4,5,6,7,8,9,10,11,12,11];
const array2 = [1,2,3,4,5,6,7,8,9,10,11,12];
let a = array1.length;
let b = array2.length;


if (a > b){
    console.log("1 массив больше 2")
}
else if(b> a){
    console.log("2 массив больше 1")
}
else{
    console.log("Массивы равны")
}
// code your solution here
// const superbowlWin = (array) => {
//     for(const item of array){
//     if(item.result === "W"){
//     return item.year;
// }
// }
// }
let array = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
];
const superbowlWin = (array) =>{
    let result = array.find((item) => item.result === 'W')
    if (result) {
        return result.year
    } else{
        return undefined
}
}

    



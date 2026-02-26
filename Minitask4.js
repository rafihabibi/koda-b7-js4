let dataArray = [3, "Rafi", true, {nama:"Rafi"}, [1,2,3], false, 99, "gue"];

let jumlahString = 0;
let jumlahNumber = 0;
let jumlahBoolean = 0;
let jumlahObject = 0;
let jumlahArray = 0;

for(let i = 0; i < dataArray.length;i++){
    let dataArr = dataArray[i];
    if(Array.isArray(dataArr)) {
        jumlahArray++;
    } else if(dataArr instanceof Object) {
        jumlahObject++;
    } else if(typeof dataArr === "number") {
        jumlahNumber++;
    } else if(typeof dataArr === "string") {
        jumlahString++;
    } else if(typeof dataArr === "boolean") {
        jumlahBoolean++;
    }

    console.log("Jumlah Number: " + jumlahNumber);
    console.log("Jumlah string: " + jumlahString);
    console.log("Jumlah Boolean: " + jumlahBoolean);
    console.log("Jumlah Object: " + jumlahObject);
    console.log("Jumlah Array: " + jumlahArray);
}

    


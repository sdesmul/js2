var maxNum = 100;
var hee = "Hee!"
var haw = "Haw!"
var counter = 1;

while (counter <= maxNum) {
    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log(hee + haw);
    }else if(counter % 3 == 0){
        console.log(hee);
    }
    counter++;
}
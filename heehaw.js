var maxNum = 100;
var hee = "Hee!"
var haw = "Haw!"
var counter = 1;

while (counter <= 100) {
    if (counter % 3 == 0 && counter % 5 == 0) {
        console.log(hee + haw);
    }
    counter++;
}
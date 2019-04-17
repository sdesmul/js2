


function heeHaw(maxNum){

    var hee = "Hee!";
    var haw = "Haw!";
    var counter = 1;
    if(maxNum <= 0){
        console.log("Please enter a number greater then 0")
    } else if(isNaN(maxNum)==true){
        console.log("Please enter a number greater then 0")
    } else{
        while (counter <= maxNum) {
            if (counter % 3 == 0 && counter % 5 == 0) {
                console.log(hee + haw);
            }else if(counter % 3 == 0){
                console.log(hee);
            }else if(counter % 5 == 0){
                console.log(haw);
            } else{
                console.log(counter);
            }
            counter++;
        }
    }
}
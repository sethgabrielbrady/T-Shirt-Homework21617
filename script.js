


var toggle = false; //creates a bool set to false



function picChangeL() { //onclick calls the function
    if (toggle === true) {//checks if toggle is true
        //if toggle is true, change the pic to blue-front
     document.getElementById('lft-img').src = 'blue-front.png';
     //console.log("left front");//for testing
    } else {
      //if toggle isnt true, change it to blue-back
     document.getElementById('lft-img').src = 'blue-back.png';
     //console.log("left back");//for testing
    }
    toggle = !toggle;//sets toggle to be the opposite of its current value

}


function picChangeM() {
    if (toggle === true) {
     document.getElementById('mid-img').src = 'pink-front.png';
     //console.log("middle front");
    } else {
     document.getElementById('mid-img').src = 'pink-back.png';
     //console.log("middle back");
    }
    toggle = !toggle;
}



function picChangeR() {
    if (toggle === true) {
     document.getElementById('rgt-img').src = 'yellow-front.png';
     //console.log("right front");
    } else {
     document.getElementById('rgt-img').src = 'yellow-back.png';
     //console.log("right back");
    }
    toggle = !toggle;
}

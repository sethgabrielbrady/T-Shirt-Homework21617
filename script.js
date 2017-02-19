





var toggle = false; //creates a boolset to false

function picChange() { //starts the function when the repeat icon is clicked
    if (toggle === true) {//checks if toggle is true
        //if toggle is true, change the pic blue-front
        document.getElementById('left-image').src = 'blue-front.png';
    } else {
      //if toggle isnt true, change it to blue-back
       document.getElementById('left-image').src = 'blue-back.png';
       console.log("image changed");
    }
    toggle = !toggle;//sets toggle to be the opposite of its current bool value
}

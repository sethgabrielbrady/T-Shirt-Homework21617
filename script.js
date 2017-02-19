





var toggle = false; //creates a bool set to false



function picChangeL() { //onclick calls the function
    if (toggle === true) {//checks if toggle is true
        //if toggle is true, change the pic to blue-front
     document.getElementById('lft-img').src = 'blue-front.png';
     console.log("left front");//for testing
    } else {
      //if toggle isnt true, change it to blue-back
     document.getElementById('lft-img').src = 'blue-back.png';
     console.log("left back");//for testing
    }
    toggle = !toggle;//sets toggle to be the opposite of its current value

}



function picChangeM() {
    if (toggle === true) {
     document.getElementById('mid-img').src = 'pink-front.png';
     console.log("middle front");
    } else {
     document.getElementById('mid-img').src = 'pink-back.png';
     console.log("middle back");
    }
    toggle = !toggle;
}



function picChangeR() {
    if (toggle === true) {
     document.getElementById('rgt-img').src = 'yellow-front.png';
     console.log("right front");
    } else {
     document.getElementById('rgt-img').src = 'yellow-back.png';
     console.log("right back");
    }
    toggle = !toggle;
}











//I need call the function based on which repeat button i presss
// example- if pressed repeat for  the middle pic- it only changes
// the middle pic
// if repeat was pressed and the image was has a class of lft and the src is Front
// and toggle is equal to true, change the image to front, else change change the image to back.
//
//

/*

var lft = "left-image";
var mdl = "middle-image";
var rgt = "right-image";
var check;
function picChange(){
   if (toggle === true) {

    if (document.getElementById(lft) && document.getElementById(lft).src = 'blue-front.png')

      //    func to change left pic
      // else if middle box
      //    func to change  middle pic
      // else
      //  func to change right pic



     toggle = !toggle;
   }
}
*/

let lampOn = false;
let dayTime = true;

lampOn == true && dayTime != true ? console.log('The lamp is on during the night.'):
lampOn != true && dayTime != true ? console.log('The lamp is off during the night.'):
lampOn == true && dayTime == true ? console.log('The lamp is on during the day'):
lampOn != true && dayTime == true ? console.log('The lamp is off during the day'):
console.log("What lamp?");

//wont run into the else statment ("what lamp?") but it is required to have an else statment (the else statment can be null)
/* for example
lampOn == true && dayTime != true ? console.log('The lamp is on during the night.'):
lampOn != true && dayTime != true ? console.log('The lamp is off during the night.'):
lampOn == true && dayTime == true ? console.log('The lamp is on during the day'):
lampOn != true && dayTime == true ? console.log('The lamp is off during the day'):
null;

//the only change is from console.log(what lamp) to null
*/
//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
function Person( name, age ){
  this.name = name;
  this.age = age;
  this.sayName = function(){
    alert(this.name);
  }
}



//Now create three instances of Person with data you make up

  //code here
var olivia = new Person( 'Olivia', 23 );
var luke = new Person( 'Luke', 22 );
var mario = new Person( 'Mario', 21)


//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here

olivia.sayName();

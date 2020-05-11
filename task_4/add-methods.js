function Dog(name, color, numLegs) {
  this.name = name;
  this.color = color;
  this.numLegs = numLegs;
  this.description = function() {
    return 'The dogs name is ' + this.name + ', his color is '+
    this.color + ' and he has ' + this.numLegs + ' legs.';
  };
}

export default Dog;

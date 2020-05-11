import Dog from '../task_4/add-methods';

function Hound(name, color, numLegs, height) {
  Dog.call(this, name, color, numLegs);

  this.height = height;
  this.getHeight = function() {
    return this.height;
  };
}
Hound.prototype = Object.create(Dog.prototype);

export default Hound;


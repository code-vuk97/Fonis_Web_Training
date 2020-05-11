const Dog=function (name, color, numLegs){
    this.name=name;
    this.color=color;
    this.numLegs=numLegs;
    this.describe=function(){
        return 'the dogs name is '+this.name+', his color is'+this.color+' and he has' +this.numLegs+ 'legs';
    }
}
export default Dog

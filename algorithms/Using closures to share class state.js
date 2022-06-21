// Let's make a Cat constructor!
var Cat = (function () {
    this.counter = 0;
    this.avrWeight = 0;

    return function(name, weight) {

        if (name == undefined || weight == undefined){
            throw 'Name or Weight not specified when invoking the constructor!';
        }
        this._name = name;
        this._weight = weight;
        counter = counter + 1;
        avrWeight = avrWeight + weight;
        
        Object.defineProperty(this, "weight",{
            get: function(){
                return this._weight;
            },
            set: function(value){
                avrWeight = avrWeight - this._weight + value;
                this._weight = value;
            }
        })
    }
}());

Cat.averageWeight = function(){
    return avrWeight / counter;
};

    garfield = new Cat('garfield', 25);
    felix = new Cat('felix', 15);
    console.log(Cat.averageWeight()); // 20

    felix.weight = 25;
    felix.weight // 25
    console.log(Cat.averageWeight()); // 25
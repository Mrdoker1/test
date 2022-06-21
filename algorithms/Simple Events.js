function Event() {

    this.handlerList = [];
    this.subscribe = function(handler){
        this.handlerList.push(handler);
    }
    this.unsubscribe = function(handler){
        this.handlerList = this.handlerList.filter(f => f !== handler)
    }
    this.emit = function(...args){
        this.handlerList.forEach(element => {
            element(...args);
        });
    }
}
  
var event = new Event();
    
function f(data) {
    console.log(data);
}

function f1(data) {
    console.log(data);
}

event.subscribe(f);
event.subscribe(f);
event.emit(1, 'foo', true);
event.unsubscribe(f1);
event.emit('sex');
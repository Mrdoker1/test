// return the nested property value if it exists,
// otherwise return undefined
Object.prototype.hash = function(string) {

    let path = string.split('.');
    let root = this[path[0]];

    for(let i = 1; i < path.length; i++){
        if (root[path[i]]) {
            root = root[path[i]];
        } else {
            return undefined;
        }
    }
    return root;
}

var obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.'
        }
      }
    }
  };
  
  console.log(obj.hash('person.name')); // 'joe'
  obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
  obj.hash('person.history.homeStreet'); // undefined
  obj.hash('person.animal.pet.needNoseAntEater'); // undefined
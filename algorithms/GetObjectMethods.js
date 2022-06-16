function isSantaClausable(obj) {

    console.log(typeof obj.goDownTheChimney);
    console.log(typeof obj.go_down_the_chimney);

    if (((typeof obj.sayHoHoHo === 'function') || (typeof obj.say_ho_ho_ho === 'function')) &&
        ((typeof obj.distributeGifts === 'function') || (typeof obj.distribute_gifts === 'function')) &&
        ((typeof obj.goDownTheChimney === 'function') || (typeof obj.go_down_the_chimney === 'function'))) return true
    else return false
}

// function isSantaClausable(obj) {
//     if ((obj.hasOwnProperty('sayHoHoHo') || obj.hasOwnProperty('say_ho_ho_ho')) &&
//         (obj.hasOwnProperty('distributeGifts') || obj.hasOwnProperty('distribute_gifts')) &&
//         (obj.hasOwnProperty('goDownTheChimney') || obj.hasOwnProperty('go_down_the_chimney'))) return true
//     else return false
// }

// function isSantaClausable(obj) {
//     if (('sayHoHoHo' in obj || 'say_ho_ho_ho' in obj) &&
//         ('distributeGifts' in obj || 'distribute_gifts' in obj) &&
//         ('goDownTheChimney' in obj || 'go_down_the_chimney' in obj)) return true
//     else return false
// }

let santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

let notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') },
    distribute_gifts: function() { console.log('Oink Oink!') },
    goDownTheChimney: 'LOL',
};

console.log(isSantaClausable(santa));
console.log(isSantaClausable(notSanta));
const inData = `user.name.firstname=Bob&user.name.lastname=Smith& 
user.favoritecolor=Light%20Blue&experiments.theme=dark"`;

function query0bjectify(str) {
    let result = {}


}



console.log(queryobjectify(inData));
/*
{
    'user': {
        'name': {
            'firstname': 'Bob',
            'Lastname': 'Smith'
        },
        'favoritecolor': 'Light Blue'
    },
    experiments: {
        theme:'dark'
    }
};
*/
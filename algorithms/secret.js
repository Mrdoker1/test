function createSecretHolder(secret) {

    let obj = Object.create({
        hidden: '0'
    });

    obj = {
        getSecret: function() {
            return obj.__proto__.hidden
        },
        setSecret: function(num) {
            console.log(`Secret setted to ${num}`)
            obj.__proto__.hidden = num
        }
    }

    return obj
}

console.log(createSecretHolder(1))
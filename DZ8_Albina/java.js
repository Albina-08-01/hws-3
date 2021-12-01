

class User {
    constructor(name, password) {

        this.name = name;
        this.password = password;

    }

    login(name, password){
        if(this.name === name && this.password === password){
            console.log(this)
        }
        else{
            console.log("Неверно!")
        }
    }
}

const airas = new User("Airas", "18")
console.log(airas)





















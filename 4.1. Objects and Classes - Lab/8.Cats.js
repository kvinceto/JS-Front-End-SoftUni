function solve(input) {
    let cats = [];

    class Cat {
        constructor(name, age){
            this.name = name;
            this.age = age;
        }

        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    input.forEach(element => {
        let data = element.split(' ');
        let name = data[0];
        let age = data[1];
        cats.push(new Cat(name, age));
    });

    for (const cat of cats) {
        cat.meow();
    }
}

solve(['Mellow 2', 'Tom 5']);

solve(['Candy 1', 'Poppy 3', 'Nyx 2']);
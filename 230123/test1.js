function Test(pierwszy)

{
    this.pierwszy = pierwszy;
}

let test = new Test('pierwszy')

console.log(test)
test.pierwszy = 'drugi'

console.log(test.pierwszy)

// jest dostęp do skladowych obiektu test



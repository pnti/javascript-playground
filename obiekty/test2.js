function Test(pierwszy)

{
    this.pierwszy = pierwszy
}

function changeTest(param)

{
    param.test = 'trzeci'
}

let test = new Test('drugi')

console.log(test)

changeTest(test)

console.log(test)

// No i lipa, wszystko działa.
// Więc w czym jest problem?

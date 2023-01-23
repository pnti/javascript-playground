function Test(pierwszy)

{
    this.pierwszy = pierwszy

    function hello(){
        console.log('Hello')
    }

    
}

let test = new Test('czwarty')

// To już nie działa
//console.log(test.hello())

Test.prototype.hello = function() {
    console.log('Hello')
}
console.log(test.pierwszy)
test.hello()

Test.prototype.changePierwszy = function(drugi) {
    this.pierwszy = drugi
}
console.log(test.pierwszy)

test.changePierwszy()

console.log(test.pierwszy)
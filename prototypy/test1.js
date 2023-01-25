function Osoba () {
    this.imie = 'Stefan'
    this.helo = function (){console.log('Helo ' + this.imie)}
}

const osoba = new Osoba()

// Tutaj jest wyraźna różnica
// W przypadku funcji anonimowej można użyć this
// W przypadku strzałkowej już nie (i nie wiem, co w takim przypadku)

//Osoba.prototype.hello = function(){ console.log('Hello ' + this.imie)}

Osoba.prototype.hello = () => console.log('Hello ' + osoba.imie)

osoba.helo()
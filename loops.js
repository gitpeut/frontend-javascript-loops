// ==========================================
// Opdracht 1. Maak een for-loop die 3 keer "Hoera!" in de terminal logt
// Verwachte uitkomsten:
// Hoera!
// Hoera!
// Hoera!
// ==========================================
for (let i = 0; i < 3; ++i) {
    console.log("Hoera!");
}


// ==========================================
// Opdracht 2. Maak een for-loop die 4 keer het woord "loop..." logt, en bij de vijfde loop het woord "klaar!"
// Verwachte uitkomsten:
// loop...
// loop...
// loop...
// loop...
// klaar!
// ==========================================
for (let i = 0; i < 4; i++) {
    console.log("loop...");
}
console.log("klaar!");


// ==========================================
// Opdracht 3. Maak een for-loop die van 0 tot 15 loopt. Voor ieder getal wordt in de console gelogd of het getal even of oneven is.
// Verwachte uitkomsten:
// 0 is even
// 1 is oneven
// 2 is even
// 3 is oneven
// .... etc.
// 15 is oneven

for (let i = 0; i < 16; i++) {
    // bitwise and (&) with a number gives false if number is even, true if number is odd.
    // fellow programmers might get confused, so the
    // more common modulo operator is used in the solution.
    // console.log(`${i} is ${ (i&1)?' is oneven':' is even'}` );
    console.log(`${i} is ${((i % 2) === 0) ? ' is even' : ' is oneven'}`);
}


// Tip: een getal is oneven als je het door 2 deelt en er blijft nog iets over. Een getal is even als je het deelt door 2 en er blijft niets over..
// ==========================================


// ==========================================
// [BONUSOPDRACHT] - optioneel: maak een for-loop die van 0 tot 9 loopt en de getallen 0 tot 9 logt.
// Echter, vanaf het getal 3 komt er een > voor ieder getal te staan, en vanaf het getal 6 komt er >> voor ieder getal te staan.
// Verwachte uitkomsten:
// 0
// 1
// 2
// > 3
// > 4
// > 5
// >> 6
// >> 7
// >> 8
// >> 9
// ==========================================
for (let i = 0; i < 10; i++) {
    let groterDan = '';
    if (i > 2) groterDan = '>';
    if (i > 5) groterDan += '>';

    console.log(groterDan + i);

}

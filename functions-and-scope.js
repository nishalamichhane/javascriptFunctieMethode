// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.



    /* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.


const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
    let counter = null;
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] > 7) {
            counter += 1;
        }
    }
    console.log( counter );

// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.


function cumLaude ( arrvalue ) {
    let counter1 = 0;
    for (let i = 0; i < arrvalue.length; i++) {
        if (arrvalue[i] > 7) {
            counter1 += 1;
        }
    }
    return counter1;
}
const arroutput1 = cumLaude( [8,9,4,6,10] );
console.log( arroutput1 );


// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.


const studentGrades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let sum=0;
let gemiddelde=0;
    for (let i = 0; i < studentGrades.length; i++) {
        sum += studentGrades[i];
    }
gemiddelde=sum/studentGrades.length;
console.log( gemiddelde );

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.


//const studentGrades1 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
let sum1=0;
let gemiddelde1=0;
function averageGrade (stuGrade) {
    //console.log("length is"+stuGrade.length);
    for (let i = 0; i < stuGrade.length; i++) {
        sum1 += stuGrade[i];
    }
    average = sum1 / stuGrade.length;
    return average;
}
//const outputAverage = averageGrade([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]);
//const outputAverage = averageGrade([6,4,5]);
const outputAverage = averageGrade([8,9,4,6,10]);
console.log(outputAverage );

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

let sum2=0;
let average1=0;
function averageGrade1 (stuGrade1) {
    //console.log("length is"+stuGrade.length);
    for (let i = 0; i < stuGrade1.length; i++) {
        sum2 += stuGrade1[i];
    }
    average1 = sum2 / stuGrade1.length;
    const afTweeDecimal = average1.toFixed(2);
    return afTweeDecimal;
}
const outputAverage1 = averageGrade1([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]);
//const outputAverage = averageGrade([6,4,5]);
//const outputAverage = averageGrade([8,9,4,6,10]);
console.log(outputAverage1 );


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

console.log(Math.max(9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6));

const array3 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
console.log(Math.max(...array3));// ...spread operator


// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

let largest=0;
function higestGrade(arrVal) {
    for (let i = 0; i < arrVal.length; i++) {
        if(arrVal[i]>largest){
            largest = arrVal[i];
        }
    }
    return largest;
}
const outputhoogsteCifer1=higestGrade([8, 9, 4, 10, 6]);
//const outputhoogsteCifer2=higestGrade([6,4,5]);
//const outputhoogsteCifer3=higestGrade([9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6]);
console.log( outputhoogsteCifer1 );
//console.log( outputhoogsteCifer2 );
//console.log( outputhoogsteCifer3 );

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
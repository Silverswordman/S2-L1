/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/*
I datatype sono valori che si assegnano alla variabile.
 Il primo datatype principale di Javascrypt è la Stringa , ovvero una sequenza di caratteri inclusa tra due apici che indica un valore alfanumerico alla variabile ad esempio:*/

let FirstData = "Stringa";
console.log(FirstData);

/*Il secondo datatype è di tipo Numerico e assegna un valore Numerico alla variabile anche decimale e non è incluso negli apici  */
let SecondData = 2;
console.log(SecondData);
/*se incluso negli apici il numero viene considerato un carattere e quindi una stringa */

let SecondDataString = "2";
console.log(SecondDataString);

/* Il terzo datatype è di tipo Booleano e quindi può assumere solo definizioni di True o False*/

let ThirdData = true;
console.log(ThirdData);

/*Il Quarto datatype principale è chiamato Undefined ovvero una variabile che non ha un valore già definito */

let FourthData;

console.log(FourthData);

FourthData = "Defined";
console.log(FourthData);

/* Il Quinto datatype principale è il null ovvero l'annullamento intenzionale del valore di una variabile */

let FifthData = 5;
console.log(FifthData);

FifthData = null;
console.log(FifthData);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let FirstName = "Giulia";
console.log(FirstName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let number1 = 12;
let number2 = 20;
console.log(number1 + number2);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

FirstName = "Silvestrini";
console.log(FirstName);

// variabile con const.

const Surname = "Silvestrini";
console.log(Surname);

// const Surname="Silver"
// console.log (Surname) SYNTAXERROR

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log(x - 4);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";

console.log(name1 === name2);
// name1 è diverso da name 2 quindi john e John non sono lo stesso valore

console.log(name1.toLowerCase() === name2.toLowerCase());

// Esperimento con entrambi uppercase
console.log(name1.toUpperCase() === name2.toUpperCase());

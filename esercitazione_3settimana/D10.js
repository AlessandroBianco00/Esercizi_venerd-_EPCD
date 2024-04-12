/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

let sum = 10 + 20;
console.log('Esercizio A', sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

let random = Math.floor(Math.random()*21);
console.log('Esercizio B', random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

let me = {name: 'Alessandro', surname: 'Bianco', age: 23};
console.log('Esercizio C', me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log('Esercizio D', me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ['HTML', 'CSS', 'JS'];
console.log('Esercizio E', me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push('Github');
console.log('Esercizio F', me.skills);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();
console.log('Esercizio G', me.skills);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
  let diceValue = Math.ceil(Math.random()*6);
  return diceValue;
}
console.log('Esercizio 1', dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger (num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return 'Inserisci 2 numeri';
  } else if (num1 > num2) {
    return num1;
  } else if (num1 < num2){
    return num2;
  } else {
    return 'I due parametri hanno stesso valore';
  }
}
console.log('Esercizio 2', whoIsBigger(150, 65));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(str) {
  let arrayParole = str.split(' ');
  return arrayParole;
}
console.log('Esercizio 3', splitMe('Lorem Ipsum is simply dummy text'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne (str, bool) {
  if (typeof str !== 'string' || typeof bool !== 'boolean') {
    return 'Inserisci come primo parametro una stringa e secondo un booleano';
  } else {
    if (bool) {
      let coda = str.slice(1, str.length);
      return coda;
    } else {
      let testa = str.slice(0, str.length-1);
      return testa;
    }
  }
}
console.log('Esercizio 4', deleteOne('Accipigna', true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters (str) {
  if (typeof str !== 'string') {
    return 'Inserisci una stringa';
  } else {
    let array5 = str.split(' ');
    for (let i = array5.length; i > 0; i--) {
      let parola = array5[i-1];
      if (parola == parseInt(parola)) {
        array5.splice(i-1,1);
      }
    }
    return array5;
  }
}
console.log('Esercizio 5', onlyLetters('Io ho 4 cani'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail (str) {
  if (typeof str !== 'string') {
    return 'Inserisci una stringa'; 
  } else {
    if (!str.includes('@')) {
      return 'Non hai inserito un email valida';
    } else if (str.split('@').length === 2) {
      return true
    } else {
      return 'Non hai inserito un email valida';
    }
  }
}
console.log('Esercizio 6', isThisAnEmail('mario.rossi@gmail.it'));

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  let date = new Date();
  let day = date.getDay()
  let arrayGiorni = ['Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato', 'Domenica'];
  return 'Oggi è ' + arrayGiorni[day-1];
}
console.log('Esercizio 7', whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

const rollTheDices = (numero) => {
  if (typeof numero !== 'number') {
    return 'Inserisci un numero';
  } else {
    let tiroDadi = {};
    let somma = 0
    let valori =[]
    for (let i =0; i < parseInt(numero); i++) {
      let dado = dice()
      somma += dado;
      valori.push(dado);
    }
    tiroDadi.sum = somma;
    tiroDadi.values = valori;
    return tiroDadi;
  }
}
console.log('Esercizio 8', rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

let vecchiaData = new Date(2008,6-1,4) //4 giugno 2008
let oggi = new Date()
function howManyDays(date1, date2) {
  let giorniTrascorsi;
  let tv1 = date1.valueOf();  // in millisecondi dal 1970
  let tv2 = date2.valueOf();
  giorniTrascorsi = (tv2 - tv1) / 1000 / 86400; /*porto dall ms a s e da s a giorni*/
  giorniTrascorsi = Math.round(giorniTrascorsi -0.5);
  return giorniTrascorsi;
}
console.log('Esercizio 9', howManyDays(vecchiaData, oggi));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday (giorno, mese) {
  if (typeof giorno !== 'number' || typeof mese !== 'number') {
    return 'Inserisci il tuo compleanno numericamente come dd, mm';
  } else {
    let data = new Date();
    let giornoOdierno = data.getDate();
    let meseCorrente = data.getMonth();
    if (giornoOdierno === giorno && meseCorrente + 1 === mese) {
      return true;
    } else {
      return false;
    }
  }
}
console.log('Esercizio 10', isTodayMyBirthday(12,4));

// Arrays & Oggetti

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

let maglietta = {'colore': 'blu', 'taglia': 'M', 'prezzo': 15, 'materiale': 'cotone'}
function deleteProp (oggetto, parametro) {
  delete oggetto.parametro;
  return oggetto;
}
console.log('Esercizio 11', deleteProp(maglietta, 'materiale'));

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

const filmNuovo = (array) => {
  let result = {Year: 0};
  array.forEach((movie) => {
    let currentYear = parseInt(movie.Year)
    if (currentYear > result.Year) {
      result = movie
    }
  })
  return result;
}
console.log('Esercizio 12', filmNuovo(movies));

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

const numeroFilm = (array) => {
  return array.length;
}
console.log('Esercizio 13', numeroFilm(movies));

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears (array) {
  let arrayAnni =[];
  array.forEach((movie) => {
    arrayAnni.push( movie.Year);
  })
  return arrayAnni;
}
console.log('Esercizio 14', onlyTheYears(movies));

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

const onlyInLastMillennium = (array) => {
  return array.filter((movie) => parseInt(movie.Year) < 2000);
}
console.log('Esercizio 15', onlyInLastMillennium(movies));


/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears (array) {
  let somma = 0;
  array.forEach((movie) => {
    somma += parseInt(movie.Year);
  })
  return somma;
}
console.log('Esercizio 16', sumAllTheYears(movies));

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

const searchByTitle = (array, titolo) => {
  return array.filter((movie) => movie.Title.includes(titolo));
} 
console.log('Esercizio 17', searchByTitle(movies, 'of'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

const searchAndDivide = (array, titolo) => {
  let match =[];
  let unmatch = [];
  let risultato =[match, unmatch];
  for (let i = 0; i < array.length; i++) {
    if (array[i].Title.includes(titolo)) {
      match.push(array[i]);
    }else {
      unmatch.push(array[i]);
    }
  }
  return risultato;
} 
console.log('Esercizio 18', searchAndDivide(movies, 'of'));


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

const removeIndex = (array, posizione) => {
  array.splice(posizione-1,1);
  return array;
}
console.log('Esercizio 19', removeIndex(movies, 4));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

function selectCont () {
  container = document.getElementById('container');
  return container;
}
console.log('Esercizio 20', selectCont())

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectTd () {
  tableData = document.querySelectorAll('td');
  return tableData;
}
console.log('Esercizio 21', selectTd())

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function stampaDati () {
  dati = selectTd();
  for (let i = 0; i < dati.length; i++) {
    let singoloDato = document.querySelectorAll('td')[i]
    console.log(singoloDato.innerHTML)
  }
}
console.log('Esercizio 22');
stampaDati();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

const paintItRed = () => {
  href = document.querySelectorAll('a[href]');
  for (let i = 0; i < href.length; i++) {
    href[i].classList.add('link');
  }
}
console.log('Esercizio 23');
paintItRed();


/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addAtList () {
  list = document.getElementById('myList');
  li = document.createElement('li');
  li.innerHTML = 'Esercizio 24'
  list.appendChild(li);
}
console.log('Esercizio 24');
addAtList()

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function emptyList () {
  list = document.getElementById('myList');
  list.innerHTML = '';
}
console.log('Esercizio 25');
emptyList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

const rowClass = () => {
  tableRows = document.querySelectorAll('tr');
  tableRows.forEach((tr) => tr.classList.add('test'))
}
console.log('Esercizio 26');
rowClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

function halfTree (num) {
  let cont = document.getElementById('mezzoalbero');
  for (let i = 1; i < num+1; i++) {

    for (let j = 0; j < i; j++) {
      cont.innerHTML += '*'
    }
    cont.innerHTML += `<br>`

  }
}
console.log('Esercizio 27');
halfTree(4);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

function tree (num) {
  let cont = document.getElementById('alberointero');
  cont.setAttribute('style', 'text-align: center')
  for (let i = 0; i < num; i++) {

    for (let j = 0; j < 2*i +1; j++) {
      cont.innerHTML += '*'
    }
    cont.innerHTML += `<br>`

  }
}
console.log('Esercizio 28');
tree(4);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

function isItPrime (num) {
  if (typeof num !== 'number' || num < 2) {
    return 'Inserisci un numero intero, maggiore di 1';
  } else {
    parseInt(num);
    if (num === 2 || num === 3) {
      return true;
    } else {
      for (let i = 2; i < num/2; i++) {
        if (num%i === 0) {
          return false;
        }
      }
      return true;
    }
  }
}
console.log('Esercizio 29', isItPrime(4));
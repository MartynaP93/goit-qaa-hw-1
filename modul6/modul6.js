// Wyjaśnienie this w JS
// Wartość this jest określana przez sposób wywołania funkcji, a nie przez miejsce, w którym została zadeklarowana.
// This wskazuje na obiekt będący kontekstem wykonania.
// Przyklady:
// 1. W zasięgu globalnym, jeśli skrypt nie jest wykonywany w trybie ścisłym, this odnosi się do obiektu window.
// W trybie ścisłym wartość this, w zasięgu globalnym będzie undefined.
// 2. Jeśli funkcja została wywołana jako metoda obiektu, to kontekst będzie odnosił się do obiektu,
// którego częścią jest metoda.

// Zastosowanie praktyczne

const person = {
  username: "Maciej",
  // Metoda zapisująca imię osoby w konsoli
  showName() {
    // implementacja funkcji do wyświetlenia imienia
    console.log(this.username);
  },
};
// Wywołanie metody showName dla obiektu person
person.showName(); // 'Maciej'

//Przykład rozszerzony
const bookshelf = {
  authors: [],
  // Metoda zwracająca tablicę autorów
  getAuthors() {
    return this.authors;
  },
  // Metoda dodająca autora do tablicy autorów
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

// Dodanie klilku autorów do półki na ksiązki
bookshelf.addAuthor("J. K. Rowling");
bookshelf.addAuthor("Stephen King");
bookshelf.addAuthor("Dan Brown");

// Pobranie listy autorów z półki z ksiązkami
const authorsList = bookshelf.getAuthors();
console.log(authorsList); // ["J. K. Rowling", "Stephen King", "Dan Brown"]

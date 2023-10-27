class Books {
    constructor({
        title,
        author,
    }) {
        this.title = title;
        this.author = author;
    }
}

let listOfBook = JSON.parse(localStorage.getItem('listbook')) || [];




function getData() {
    let getTitle = document.getElementById("title").value;
    let getAuthor = document.getElementById("author").value;
    
    const book = new Books({
        title: getTitle,
        author: getAuthor,
    });
    listOfBook.push(book);

    localStorage.setItem("listbook", JSON.stringify(listOfBook) );

    showBooks() 


}

showBooks() 


function showBooks() {
    let listas2 = document.getElementById("list");
    
    // Borra el contenido anterior de la lista
    while (listas2.firstChild) {
        listas2.removeChild(listas2.firstChild);
    }
    
    // Añade los nuevos elementos de la lista
    listOfBook.forEach(theBook => {
        var celda = document.createElement('p');
        celda.appendChild(document.createTextNode(theBook.title));
        listas2.appendChild(celda);
    });
}










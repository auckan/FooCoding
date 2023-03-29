"use strict";

{
  const bookTitles = [
    "harry_potter_chamber_secrets",
    "lord_the_rings_the_fellowship_of_the_ring",
    "dune_children_of_dune",
    "earthsea_wizard_of_earthsea",
    "the_hobbit",
    "lord_the_rings_the_two_towers",
    "runestone_saga_children_of_ragnarok",
    "world_of_warcraft_the_last_guardian",
    "the_legend_of_drizzt_exile",
    "lord_the_rings_the_return_of_the_king",
  ];

  const bookDetails = {
    harry_potter_chamber_secrets: {
      title: "Harry Potter Chamber of the Secrets",
      language: "English",
      author: "J.K.Rowling",
    },

    lord_of_the_rings_the_fellowship_of_the_ring: {
      title: "Lord of the Rings Fellowship of the Ring",
      language: "English",
      author: "J.R.Tolkien",
    },

    dune_children_of_dune: {
      title: "Dune - Children of Dune",
      language: "English",
      author: "Frank Herbert",
    },

    earthsea_wizard_of_earthsea: {
      title: "Wizard of Earthsea",
      language: "English",
      author: "Ursula K. Le Guin",
    },

    the_hobbit: {
      title: "The Hobbit",
      language: "English",
      author: "J.R.Tolkien",
    },

    lord_the_rings_the_two_towers: {
      title: "Lord of the Rings The Two Towers",
      language: "English",
      author: "J.R.Tolkien",
    },

    runestone_saga_children_of_ragnarok: {
      title: "Runestone Saga - Children of Ragnarok",
      language: "English",
      author: "Cinda Williams Chima",
    },

    world_of_warcraft_the_last_guardian: {
      title: "World of Warcraft - The Last Guardian",
      language: "English",
      author: "Jeff Grubb",
    },

    lord_the_rings_the_return_of_the_king: {
      title: "Lord of the Rings The Return Of The King",
      language: "English",
      author: "J.R.Tolkien",
    },

    neverwinter_saga_charon_claw: {
      title: "Neverwinter Saga - Charon Claw",
      language: "English",
      author: "R.A.Salvatore",
    },
  };

  const bookImages = {
    harry_potter_chamber_secrets: "./images/chamber-of-secrets-book-cover.jpg",
    lord_of_the_rings_the_fellowship_of_the_ring:
      "./images/lotr_fellowship_book_cover.jpg",
    dune_children_of_dune: "./images/dune_book_cover.jpg",
    earthsea_wizard_of_earthsea: "./images/earthsea_book_cover.jpg",
    the_hobbit: "./images/hobbit_book_cover.jpg",
    lord_the_rings_the_two_towers: "./images/lotr_two_towers_book_cover.jpg",
    runestone_saga_children_of_ragnarok:
      "./images/runestone_saga_book_cover.jpg",
    world_of_warcraft_the_last_guardian:
      "./images/last_guardian_book_cover.jpg",
    lord_the_rings_the_return_of_the_king:
      "./images/lotr_retun_of_the_king_book_cover.jpg",
    neverwinter_saga_charon_claw: "./images/drizz_charon_claw_book_cover.jpg",
  };

  ///////////// ARRAY BOOK LIST FUNCTION /////////////
  // function createBookList(myArray) {
  //   const bookUl = document.createElement("ul");
  //   bookUl.setAttribute("Id", "book-list");
  //   document.body.appendChild(bookUl);

  //   for (let i = 0; i <= myArray.length - 1; i++) {
  //     const items = myArray[i];
  //     console.log(items);

  //     const liItems = document.createElement("li");
  //     liItems.setAttribute("id", "book" + i);
  //     document.getElementById("book-list").appendChild(liItems);

  //     document.getElementById("book" + i).innerHTML = myArray[i];
  //   }
  // }

  const bookUl = document.createElement("ul");
  bookUl.setAttribute("Id", "book-list");
  document.body.appendChild(bookUl);

  function createBookList(myObject) {
    for (let book in myObject) {
      const title = myObject[book].title;
      const language = myObject[book].language;
      const author = myObject[book].author;

      const li = document.createElement("li");
      const header = document.createElement("H3");
      bookUl.appendChild(li);
      li.appendChild(header);
      li.setAttribute("id", book);
      header.textContent = title;

      const p1 = document.createElement("p");
      li.appendChild(p1);
      p1.innerText = `Language: ${language}`;
      p1.setAttribute("id", "language");

      const p2 = document.createElement("p");
      li.appendChild(p2);
      p2.innerText = ` Author: ${author}`;
      p2.setAttribute("id", "author");
    }
  }

  function placeImages(objectName) {
    const keys = Object.keys(objectName);
    keys.forEach((key) => {
      console.log(`${objectName[key]}`);
      const target = document.getElementById(key);
      const image = document.createElement("img");
      target.appendChild(image);
      image.setAttribute("alt", key);
      image.setAttribute("id", key);
      image.setAttribute("src", objectName[key]);
    });
  }

  createBookList(bookDetails);
  placeImages(bookImages);
}

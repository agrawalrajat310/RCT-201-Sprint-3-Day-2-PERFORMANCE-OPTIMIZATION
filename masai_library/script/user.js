const GetData = async () => {
  let res = await fetch("http://localhost:8080/books");
  let data = await res.json();

  AppendData(data);
};

document.getElementById("filter").addEventListener("change", () => {
  FilterSort();
});

document.getElementById("year").addEventListener("change", () => {
  FilterSort();
});

const FilterSort = async () => {
  try {
    let res = await fetch("http://localhost:8080/books");
    let data = await res.json();
    // console.log(data);
    let newArr = data;
    let val = document.querySelector("#filter").value;
    let sort = document.querySelector("#year").value;

    // console.log(val, sort);
    if (val !== "") {
      newArr = newArr.filter((el) => {
        if (el.genre === val) {
          return true;
        }
      });
    }

    if (sort == "asc") {
      newArr.sort((a, b) => {
        return Number(a.edition) - Number(b.edition);
      });
    } else if (sort == "desc") {
      newArr.sort((a, b) => {
        return Number(b.edition) - Number(a.edition);
      });
    }

    console.log(newArr);
    AppendData(newArr);
  } catch (error) {
    console.log(error);
  }
};

let parent = document.getElementById("parent");

function AppendData(data) {
  parent.innerHTML = null;
  data.map((el) => {
    let card = document.createElement("div");
    card.id = "card";
    let child = document.createElement("div");
    child.id = "child";

    let image = document.createElement("img");
    image.src = el.image_url;

    let name = document.createElement("h3");
    name.innerHTML = el.book_name;

    let price = document.createElement("p");
    price.innerHTML = "Price: " + el.cost;

    let author = document.createElement("p");
    author.innerHTML = "Author: " + el.author;

    let genre = document.createElement("p");
    genre.innerHTML = "Genre: " + el.genre;

    let edition = document.createElement("p");
    edition.innerHTML = "Edition: " + el.edition;

    let publish = document.createElement("p");
    publish.innerHTML = "Publisher:  " + el.publisher;

    let btn = document.createElement("button");
    btn.innerHTML = "Borrow";
    btn.addEventListener("click", () => {
      OpenModal(el);
    });

    child.append(name, author, genre, edition, publish, price, btn);

    card.append(image, child);
    parent.append(card);
  });
}

function OpenModal(el) {
  let modal = document.getElementById("modal");
  modal.style.display = "block";
  modal.innerHTML = "";
  let modalcard = document.createElement("div");
  modalcard.id = "modalcard";

  let modaldiv = document.createElement("div");
  modaldiv.id = "modaldiv";

  let image = document.createElement("img");
  image.src = el.image_url;
  // div1.append(image);

  let name = document.createElement("h3");
  name.innerHTML = el.book_name;

  let author = document.createElement("p");
  author.innerHTML = "Author: " + el.author;

  let filter = document.createElement("p");
  filter.innerHTML = "Genre: " + el.genre;

  let year = document.createElement("p");
  year.innerHTML = "Year: " + el.edition;

  let publish = document.createElement("p");
  publish.innerHTML = "Publisher:  " + el.publisher;

  let btn = document.createElement("button");
  btn.innerHTML = "Close";
  btn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  let btn2 = document.createElement("button");
  btn2.innerHTML = "Confirm";
  btn2.addEventListener("click", (e) => {
    e.preventDefault();
    Borrowedfun(el);
  });

  modaldiv.append(name, author, filter, year, publish, btn, btn2);

  modalcard.append(image, modaldiv);

  modal.append(modalcard);
}
// Borrowed Fun
async function Borrowedfun(el) {
  let payload = {
    borrowed: true,
  };
  let res = await fetch(`http://localhost:8080/books/${el.id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = res.json();
  // console.log(data);

  window.location.href = "../borrow.html";
}

GetData();

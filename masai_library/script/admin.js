document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("token");
  window.location.href = "index.html";
});

async function getData() {
  let res = await fetch("http://localhost:8080/books");
  let data = await res.json();
  AppendTable(data);
}

document.getElementById("submit").addEventListener("click", async (e) => {
  e.preventDefault();
  PostData();
});

async function PostData() {
  let image = document.getElementById("image").value;
  let name = document.getElementById("name").value;
  let author = document.getElementById("author").value;
  let genre = document.getElementById("filter").value;
  let edition = document.getElementById("year").value;
  let cost = document.getElementById("cost").value;
  let publish = document.getElementById("publisher").value;

  let payload = {
    image_url: image,
    book_name: name,
    author: author,
    genre: genre,
    edition: edition,
    publisher: publish,
    cost: cost,
    borrowed: false,
  };

  // make post request;

  let res = await fetch("http://localhost:8080/books", {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  getData();
}

function AppendTable(data) {
  let table = document.getElementById("table");
  data.map((el) => {
    let tr = document.createElement("tr");

    let td1 = document.createElement("td");

    let img = document.createElement("img");
    img.src = el.image_url;
    td1.append(img);

    let td2 = document.createElement("td");

    let p1 = document.createElement("p");
    p1.innerText = el.book_name;
    td2.append(p1);
    let td3 = document.createElement("td");

    let p2 = document.createElement("p");
    p2.innerText = el.author;
    td3.append(p2);

    let td4 = document.createElement("td");
    let p3 = document.createElement("p");
    p3.innerText = el.genre;
    td4.append(p3);

    let td5 = document.createElement("td");
    let p4 = document.createElement("p");
    p4.innerText = el.edition;
    td5.append(p4);

    let td6 = document.createElement("td");
    let p5 = document.createElement("p");
    p5.innerText = el.publisher;
    td6.append(p5);

    let td7 = document.createElement("td");
    let p6 = document.createElement("p");
    p6.innerText = el.cost;
    td7.append(p6);

    let td8 = document.createElement("td");

    let btn = document.createElement("button");
    btn.innerText = "Edit";
    btn.addEventListener("click", () => {
      EditFun(el);
    });
    td8.append(btn);

    let td9 = document.createElement("td");
    let del = document.createElement("button");
    del.innerText = "Delete";
    del.addEventListener("click", () => {
      DeleteData(el.id);
    });
    td9.append(del);

    tr.append(td1, td2, td3, td4, td5, td6, td7, td8, td9);
    table.append(tr);
  });
}

// delete func
async function DeleteData(id) {
  let res = await fetch(`http://localhost:8080/books/${id}`, {
    method: "DELETE",
  });
  getData();
}

// edit function

function EditFun(el) {
  document.getElementById("modal").style.display = "block";
  FormUpdate(el);
}
// 
let obj;

async function FormUpdate(el) {
  obj = el;
  // console.log(el)
  document.getElementById("image_edit").value = el.image_url;
  document.getElementById("name_edit").value = el.book_name;
  document.getElementById("author_edit").value = el.author;
  document.getElementById("filter_edit").value = el.genre;
  document.getElementById("edition_edit").value = el.edition;
  document.getElementById("cost_edit").value = el.cost;
  document.getElementById("publisher_edit").value = el.publisher;
}

document.getElementById("update_btn").addEventListener("click", async (e) => {
  e.preventDefault();

  let image = document.getElementById("image_edit").value;
  let name = document.getElementById("name_edit").value;
  let author = document.getElementById("author_edit").value;
  let genre = document.getElementById("filter_edit").value;
  let edition = document.getElementById("edition_edit").value;
  let cost = document.getElementById("cost_edit").value;
  let publisher = document.getElementById("publisher_edit").value;

  let payload = {
    image_url: image,
    book_name: name,
    author: author,
    genre: genre,
    edition: edition,
    publisher: publisher,
    cost: cost,
    borrowed: false,
  };

  let res = await fetch(`http://localhost:8080/books/${obj.id}`, {
    method: "PATCH",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(payload)

  getData();
});

getData();

const GetData = async () => {
  let res = await fetch("http://localhost:8080/books");
  let data = await res.json();

  AppendData(data);
 
};

let parent = document.getElementById("parent");
function AppendData(data) {
  parent.innerHTML = null;
  let arr = data.filter((ele) => ele.borrowed == true);

  if (arr.length == 0) {
    let h1 = document.createElement("h1");
    h1.innerHTML = "No Borrrowed Books available";
    parent.append(h1);
    return;
  }

  // console.log(data);
  data.map((el) => {
    if (el.borrowed == true) {
      let table= document.createElement("table")
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
  
      tr.append(td1, td2, td3, td4, td5, td6);
      table.append(tr);
      parent.append(table)
    }
  });
}

GetData();

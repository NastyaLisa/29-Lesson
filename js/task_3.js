document.querySelector(".task3").style.backgroundColor = "aqua";

async function getData(url) {
  let result = await fetch(url);

  let response = await result.json();

  let titlesA = await response.filter((item) => item.title.startsWith("a"));

  let userA = [];
  for (let i = 0; i < titlesA.length; i++) {
    userA += JSON.stringify(titlesA[i]) + "<br/>";
  }

  let titlesAb = await titlesA.filter((item) => item.title.startsWith("ab"));

  let userAb = [];
  for (let i = 0; i < titlesAb.length; i++) {
    userAb += JSON.stringify(titlesAb[i]) + "<br/>";
  }

  document.querySelector(".user-a1").innerHTML = userA;
  document.querySelector(".user-ab1").innerHTML = userAb;
}

getData("https://jsonplaceholder.typicode.com/todos/");

document.querySelector('.task4').style.backgroundColor = 'aqua';

async function getData(url) {
  userA = "";
  userAb = "";

  let result = await fetch(url);

  let response = await result.json();

  let titlesA = await response.filter((item) => item.title.startsWith("a"));

  for (let i = 0; i < titlesA.length; i++) {
    userA += JSON.stringify(titlesA[i]) + "<br/>";
  }

  let titlesAb = await titlesA.filter((item) => item.title.startsWith("ab"));

  for (let i = 0; i < titlesAb.length; i++) {
    userAb += JSON.stringify(titlesAb[i]) + "<br/>";
  }
}

getData("https://jsonplaceholder.typicode.com/todos/");

document.querySelector(".add-a").onclick = function () {
  document.querySelector(".user-a").innerHTML = userA;
  document.querySelector(".user-ab").innerHTML = "";
};

document.querySelector(".add-ab").onclick = function () {
  document.querySelector(".user-ab").innerHTML = userAb;
  document.querySelector(".user-a").innerHTML = "";
};

document.querySelector(".add-all").onclick = function () {
  document.querySelector(".user-a").innerHTML = userA;
  document.querySelector(".user-ab").innerHTML = userAb;
};

//Task 1

function getData(url) {
  let promise = new Promise(function (resolve, reject) {
    fetch(url).then((response) => {
      if (response.ok) {
        resolve(response.json());

        reject(new Error(`Error: ${response.status}`));
      }
    });
  });
  promise.then((data) => {
    titles = data.filter((item) => item.title.startsWith("a"));
    console.log(titles);
  });
}

getData("https://jsonplaceholder.typicode.com/todos/");

function getData(url) {
  let result = fetch(url);
  result
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: ${response.status}`);
    })
    .then((data) => {
      titles = data.filter((item) => item.title.startsWith("a"));
      console.log(titles);
    })
    .catch((error) => console.log(error.message));
}

getData("https://jsonplaceholder.typicode.com/todos/");

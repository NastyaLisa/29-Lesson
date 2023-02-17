//Task 2

async function getData(url) {
  try {
    let result = await fetch(url);

    if (result.ok) {
      let response = await result.json();
      let titles = await response.filter((item) => item.title.startsWith("a"));
      console.log(titles);
    } else {
      throw new Error(`Error: ${response.status}`);
    }
  } catch (error) {
    console.log(error.message);
  }
}
getData("https://jsonplaceholder.typicode.com/todos/");

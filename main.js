const reguestUrl = "https://api.tvmaze.com/search/shows?q=animals";
// const reguestUrl='https://jsonplaceholder.typicode.com/posts'
// const requestUrl = "https://my-json-server.typicode.com/falk20/demo/todos";
const dataWrapper = document.getElementById("data-wrapper");

const createTemplate = (data) => {
  let genres = [];

  if (data.show.genres.length) {
    genres = data.show.genres.reduce((acc, item) => {
      return acc + ", " + item;
    });
  } else {
    genres = "NONE";
  }

  return `
        <div class="data-item">
            <div class="image">
                <img src="${
                  data.show.image ? data.show.image.medium : ""
                }" alt="">
            </div>
            <div><span>Name:</span>${data.show.name}</div>
            <div><span>Score:</span>${data.score}</div>
            <div><span>Genres:</span>${genres}</div>
            <div><span>Language:</span>${data.show.language}</div>   
            <div><span>Description:</span>${data.show.summary}</div>   
        </div>
    `;
};

fetch(reguestUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      dataWrapper.innerHTML += createTemplate(item);
    });
  });

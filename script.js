const search = document.querySelector(".search");
const list = document.querySelectorAll("li");

const searchHandler = (e) => {
  const text = e.target.value.toLowerCase();

  list.forEach((element) => {
    if (element.textContent.toLowerCase().indexOf(text) !== -1) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
};

search.addEventListener("keyup", searchHandler);

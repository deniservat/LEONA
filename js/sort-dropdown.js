// SORT DROPDOWN

var dropdown = document.querySelector(".input-box");
var list = document.querySelector(".list");

dropdown.onclick = function () {
  this.classList.toggle("open");
  list.style.maxHeight = list.style.maxHeight ? null : list.scrollHeight + "px";
  list.style.boxShadow = list.style.maxHeight ? 
    "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)" : null;
};

list.addEventListener("change", function(event) {
  if (event.target.classList.contains("radio")) {
    dropdown.innerHTML = event.target.nextElementSibling.innerHTML;
    dropdown.click();
  }
});

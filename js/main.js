var input = document.querySelector(".input-box");
input.onclick = function () {
    this.classList.toggle("open");
    let list = this.nextElementSibling;
    if (list.style.maxHeight) {
        list.style.maxHeight = null;
        list.style.boxShadow = null;
    } else {
         list.style.maxHeight = list.scrollHeight + "px";
        list.style.boxShadow =
        "0 1px 2px 0 rgba(0, 0, 0, 0.15),0 1px 3px 1px rgba(0, 0, 0, 0.1)";
        }
};

var rad = document.querySelectorAll(".radio");
rad.forEach((item) => {
item.addEventListener("change", () => {
input.innerHTML = item.nextElementSibling.innerHTML;
input.click();
});
});


//LO QUE ESTABA HACIENDO YO
/* const options = ["Most popular", "Highest price" , "Lowest price"];
let optionSelected = document.getElementById("select")
optionSelected.innerHTML = options[0];


optionSelected.addEventListener("click", (e) => {
    e.preventDefault();
    optionSelected.innerHTML = `<h3 class="filter-value">Select</h3>`;
    let dropdown = document.getElementById("dropdown-menu");
    let option;
    for(let i =0; i< options.length; i++){
        option = document.createElement("div");
        option.classList.add("option");
        option.innerHTML = `${options[i]}`;
        dropdown.appendChild(option);
    }
    },{once:true});

    optionSelected.addEventListener("click", (e) => {
        e.preventDefault();
        if(dropdown){
            dropdown.innerHTML = "";
            optionSelected.innerHTML = options[0];
           }},{once:true});
 */



//NEWSLETTER

$.ajax({
    url: "https://formsubmit.co/ajax/deniservat@gmail.com",
    method: "POST",
    data: {
        name: "FormSubmit",
        message: "I'm from Devro LABS"
    },
    dataType: "json"
});
const form = document.querySelector("#form");

console.dir(form)

form.addEventListener("submit", event => {
    event.preventDefault();
    form.children[2].innerHTML = form.children[0].value.length;
})
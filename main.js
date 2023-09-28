const input = document.getElementById("inp");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const search = document.getElementById("search")

btn.addEventListener("click", () => {
  if (input.value == "") return;

  const elem = document.createElement("div");
  const text = document.createElement("span");
  const remove = document.createElement("button");

  text.textContent = input.value;
  remove.textContent = "X"; 

  elem.appendChild(text);
  elem.appendChild(remove);
  list.appendChild(elem);

  input.value = "";
});

list.addEventListener("click", (e) => {
  if (e.target.tagName != "BUTTON") return;

  e.target.parentElement.remove();
});

search.addEventListener("input", ()=>{

    for (let index = 0; index < list.children.length; index++) {
        const element = list.children[index];
        if (element.querySelector("span").innerHTML.toLocaleLowerCase().includes(search.value.toLocaleLowerCase())) element.hidden = false

        else element.hidden = true
        
    }
})
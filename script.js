const notesEl = document.querySelector(".notes");

const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

const main = notesEl.querySelector(".main");
const textarea = notesEl.querySelector("textArea");

editBtn.addEventListener("click", () => {
  main.classList.toggle("hidden");
  textarea.classList.toggle("hidden");
});

textarea.addEventListener("input", (e) => {
  const { value } = e.target;
  console.log(value);
  main.innerHTML = marked(value);
});

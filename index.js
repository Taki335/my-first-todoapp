const form = document.getElementById("form")
const input =  document.getElementById("input")
const ul = document.getElementById("ul")

const todos = JSON.parse(localStorage.getItem("todos"))

if (todos) todos.forEach(todo => add(todo))


form.addEventListener("submit", event => {
  event.preventDefault()
  add()
})

const add = todo => {
  let todoText = todo ? todo.text : input.value

  if (todoText.length) {
    const li = document.createElement("li")
    li.innerText = todoText
    li.classList.add("list-group-item")

    if (todo && todo.completed) li.classList.add("text-decoration-line-through")

    li.addEventListener("contextmenu", event => {
      event.preventDefault()
      if (!confirm("削除しますか？")) return
      li.remove()
      saveData()
    })

    li.addEventListener("click",  () => {
      li.classList.toggle ("text-decoration-line-through")
      saveData()
    })

    ul.appendChild(li)
    input.value = ""
    saveData()
  }
}

const saveData = () => {
  const lists = document.querySelectorAll("li")
  const todos = lists.map(list => {
    return {
      text: list.innerText,
      completed: list.classList.contains("text-decoration-line-through")
    }
  })
  localStorage.setItem('todos', JSON.stringify(todos))
}
const formCreate = document.getElementById('form-create')
const formEdit = document.getElementById('form-edit')
const listGroupTodo = document.getElementById('list-group-todo')
// const messageCreate = document.getElementById('message-create')
const time = document.getElementById('time')
const modal = document.getElementById('modal')
const overlay = document.getElementById('overlay')
/* time elements */
const fullDay = document.getElementById('full-day')
const hourEl = document.getElementById('hour')
const minuteEl = document.getElementById('minute')
const secondEl = document.getElementById('second')
const closeEl = document.getElementById('close')

let todos = JSON.parse(localStorage.getItem('list')) ? JSON.parse(localStorage.getItem('list')) : []

//settodos
function setTodos() {
    localStorage.setItem('list', JSON.stringify(todos))
}

function showMessage(where, message) {
    document.getElementById(`${where}`).textContent = message
    setTimeout(() => {
        document.getElementById(`${where}`).textContent = ''
    },2500)

}
// get todos 

formCreate.addEventListener('submit', (e) => {
   e.preventDefault()
   const todoText = formCreate['input-create'].value.trim()
    formCreate.reset()
   if (todoText.lenght) {
   todos.push({text: todoText, time: '20:31, 14.01.2023', completed: false})
   setTodos()
   } else {
    showMessage('message-create', 'Iltimos malumot kiriting!')
   }
})


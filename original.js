

    
document.getElementById('original').addEventListener( 'click' , (e)=> {

    div_todos = document.querySelector('#todos')

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {

            todos.forEach(todo => {

                div_todos.innerHTML += ` <input type="checkbox" value='${todo.id}' id='${todo.id}' ${todo.completed ? "checked" : " "} /> 
        <label for='${todo.id}'> ${todo.title} </label> <br>`


            });

        })
        .catch(err => console.error(err));


    getCompletedTodos()



})


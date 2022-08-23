
    document.querySelector('#button').addEventListener( 'click' , ()=> {

        getCompletedTodos();
    
    })
    
    
    function getCompletedTodos() {
        let values = []
    
    
        checked = document.querySelectorAll('input[type=checkbox]:checked')
    
        checked.forEach(chk => values.push(chk.value))
         console.log(values)
    }


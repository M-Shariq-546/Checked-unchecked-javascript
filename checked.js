
    document.getElementById('checked').addEventListener( 'click' , ()=> {
        let chked = document.querySelectorAll('input[type="checkbox"]')
        chked.forEach(function(checkbox) {
           checkbox.checked = true;
        })
   })
   

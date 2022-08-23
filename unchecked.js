
document.getElementById('unchecked').addEventListener( 'click' , ()=> {
    let unchked = document.querySelectorAll('input[type="checkbox"]')
    unchked.forEach(function(checkbox) {
       checkbox.checked = false;
    })
})



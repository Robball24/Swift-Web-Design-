document.querySelector('.email-icon-2').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'flex';
})

document.querySelector('.open-2').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'flex';
})

document.querySelector('.close-2').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none';
})

document.addEventListener('keyup', e =>{
    if (e.keyCode === 27) {
        document.querySelector('.modal').style.display = 'none';
    } 
})
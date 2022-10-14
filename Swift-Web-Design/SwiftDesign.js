
document.querySelector('.open').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'flex';
})

document.querySelector('.email-icon').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'flex';
})


document.querySelector('.close').addEventListener('click', function() {
    document.querySelector('.modal').style.display = 'none'; 
})


document.addEventListener('keyup', e =>{
    if (e.keyCode === 27) {
        document.querySelector('.modal').style.display = 'none';
    } 
})


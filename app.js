const li = document.querySelectorAll('.list li');
li.forEach(item => {
    item.addEventListener('click', function(){
        li.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    })
});
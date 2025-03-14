const li = document.querySelectorAll('.list li');
li.forEach(item => {
    item.addEventListener('click', function(){
        li.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    })
});


document.querySelectorAll('.product-container').forEach(slider => {
    const slideLeftButton = slider.querySelector('.slide-left');
    const slideRightButton = slider.querySelector('.slide-right');
    const itemContainer = slider.querySelector('.item-container');
    const products = Array.from(itemContainer.querySelectorAll('.product'));
    console.log(products);
    
    const productWidth = products[0].offsetWidth ; // Ürün genişliği + margin
    const productsToScroll = 4; // Aynı anda kaydırılacak ürün sayısı
    const scrollAmount = productWidth * productsToScroll; // Kaydırma miktarı
    let currentPosition = 0; 

    slideRightButton.addEventListener('click', function() {
        const maxScroll = (products.length * productWidth) - itemContainer.clientWidth;

        if (currentPosition + scrollAmount < maxScroll) {
            currentPosition += scrollAmount;
        } else {
            currentPosition = maxScroll;
        }

        products.forEach(product => {
            product.style.transform = `translateX(-${currentPosition}px)`;
            product.style.transition = 'transform 0.5s ease-in-out';
        });

        slideLeftButton.style.display = 'block';
    });

    slideLeftButton.addEventListener('click', function() {
        if (currentPosition - scrollAmount > 0) {
            currentPosition -= scrollAmount;
        } else {
            currentPosition = 0;
        }

        products.forEach(product => {
            product.style.transform = `translateX(-${currentPosition}px)`;
            product.style.transition = 'transform 0.5s ease-in-out';
        });

        if (currentPosition === 0) {
            slideLeftButton.style.display = 'none';
        }
    });

    slideLeftButton.style.display = 'none'; 
});

/*Countdown*/
const countdownTime =  1 * 60 * 60 + 25 * 60 + 40;

function updateCountdown(){
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    let remainingTime = countdownTime;

    const interval = setInterval(() => {
        const hours = Math.floor(remainingTime / 3600);
        const minutes = Math.floor((remainingTime % 3600) / 60);
        const seconds = remainingTime % 60;

        // Değerleri iki haneli olarak göster (örneğin, 01:05:09)
        hoursElement.textContent = String(hours).padStart(2, '0');
        minutesElement.textContent = String(minutes).padStart(2, '0');
        secondsElement.textContent = String(seconds).padStart(2, '0');

        if (remainingTime <= 0) {
            clearInterval(interval);
            hoursElement.textContent = '00';
            minutesElement.textContent = '00';
            secondsElement.textContent = '00';
        } else {
            remainingTime--;
        }
    }, 1000); 
}


updateCountdown();



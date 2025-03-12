const li = document.querySelectorAll('.list li');
li.forEach(item => {
    item.addEventListener('click', function(){
        li.forEach(li => li.classList.remove('active'));
        item.classList.add('active');
    })
});


const sliders = document.querySelectorAll('.product-container');

sliders.forEach(slider => {
    const slideLeftButton = slider.querySelector('.slide-left');
    const slideRightButton = slider.querySelector('.slide-right');
    const itemContainer = slider.querySelector('.item-container');
    const productWidth = 200; // Her bir ürünün genişliği
    const productsToScroll = 4; // Aynı anda kaydırılacak ürün sayısı
    const scrollAmount = productWidth * productsToScroll; // Kaydırma miktarı

    
    slideRightButton.addEventListener('click', function() {
        itemContainer.scrollBy({
            left: scrollAmount, 
            behavior: 'smooth' 
        });

       
        slideLeftButton.style.display = 'block';
    });

    
    slideLeftButton.addEventListener('click', function() {
        itemContainer.scrollBy({
            left: -scrollAmount, 
            behavior: 'smooth' 
        });

        
        if (itemContainer.scrollLeft === 0) {
            slideLeftButton.style.display = 'none';
        }
    });

    
    itemContainer.addEventListener('scroll', function() {
        if (itemContainer.scrollLeft === 0) {
            slideLeftButton.style.display = 'none';
        } else {
            slideLeftButton.style.display = 'block';
        }
    });
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



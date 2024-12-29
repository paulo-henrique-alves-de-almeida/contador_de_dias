// swiper
setTimeout(() => {
    const swiper = new Swiper('.swiper', {
        initialSlide: 3,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        allowTouchMove: true,
        slideToClickedSlide: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: -10,
            stretch: -45,
            depth: 90,
            modifier: 1,
            slideShadow: true,
        },
        spaceBetween: 20,
        mousewheel: {
            thresholdDelta: 50,
            sensitivity: 0.8,
        },
        autoplay: {
            delay: 2000,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            600: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
}, 100);

// contador de dias
const anos = document.getElementById('anos');
const meses = document.getElementById('meses');
const dias = document.getElementById('dias');
const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const comeco = new Date('mar 19, 2024 00:00:00');

const contador = setInterval(function() {
    let hoje = new Date().getTime();
    let diff = hoje - comeco;
    let aaaa = Math.floor(diff / (1000 * 3600 * 24 * 365));;
    let mm = Math.floor(diff / (1000 * 3600 * 24 * 30));;
    let dia = Math.floor(diff / (1000 * 3600 * 24));
    let h = Math.floor(diff % (1000 * 3600 * 24) /  (1000 * 3600));
    let min = Math.floor(diff % (1000 * 3600) / (1000 * 36));
    let s = Math.floor(diff % (1000 * 60) / 1000);

    if(aaaa < 10) {
        aaaa = '0' + aaaa;
    }

    if(mm < 10) {
        mm = '0' + mm;
    }

    if(dia < 10) {
        dia = '0' + dia;
    }

    if(h < 10) {
        h = '0' + h;
    }

    if(min < 10) {
        min = '0' + min;
    }

    if(s < 10) {
        s = '0' + s;
    }

    anos.textContent = `${aaaa}`;
    meses.textContent = `${mm}`;
    dias.textContent = `${dia}`;
    horas.textContent = `${h}`;
    minutos.textContent = `${min}`;
    segundos.textContent = `${s}`;

}, 1000);

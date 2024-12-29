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
    let min = Math.floor(diff % (1000 * 3600) / (1000 * 60));
    let s = Math.floor(diff % (1000 * 60) / 1000);
    
    // contagem de bodas
    const bodas = document.getElementById('bodas');

    if (mm <= 12) {
        switch (mm) {
            case 1:
                bodas.textContent = 'Bodas de Beijinhos';
                break;
            case 2:
                bodas.textContent = 'Bodas de Sorvete';
                break;
            case 4:
                bodas.textContent = 'Bodas de Pipoca';
                break;
            case 5:
                bodas.textContent = 'Bodas de Chocolate';
                break;
            case 6:
                bodas.textContent = 'Bodas de Pluminha';
                break;
            case 7:
                bodas.textContent = 'Bodas de Purpurina';
                break;
            case 8:
                bodas.textContent = 'Bodas de Pompom';
                break;
            case 9:
                bodas.textContent = 'Bodas de Maternidade';
                break;
            case 10:
                bodas.textContent = 'Bodas de Pintinhos';
                break;
            case 11:
                bodas.textContent = 'Bodas de Chicletes';
                break;
            case 12:
                bodas.textContent = 'Bodas de Papel';
                break;
        };
    } else {
        switch (aaaa) {
            case 1:
                bodas.textContent = 'Bodas de Papel';
                break;
            case 2:
                bodas.textContent = 'Bodas de Algodão';
                break;
            case 3:
                bodas.textContent = 'Bodas de Trigo';
                break;
            case 4:
                bodas.textContent = 'Bodas de Linho';
                break;
            case 5:
                bodas.textContent = 'Bodas de Madeira ou Ferro';
                break;
            case 6:
                bodas.textContent = 'Bodas de Perfume ou Açúcar';
                break;
            case 7:
                bodas.textContent = 'Bodas de Latão ou Lã';
                break;
            case 8:
                bodas.textContent = 'Bodas de Papoula ou Barro';
                break;
            case 9:
                bodas.textContent = 'Bodas de Cerâmica ou Vime';
                break;
            case 10:
                bodas.textContent = 'Bodas de Estanho';
                break;
            case 11:
                bodas.textContent = 'Bodas de Aço';
                break;
            case 12:
                bodas.textContent = 'Bodas de Seda ou Ônix';
                break;
            case 13:
                bodas.textContent = 'Bodas de Linho ou Renda';
                break;
            case 14:
                bodas.textContent = 'Bodas de Marfim';
                break;
            case 15:
                bodas.textContent = 'Bodas de Cristal';
                break;
            case 16:
                bodas.textContent = 'Bodas de Turmalina';
                break;
            case 17:
                bodas.textContent = 'Bodas de Rosa';
                break;
            case 18:
                bodas.textContent = 'Bodas de Turquesa';
                break;
            case 19:
                bodas.textContent = 'Bodas de Cretone ou Água-marinha';
                break;
            case 20:
                bodas.textContent = 'Bodas de Porcelana';
                break;
            case 21:
                bodas.textContent = 'Bodas de Zircão';
                break;
            case 22:
                bodas.textContent = 'Bodas de Louça';
                break;
            case 23:
                bodas.textContent = 'Bodas de Palha';
                break;
            case 24:
                bodas.textContent = 'Bodas de Opala';
                break;
            case 25:
                bodas.textContent = 'Bodas de Prata';
                break;
            case 26:
                bodas.textContent = 'Bodas de Alexandrita';
                break;
            case 27:
                bodas.textContent = 'Bodas de Crisopázio';
                break;
            case 28:
                bodas.textContent = 'Bodas de Hematita';
                break;
            case 29:
                bodas.textContent = 'Bodas de Erva';
                break;
            case 30:
                bodas.textContent = 'Bodas de Pérola';
                break;
            case 31:
                bodas.textContent = 'Bodas de Nácar';
                break;
            case 32:
                bodas.textContent = 'Bodas de Pinho';
                break;
            case 33:
                bodas.textContent = 'Bodas de Crizo';
                break;
            case 34:
                bodas.textContent = 'Bodas de Oliveira';
                break;
            case 35:
                bodas.textContent = 'Bodas de Coral';
                break;
            case 36:
                bodas.textContent = 'Bodas de Cedro';
                break;
            case 37:
                bodas.textContent = 'Bodas de Aventurina';
                break;
            case 38:
                bodas.textContent = 'Bodas de Carvalho';
                break;
            case 39:
                bodas.textContent = 'Bodas de Mármore';
                break;
            case 40:
                bodas.textContent = 'Bodas de Esmeralda';
                break;
            case 41:
                bodas.textContent = 'Bodas de casamento de Seda';
                break;
            case 42:
                bodas.textContent = 'Bodas de Prata Dourada';
                break;
            case 43:
                bodas.textContent = 'Bodas de Azeviche';
                break;
            case 44:
                bodas.textContent = 'Bodas de Carbonato';
                break;
            case 45:
                bodas.textContent = 'Bodas de Rubi';
                break;
            case 46:
                bodas.textContent = 'Bodas de Alabastro';
                break;
            case 47:
                bodas.textContent = 'Bodas de Jaspe';
                break;
            case 48:
                bodas.textContent = 'Bodas de Granito';
                break;
            case 49:
                bodas.textContent = 'Bodas de Heliotrópio';
                break;
            case 50:
                bodas.textContent = 'Bodas de Ouro';
                break;
            case 51:
                bodas.textContent = 'Bodas de Bronze';
                break;
            case 52:
                bodas.textContent = 'Bodas de Argila';
                break;
            case 53:
                bodas.textContent = 'Bodas de Antimônio';
                break;
            case 54:
                bodas.textContent = 'Bodas de Níquel';
                break;
            case 55:
                bodas.textContent = 'Bodas de Ametista';
                break;
            case 56:
                bodas.textContent = 'Bodas de Malaquita';
                break;
            case 57:
                bodas.textContent = 'Bodas de Lápis Lazuli';
                break;
            case 58:
                bodas.textContent = 'Bodas de Vidro';
                break;
            case 59:
                bodas.textContent = 'Bodas de Cereja';
                break;
            case 60:
                bodas.textContent = 'Bodas de Diamante';
                break;
            case 61:
                bodas.textContent = 'Bodas de Cobre';
                break;
            case 62:
                bodas.textContent = 'Bodas de Telurita';
                break;
            case 63:
                bodas.textContent = 'Bodas de Sândalo ou Lilás';
                break;
            case 64:
                bodas.textContent = 'Bodas de Fabulita';
                break;
            case 65:
                bodas.textContent = 'Bodas de Platina';
                break;
            case 66:
                bodas.textContent = 'Bodas de Ébano';
                break;
            case 67:
                bodas.textContent = 'Bodas de Neve';
                break;
            case 68:
                bodas.textContent = 'Bodas de Chumbo';
                break;
            case 69:
                bodas.textContent = 'Bodas de Mercúrio';
                break;
            case 70:
                bodas.textContent = 'Bodas de Vinho';
                break;
            case 71:
                bodas.textContent = 'Bodas de Zinco';
                break;
            case 72:
                bodas.textContent = 'Bodas de Aveia';
                break;
            case 73:
                bodas.textContent = 'Bodas de Manjerona';
                break;
            case 74:
                bodas.textContent = 'Bodas de Macieira';
                break;
            case 75:
                bodas.textContent = 'Bodas de Brilhante';
                break;
            case 76:
                bodas.textContent = 'Bodas de Cipreste';
                break;
            case 77:
                bodas.textContent = 'Bodas de Alfazema';
                break;
            case 78:
                bodas.textContent = 'Bodas de Benjoim';
                break;
            case 79:
                bodas.textContent = 'Bodas de Café';
                break;
            case 80:
                bodas.textContent = 'Bodas de Nogueira ou Carvalho';
                break;
            case 81:
                bodas.textContent = 'Bodas de Cacau';
                break;
            case 82:
                bodas.textContent = 'Bodas de Cravo';
                break;
            case 83:
                bodas.textContent = 'Bodas de Begônia';
                break;
            case 84:
                bodas.textContent = 'Bodas de Crisântemo';
                break;
            case 85:
                bodas.textContent = 'Bodas de Girassol';
                break;
            case 86:
                bodas.textContent = 'Bodas de Hortênsia';
                break;
            case 87:
                bodas.textContent = 'Bodas de Nogueira';
                break;
            case 88:
                bodas.textContent = 'Bodas de Pêra';
                break;
            case 89:
                bodas.textContent = 'Bodas de Figueira';
                break;
            case 90:
                bodas.textContent = 'Bodas de Álamo';
                break;
            case 91:
                bodas.textContent = 'Bodas de Pinheiro';
                break;
            case 92:
                bodas.textContent = 'Bodas de Salgueiro';
                break;
            case 93:
                bodas.textContent = 'Bodas de Imbuia';
                break;
            case 94:
                bodas.textContent = 'Bodas de Palmeira';
                break;
            case 95:
                bodas.textContent = 'Bodas de Sândalo';
                break;
            case 96:
                bodas.textContent = 'Bodas de Oliveira';
                break;
            case 97:
                bodas.textContent = 'Bodas de Abeto';
                break;
            case 98:
                bodas.textContent = 'Bodas de Pinheiro';
                break;
            case 99:
                bodas.textContent = 'Bodas de Salgueiro';
                break;
            case 100:
                bodas.textContent = 'Bodas de Jequitibá';
                break;
        }
    }
    
    // exibindo o tempo
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

// Ativando as ancoragens
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            const targetId = this.getAttribute('href').substring(1); // Obtém o ID do botão da aba (ex: "qa-tab")
            const tabButton = document.getElementById(targetId); // Seleciona o botão da aba

            if (tabButton) {
                // Ativar a aba correspondente
                const tab = new bootstrap.Tab(tabButton);
                tab.show();

                // Rolar suavemente até a seção das abas
                document.getElementById("myTab").scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });
});

// Fechar o menu offcanvas automaticamente após clicar em qualquer item de menu
document.querySelectorAll('#offcanvasMenu .nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('offcanvasMenu'));
        offcanvas.hide(); // Fecha o menu
    });
});

// Escutando o evento de quando a aba do acordeon é aberta
var accordions = document.querySelectorAll('.accordion');

accordions.forEach(function(accordion) {
    accordion.addEventListener('shown.bs.collapse', function (e) {
        // Faz a rolagem até o início do acordeon quando uma aba é aberta
        setTimeout(function() {
            window.scrollTo({
                top: accordion.offsetTop,
                behavior: 'smooth'
            });
        }); // },000) ajustar o valor do delay em milissegundos se quiser
    });
});

// Galeria randon
document.addEventListener('DOMContentLoaded', function () {
    const mosaicContainer = document.querySelector('.photo-mosaic');
    
    // Array contendo links de imagens e vídeos (substitua pelos seus links)
    const items = [ //onde estão as fotos e videos
        { type: 'image', src: './lib/pessoal/1.jpg'},
        { type: 'image', src: './lib/pessoal/2.jpg'},
        { type: 'video', src: 'https://www.youtube.com/embed/f66fcwU501E'}, //parapente
        { type: 'image', src: './lib/pessoal/3.jpg'},
        { type: 'image', src: './lib/pessoal/4.jpg'},
        { type: 'video', src: 'https://www.youtube.com/embed/c2hq_jHbuXY'}, //casamaster
        { type: 'image', src: './lib/pessoal/5.jpg'},
        { type: 'video', src: 'https://www.youtube.com/embed/HkCNJdb3BNI'}, //casamastertt
        { type: 'image', src: './lib/pessoal/6.jpg'},
        { type: 'image', src: './lib/pessoal/7.jpg'},
        { type: 'image', src: './lib/pessoal/8.jpg' },
        { type: 'image', src: './lib/pessoal/9.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/AF60MU7irwY'}, //saldaterra
        { type: 'image', src: './lib/pessoal/10.jpg' },
        { type: 'image', src: './lib/pessoal/11.jpg' },
        { type: 'image', src: './lib/pessoal/12.jpg' },
        { type: 'image', src: './lib/pessoal/13.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/Q9IYoGwTwlI'}, //sunbike
        { type: 'image', src: './lib/pessoal/14.jpg' },
        { type: 'image', src: './lib/pessoal/15.jpg' },
        { type: 'image', src: './lib/pessoal/16.jpg' },
        { type: 'image', src: './lib/pessoal/17.jpg' },
        { type: 'image', src: './lib/pessoal/18.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/scQYNhEry-E'}, //casamasterisnt
        { type: 'image', src: './lib/pessoal/19.jpg' },
        { type: 'image', src: './lib/pessoal/20.jpg' },
        { type: 'image', src: './lib/pessoal/21.jpg' },
        { type: 'image', src: './lib/pessoal/22.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/GqiOpd1jJ04'}, //mundi
        { type: 'image', src: './lib/pessoal/23.jpg' },
        { type: 'image', src: './lib/pessoal/24.jpg' },
        { type: 'image', src: './lib/pessoal/25.jpg' },
        { type: 'image', src: './lib/pessoal/26.jpg' },
        { type: 'image', src: './lib/pessoal/27.jpg' },
        { type: 'image', src: './lib/pessoal/28.jpg' },
        { type: 'video', src: 'https://www.youtube.com/embed/K_VkNLJBCUY'}, //casamastercs
        { type: 'image', src: './lib/pessoal/29.jpg' },
        { type: 'image', src: './lib/pessoal/30.jpg' },
        { type: 'image', src: './lib/pessoal/31.jpg' },
        { type: 'image', src: './lib/pessoal/32.jpg' },
        { type: 'image', src: './lib/pessoal/33.jpg' },
        { type: 'image', src: './lib/pessoal/34.jpg' },
        { type: 'image', src: './lib/pessoal/35.jpg' },
        { type: 'image', src: './lib/pessoal/36.jpg' },
        { type: 'image', src: './lib/pessoal/37.jpg' },
        { type: 'image', src: './lib/pessoal/38.jpg' },
        { type: 'image', src: './lib/pessoal/39.jpg' },
        { type: 'image', src: './lib/pessoal/40.jpg' },
        { type: 'image', src: './lib/pessoal/41.jpg' },
        { type: 'image', src: './lib/pessoal/42.jpg' },
        { type: 'image', src: './lib/pessoal/43.jpg' },
        { type: 'image', src: './lib/pessoal/44.jpg' },
        { type: 'image', src: './lib/pessoal/45.jpg' },
        { type: 'image', src: './lib/pessoal/46.jpg' },
        { type: 'image', src: './lib/pessoal/47.jpg' },
        { type: 'image', src: './lib/pessoal/48.jpg' },
        { type: 'image', src: './lib/pessoal/49.jpg' },
        { type: 'image', src: './lib/pessoal/50.jpg' },
        { type: 'image', src: './lib/pessoal/51.jpg' },
        { type: 'image', src: './lib/pessoal/52.jpg' },
        { type: 'image', src: './lib/pessoal/53.jpg' },
        { type: 'image', src: './lib/pessoal/54.jpg' },
        // Adicione todos os itens aqui
    ];

    let videoPlaying = false;
    let videoDuration = 0;
    let videoTimeLeft = 0;

    // Função para gerar o mosaico
    function generateMosaic() {
        // Embaralhando os itens aleatoriamente
        const shuffledItems = items.sort(() => Math.random() - 0.5);

        // Limitar a exibição dos itens
        const visibleItems = shuffledItems.slice(0, 15);
        
        // Limpando o container
        mosaicContainer.innerHTML = '';

        // Adicionando os itens ao container
        visibleItems.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('mosaic-item');

            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = 'Imagem';
                div.appendChild(img);
            } else if (item.type === 'video') {
                const a = document.createElement('a');
                a.href = item.src;
                a.target = '_blank'; // Abrir vídeo em nova aba
                
                const iframe = document.createElement('iframe');
                iframe.src = item.src;
                iframe.frameBorder = '0';
                iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;
                
                a.appendChild(iframe);
                div.appendChild(a);
                
                // Adicionando evento para saber quando o vídeo começa a tocar
                iframe.addEventListener('load', () => {
                    // Lógica para iniciar contagem do tempo do vídeo
                    videoPlaying = true;
                    videoDuration = 60; // Duração do vídeo em segundos (exemplo de 1 minuto)
                    videoTimeLeft = videoDuration;
                });
            }

            mosaicContainer.appendChild(div);
        });
    }

    // Função para verificar o tempo restante e decidir se faz a atualização
    function checkUpdateTime() {
        if (videoPlaying && videoTimeLeft > 30) {
            // Se o vídeo estiver tocando e restar mais de 30 segundos, adiamos a atualização
            setTimeout(checkUpdateTime, 1000);
        } else {
            // Se não houver vídeo tocando ou o tempo restante for pequeno, atualizamos normalmente
            generateMosaic();
        }
    }

    // Gerar o mosaico ao carregar a página
    generateMosaic();

    // tempo para atualização com verificação se tem video sendo reproduzido antes de fazer a atualização
    setInterval(checkUpdateTime, 5000); 
});
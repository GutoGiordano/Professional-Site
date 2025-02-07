// Ativando as ancoragens
document.addEventListener("DOMContentLoaded", function () {
    // Selecione os links tanto do menu principal quanto do offcanvas
    document.querySelectorAll('.navbar-nav .nav-link, .offcanvas .nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link

            const targetId = this.getAttribute('href').substring(1); // Obtém o ID da aba
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

// Galeria random
document.addEventListener('DOMContentLoaded', function () {
    const mosaicContainer = document.querySelector('.photo-mosaic');
    const modalImage = document.getElementById('modalImage'); // Referência à imagem do modal
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal')); // Instância do modal Bootstrap
    const refreshButton = document.getElementById('refreshMosaic'); // Botão para atualizar o mosaico

    // Array contendo links de imagens e vídeos
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
        // Quando precisar, adicione mais itens
    ];

    let videoPlaying = false;
    let videoDuration = 0;
    let videoTimeLeft = 0;

    // Função para gerar o mosaico
    function generateMosaic() {
        const shuffledItems = items.sort(() => Math.random() - 0.5);
        const visibleItems = shuffledItems.slice(0, 15);
        mosaicContainer.innerHTML = '';

        visibleItems.forEach(item => {
            const div = document.createElement('div');
            div.classList.add('mosaic-item');

            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = 'Imagem';
                img.classList.add('clickable'); // Classe para indicar que pode clicar
                img.style.cursor = 'pointer'; // Muda o cursor para indicar que pode clicar

                // Evento de clique para abrir no modal
                img.addEventListener('click', function () {
                    modalImage.src = item.src;
                    imageModal.show();
                });

                div.appendChild(img);
            } else if (item.type === 'video') {
                const a = document.createElement('a');
                a.href = item.src;
                a.target = '_blank';

                const iframe = document.createElement('iframe');
                iframe.src = item.src;
                iframe.frameBorder = '0';
                iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
                iframe.allowFullscreen = true;

                a.appendChild(iframe);
                div.appendChild(a);

                iframe.addEventListener('load', () => {
                    videoPlaying = true;
                });
            }

            mosaicContainer.appendChild(div);
        });
    }

    // Função para verificar se pode atualizar o mosaico
    function checkUpdateTime() {
        if (!videoPlaying) {
            generateMosaic();
        }
    }

    // Gera o mosaico ao carregar
    generateMosaic();

    // Atualiza automaticamente a cada 30 segundos
    setInterval(checkUpdateTime, 30000);

    // Atualiza manualmente ao clicar no botão e rola para o topo do mosaico
    if (refreshButton) {
        refreshButton.addEventListener('click', function () {
            generateMosaic(); // Atualiza o mosaico

            // Espera um pequeno tempo para garantir que as imagens carregaram antes de rolar
            setTimeout(() => {
                if (mosaicContainer && mosaicContainer.children.length > 0) {
                    mosaicContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100); // Delay menor para melhor experiência
        });
    }
});
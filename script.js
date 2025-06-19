# Criando o arquivo JavaScript corrigido
js_content = '''// Dados dos arquétipos
const archetypes = {
    masculino: [
        {
            id: 'executivo_magnetico',
            name: 'O Executivo Magnético',
            description: 'Sofisticado, poderoso e moderno. Sua fragrância é uma declaração de confiança e liderança.',
            tags: ['Amadeirado', 'Especiado', 'Couro', 'Sofisticado', 'Noturno'],
            famous: 'George Clooney, Ryan Gosling, Tom Ford',
            occasions: 'Reuniões importantes, jantares executivos, eventos corporativos',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'aventureiro_urbano',
            name: 'O Aventureiro Urbano',
            description: 'Dinâmico, espontâneo e conectado com a vida urbana. Seu perfume é fresco, energético e versátil.',
            tags: ['Cítrico', 'Aquático', 'Herbal', 'Diurno', 'Fresco'],
            famous: 'Chris Hemsworth, Ryan Reynolds, David Beckham',
            occasions: 'Atividades ao ar livre, encontros casuais, viagens',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'artista_sedutor',
            name: 'O Artista Sedutor',
            description: 'Criativo, misterioso e intenso. Sua fragrância é uma obra de arte única e inesquecível.',
            tags: ['Oriental', 'Especiado', 'Incensado', 'Sedutor', 'Noturno'],
            famous: 'Johnny Depp, Oscar Isaac, Michael Fassbender',
            occasions: 'Encontros românticos, eventos artísticos, noites especiais',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'alma_classica',
            name: 'A Alma Clássica',
            description: 'Elegante, atemporal e refinado. Sua presença evoca tradição e sofisticação.',
            tags: ['Amadeirado', 'Atalcado', 'Elegante', 'Clássico', 'Sofisticado'],
            famous: 'Pierce Brosnan, Colin Firth, Hugh Jackman',
            occasions: 'Cerimônias formais, óperas, jantares elegantes',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'visionario_moderno',
            name: 'O Visionário Moderno',
            description: 'Inovador, intelectual e futurista. Sua fragrância reflete uma mente vanguardista.',
            tags: ['Chipre', 'Metálico', 'Moderno', 'Mineral', 'Visionário'],
            famous: 'Elon Musk, Benedict Cumberbatch, Ryan Gosling',
            occasions: 'Conferências, lançamentos de produtos, eventos de tecnologia',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'espiritual_minimalista',
            name: 'O Espiritual Minimalista',
            description: 'Introspectivo, calmo e equilibrado. Sua fragrância é um santuário pessoal de paz.',
            tags: ['Almiscarado', 'Aquático', 'Minimalista', 'Herbal', 'Confortável'],
            famous: 'Keanu Reeves, Matthew McConaughey, Leonardo DiCaprio',
            occasions: 'Meditação, yoga, momentos de reflexão',
            image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'rebelde_sofisticado',
            name: 'O Rebelde Sofisticado',
            description: 'Autêntico, corajoso e não-convencional. Sua fragrância quebra regras com elegância.',
            tags: ['Couro', 'Especiado', 'Rebelde', 'Intenso', 'Misterioso'],
            famous: 'Brad Pitt, Jason Momoa, Idris Elba',
            occasions: 'Eventos alternativos, shows, encontros descontraídos',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'conquistador_natural',
            name: 'O Conquistador Natural',
            description: 'Carismático, confiante e naturalmente atraente. Sua presença é magnética e envolvente.',
            tags: ['Gourmand', 'Frutado', 'Doce', 'Magnético', 'Natural'],
            famous: 'Will Smith, Chris Evans, Michael B. Jordan',
            occasions: 'Festas, encontros sociais, eventos descontraídos',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face'
        }
    ],
    feminino: [
        {
            id: 'executiva_visionaria',
            name: 'A Executiva Visionária',
            description: 'Sofisticada, poderosa e moderna. Sua fragrância é uma declaração de confiança e liderança.',
            tags: ['Chipre', 'Floral Branco', 'Amadeirado', 'Sofisticado', 'Moderno'],
            famous: 'Angelina Jolie, Charlize Theron, Cate Blanchett',
            occasions: 'Reuniões executivas, eventos corporativos, apresentações importantes',
            image: 'https://images.unsplash.com/photo-1494790108755-2616c9c0e8e0?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'alma_livre',
            name: 'A Alma Livre',
            description: 'Boêmia, espontânea e conectada com a natureza. Seu perfume é leve, terroso e solar.',
            tags: ['Cítrico', 'Verde', 'Aromático', 'Natural', 'Diurno'],
            famous: 'Emma Stone, Jennifer Lawrence, Scarlett Johansson',
            occasions: 'Festivais, viagens, atividades ao ar livre',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'dama_classica',
            name: 'A Dama Clássica',
            description: 'Elegante, atemporal e graciosa. Sua presença evoca um romance refinado e uma beleza serena.',
            tags: ['Floral Aldeídico', 'Atalcado', 'Rosas', 'Elegante', 'Clássico'],
            famous: 'Grace Kelly, Audrey Hepburn, Kate Middleton',
            occasions: 'Cerimônias formais, óperas, jantares elegantes',
            image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'artista_enigmatica',
            name: 'A Artista Enigmática',
            description: 'Criativa, misteriosa e intensa. Sua fragrância é uma obra de arte única e inesquecível.',
            tags: ['Oriental', 'Especiado', 'Incensado', 'Misterioso', 'Criativo'],
            famous: 'Tilda Swinton, Helena Bonham Carter, Björk',
            occasions: 'Vernissages, eventos artísticos, noites especiais',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'socialite_radiante',
            name: 'A Socialite Radiante',
            description: 'Carismática, vibrante e glamorosa. O centro das atenções, seu perfume é luxuoso e contagiante.',
            tags: ['Floral Frutado', 'Gourmand', 'Baunilha', 'Magnético', 'Luxuoso'],
            famous: 'Blake Lively, Margot Robbie, Emma Watson',
            occasions: 'Festas glamorosas, eventos sociais, red carpets',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'minimalista_chic',
            name: 'A Minimalista Chic',
            description: 'Discreta, inteligente e contemporânea. Prefere a elegância sussurrada ao invés da opulência gritada.',
            tags: ['Almiscarado', 'Íris', 'Amadeirado Leve', 'Minimalista', 'Contemporâneo'],
            famous: 'Gwyneth Paltrow, Tilda Swinton, Rooney Mara',
            occasions: 'Reuniões casuais, trabalho, momentos de contemplação',
            image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'sabia_serena',
            name: 'A Sábia Serena',
            description: 'Introspectiva, calma e equilibrada. Sua fragrância é um santuário pessoal de paz e harmonia.',
            tags: ['Aquático', 'Chá', 'Sândalo', 'Sereno', 'Equilibrado'],
            famous: 'Meryl Streep, Helen Mirren, Julianne Moore',
            occasions: 'Meditação, spa, momentos de reflexão',
            image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop&crop=face'
        }
    ],
    versatil: [
        {
            id: 'lideranca_magnetica',
            name: 'A Liderança Magnética',
            description: 'Sofisticado(a), poderoso(a) e moderno(a). Sua fragrância é uma declaração de confiança e liderança.',
            tags: ['Amadeirado', 'Especiado', 'Couro', 'Sofisticado', 'Magnético'],
            famous: 'Tilda Swinton, David Bowie, Janelle Monáe',
            occasions: 'Reuniões importantes, eventos corporativos, liderança',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'alma_exploradora',
            name: 'A Alma Exploradora',
            description: 'Dinâmico(a), espontâneo(a) e conectado(a) com aventuras. Seu perfume é fresco e versátil.',
            tags: ['Cítrico', 'Aquático', 'Herbal', 'Aventureiro', 'Fresco'],
            famous: 'Ruby Rose, Ezra Miller, Kristen Stewart',
            occasions: 'Viagens, aventuras, atividades ao ar livre',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'essencia_criativa',
            name: 'A Essência Criativa',
            description: 'Criativo(a), misterioso(a) e intenso(a). Sua fragrância é uma obra de arte única.',
            tags: ['Oriental', 'Especiado', 'Incensado', 'Criativo', 'Artístico'],
            famous: 'Lady Gaga, Prince, Bowie',
            occasions: 'Eventos artísticos, vernissages, expressão criativa',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'alma_classica_unissex',
            name: 'A Alma Clássica',
            description: 'Elegante, atemporal e refinado(a). Sua presença evoca tradição e sofisticação.',
            tags: ['Amadeirado', 'Atalcado', 'Elegante', 'Clássico', 'Atemporal'],
            famous: 'Cate Blanchett, Tom Ford, Tilda Swinton',
            occasions: 'Cerimônias formais, eventos elegantes, tradição',
            image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'mente_visionaria',
            name: 'A Mente Visionária',
            description: 'Inovador(a), intelectual e futurista. Sua fragrância reflete uma mente vanguardista.',
            tags: ['Chipre', 'Metálico', 'Moderno', 'Visionário', 'Inovador'],
            famous: 'Elon Musk, Grimes, Steve Jobs',
            occasions: 'Conferências, inovação, eventos de tecnologia',
            image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'ser_minimalista',
            name: 'O Ser Minimalista',
            description: 'Introspectivo(a), calmo(a) e equilibrado(a). Sua fragrância é um santuário de paz.',
            tags: ['Almiscarado', 'Aquático', 'Minimalista', 'Equilibrado', 'Zen'],
            famous: 'Keanu Reeves, Phoebe Philo, Jil Sander',
            occasions: 'Meditação, minimalismo, momentos zen',
            image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'espirito_rebelde',
            name: 'O Espírito Rebelde',
            description: 'Autêntico(a), corajoso(a) e não-convencional. Sua fragrância quebra regras com elegância.',
            tags: ['Couro', 'Especiado', 'Rebelde', 'Autêntico', 'Corajoso'],
            famous: 'Patti Smith, David Bowie, Annie Lennox',
            occasions: 'Expressão pessoal, eventos alternativos, autenticidade',
            image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face'
        },
        {
            id: 'carisma_natural',
            name: 'O Carisma Natural',
            description: 'Carismático(a), confiante e naturalmente atraente. Sua presença é magnética.',
            tags: ['Gourmand', 'Frutado', 'Doce', 'Carismático', 'Natural'],
            famous: 'Will Smith, Lupita Nyong\'o, Michael B. Jordan',
            occasions: 'Socialização, carisma, eventos descontraídos',
            image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face'
        }
    ]
};

// Perguntas do quiz
const questions = [
    {
        id: 1,
        title: "Seu refúgio perfeito. Qual é a sua cara?",
        options: [
            {
                text: "Uma biblioteca antiga com poltronas de couro e lareira",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
                tags: { 'Amadeirado': 2, 'Couro': 1, 'Especiado': 1, 'Clássico': 1 }
            },
            {
                text: "Uma varanda de frente para o mar com brisa suave",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                tags: { 'Cítrico': 2, 'Aquático': 2, 'Frutado': 1, 'Diurno': 1 }
            },
            {
                text: "Uma confeitaria parisiense aconchegante",
                image: "https://images.unsplash.com/photo-1555507036-ab794f4afe5a?w=400&h=300&fit=crop",
                tags: { 'Gourmand': 2, 'Baunilha': 1, 'Atalcado': 1, 'Sedutor': 1 }
            },
            {
                text: "Um jardim secreto exuberante após a chuva",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
                tags: { 'Floral': 2, 'Verde': 2, 'Aromático': 1, 'Natural': 1 }
            }
        ]
    },
    {
        id: 2,
        title: "O toque define tudo. Qual textura é mais você?",
        options: [
            {
                text: "Linho branco, leve e naturalmente amassado",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
                tags: { 'Fresco': 2, 'Almiscarado': 1, 'Diurno': 1, 'Minimalista': 1 }
            },
            {
                text: "Veludo de seda escuro com brilho luxuoso",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
                tags: { 'Oriental': 2, 'Atalcado': 1, 'Noturno': 1, 'Sofisticado': 1 }
            },
            {
                text: "Jaqueta de couro preta com personalidade",
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
                tags: { 'Couro': 2, 'Especiado': 1, 'Rebelde': 1, 'Intenso': 1 }
            },
            {
                text: "Cashmere clássico em tom neutro",
                image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop",
                tags: { 'Amadeirado': 2, 'Almiscarado': 1, 'Confortável': 1, 'Elegante': 1 }
            }
        ]
    },
    {
        id: 3,
        title: "Noite com a galera. Qual é a vibe?",
        options: [
            {
                text: "Bar de jazz exclusivo com conversas profundas",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                tags: { 'Sofisticado': 2, 'Incensado': 1, 'Noturno': 1, 'Misterioso': 1 }
            },
            {
                text: "Festa vibrante em rooftop com as luzes da cidade",
                image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=300&fit=crop",
                tags: { 'Especiado': 2, 'Doce': 1, 'Intenso': 1, 'Moderno': 1 }
            },
            {
                text: "Jantar em casa descontraído com risadas",
                image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=400&h=300&fit=crop",
                tags: { 'Confortável': 2, 'Gourmand': 1, 'Aromático': 1, 'Natural': 1 }
            },
            {
                text: "Vernissage em galeria de arte",
                image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
                tags: { 'Chipre': 2, 'Mineral': 1, 'Moderno': 1, 'Criativo': 1 }
            }
        ]
    },
    {
        id: 4,
        title: "O que te move de verdade?",
        options: [
            {
                text: "Mapa antigo sobre mesa de madeira com bússola",
                image: "https://images.unsplash.com/photo-1597149962419-0d900ac2e4c4?w=400&h=300&fit=crop",
                tags: { 'Aventureiro': 2, 'Amadeirado': 1, 'Cítrico': 1, 'Clássico': 1 }
            },
            {
                text: "Plano arquitetônico de prédio futurista",
                image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop",
                tags: { 'Moderno': 2, 'Metálico': 1, 'Chipre': 1, 'Visionário': 1 }
            },
            {
                text: "Palco com holofotes antes do show",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                tags: { 'Sedutor': 2, 'Intenso': 1, 'Oriental': 1, 'Magnético': 1 }
            },
            {
                text: "Pilha de livros de filosofia com xícara de chá",
                image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
                tags: { 'Elegante': 2, 'Atalcado': 1, 'Herbal': 1, 'Clássico': 1 }
            }
        ]
    },
    {
        id: 5,
        title: "Chegou, marcou. Como você quer ser lembrado(a)?",
        options: [
            {
                text: "Como alguém de elegância inesquecível",
                image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
                tags: { 'Sofisticado': 2, 'Floral': 2, 'Amadeirado': 2, 'Atalcado': 1 }
            },
            {
                text: "Pela energia vibrante e presença positiva",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                tags: { 'Cítrico': 2, 'Frutado': 2, 'Especiado': 1 }
            },
            {
                text: "Por uma aura de mistério e confiança",
                image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
                tags: { 'Oriental': 2, 'Incensado': 2, 'Couro': 1 }
            },
            {
                text: "Como alguém autêntico e pé no chão",
                image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
                tags: { 'Natural': 2, 'Verde': 2, 'Almiscarado': 1 }
            }
        ]
    }
];

// Estado da aplicação
let currentState = {
    screen: 'welcome',
    currentQuestion: 0,
    userAnswers: [],
    userProfile: {
        name: '',
        photo: null,
        universe: '',
        origin: ''
    },
    scores: {},
    result: null
};

// Variáveis globais
let perfumeData = [];

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('Script carregado e DOM pronto!');
    initializeApp();
});

function initializeApp() {
    console.log('Inicializando aplicação...');
    
    // Verificar se os elementos existem
    const startBtn = document.getElementById('start-btn');
    if (!startBtn) {
        console.error('Botão start-btn não encontrado!');
        return;
    }
    
    // Event listeners
    startBtn.addEventListener('click', function() {
        console.log('Botão "Vamos lá!" clicado!');
        playClickSound();
        showScreen('identification');
        updateProgress(10);
    });

    // Form de identificação
    const userForm = document.getElementById('user-form');
    if (userForm) {
        userForm.addEventListener('submit', handleUserForm);
    }
    
    // Upload de foto
    const photoInput = document.getElementById('user-photo');
    const photoPreview = document.querySelector('.photo-preview');
    
    if (photoInput) {
        photoInput.addEventListener('change', handlePhotoUpload);
    }
    
    if (photoPreview) {
        photoPreview.addEventListener('click', function() {
            if (photoInput) photoInput.click();
        });
    }

    // Carregar dados de perfumes
    loadPerfumeData();
    
    console.log('Aplicação inicializada com sucesso!');
}

function playClickSound() {
    try {
        const clickSound = document.getElementById('click-sound');
        if (clickSound) {
            clickSound.currentTime = 0;
            clickSound.play().catch(e => console.log('Audio play failed:', e));
        }
    } catch (e) {
        console.log('Audio error:', e);
    }
}

function playSuccessSound() {
    try {
        const successSound = document.getElementById('success-sound');
        if (successSound) {
            successSound.currentTime = 0;
            successSound.play().catch(e => console.log('Audio play failed:', e));
        }
    } catch (e) {
        console.log('Audio error:', e);
    }
}

function showScreen(screenName) {
    console.log('Mudando para tela:', screenName);
    
    // Esconder todas as telas
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));
    
    // Mostrar tela específica
    const targetScreen = document.getElementById(screenName + '-screen');
    if (targetScreen) {
        targetScreen.classList.add('active');
        currentState.screen = screenName;
    } else {
        console.error('Tela não encontrada:', screenName);
    }
}

function updateProgress(percentage) {
    const progressBar = document.querySelector('.progress');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview-img');
            const placeholder = document.querySelector('.photo-placeholder');
            
            if (preview && placeholder) {
                preview.src = e.target.result;
                preview.style.display = 'block';
                placeholder.style.display = 'none';
                
                currentState.userProfile.photo = e.target.result;
            }
        };
        reader.readAsDataURL(file);
    }
}

function handleUserForm(event) {
    event.preventDefault();
    console.log('Formulário enviado!');
    
    const formData = new FormData(event.target);
    currentState.userProfile.name = formData.get('user-name');
    currentState.userProfile.universe = formData.get('universe');
    currentState.userProfile.origin = formData.get('origin');
    
    console.log('Perfil do usuário:', currentState.userProfile);
    
    playSuccessSound();
    startQuiz();
}

function startQuiz() {
    console.log('Iniciando quiz...');
    showScreen('quiz');
    currentState.currentQuestion = 0;
    currentState.scores = {};
    currentState.userAnswers = [];
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentState.currentQuestion];
    const progress = ((currentState.currentQuestion + 1) / questions.length) * 80 + 10; // 10-90%
    
    updateProgress(progress);
    
    const questionTitle = document.getElementById('question-title');
    const optionsContainer = document.getElementById('question-options');
    
    if (questionTitle) {
        questionTitle.textContent = question.title;
    }
    
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'option-button';
            button.innerHTML = `
                <img src="${option.image}" alt="${option.text}" loading="lazy" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDQwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMzMzMzMzIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTUwIiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTgiPkltYWdlbTwvdGV4dD4KPC9zdmc+'">
                <div class="option-text">${option.text}</div>
            `;
            
            button.addEventListener('click', () => selectAnswer(option, index));
            optionsContainer.appendChild(button);
        });
    }
}

function selectAnswer(option, index) {
    console.log('Resposta selecionada:', option.text);
    playClickSound();
    
    // Adicionar pontos às tags
    Object.entries(option.tags).forEach(([tag, points]) => {
        currentState.scores[tag] = (currentState.scores[tag] || 0) + points;
    });
    
    currentState.userAnswers.push({
        questionId: questions[currentState.currentQuestion].id,
        selectedOption: index,
        tags: option.tags
    });
    
    // Próxima pergunta ou resultados
    setTimeout(() => {
        if (currentState.currentQuestion < questions.length - 1) {
            currentState.currentQuestion++;
            displayQuestion();
        } else {
            showLoadingScreen();
        }
    }, 500);
}

function showLoadingScreen() {
    console.log('Mostrando tela de carregamento...');
    showScreen('loading');
    updateProgress(95);
    
    // Simular processamento
    setTimeout(() => {
        calculateResults();
        showResults();
    }, 3000);
}

function calculateResults() {
    console.log('Calculando resultados...');
    console.log('Pontuações:', currentState.scores);
    
    const userUniverse = currentState.userProfile.universe;
    const availableArchetypes = archetypes[userUniverse] || archetypes.versatil;
    
    let bestMatch = null;
    let highestScore = 0;
    
    availableArchetypes.forEach(archetype => {
        let score = 0;
        archetype.tags.forEach(tag => {
            score += currentState.scores[tag] || 0;
        });
        
        console.log(`Arquétipo ${archetype.name}: ${score} pontos`);
        
        if (score > highestScore) {
            highestScore = score;
            bestMatch = archetype;
        }
    });
    
    currentState.result = bestMatch || availableArchetypes[0];
    console.log('Resultado final:', currentState.result.name);
}

function showResults() {
    console.log('Mostrando resultados...');
    showScreen('results');
    updateProgress(100);
    
    const result = currentState.result;
    const userProfile = currentState.userProfile;
    
    // Foto do usuário
    const userPhoto = document.getElementById('result-user-photo');
    if (userPhoto && userProfile.photo) {
        userPhoto.src = userProfile.photo;
    }
    
    // Nome do usuário
    const userName = document.getElementById('result-user-name');
    if (userName) {
        userName.textContent = userProfile.name.toUpperCase();
    }
    
    // Informações do arquétipo
    const archetypeImg = document.getElementById('archetype-img');
    const archetypeName = document.getElementById('archetype-name');
    const archetypeDescription = document.getElementById('archetype-description');
    const famousPeople = document.getElementById('famous-people');
    const idealOccasions = document.getElementById('ideal-occasions');
    
    if (archetypeImg) archetypeImg.src = result.image;
    if (archetypeName) archetypeName.textContent = result.name;
    if (archetypeDescription) archetypeDescription.textContent = result.description;
    if (famousPeople) famousPeople.textContent = result.famous;
    if (idealOccasions) idealOccasions.textContent = result.occasions;
    
    // Recomendações de perfumes
    displayPerfumeRecommendations();
    
    // Botão de compartilhar
    const shareBtn = document.getElementById('share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', shareResult);
    }
}

async function loadPerfumeData() {
    try {
        console.log('Carregando dados dos perfumes...');
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTVo5-wbqe0_hjaervqTvaYNnKJ4J4C9IRMGOt-kn8ST6XO41Sn7_hd181oL1vvIbQHJU88FEVnxHD_/pub?output=csv');
        const csvText = await response.text();
        perfumeData = parseCSV(csvText);
        console.log('Dados dos perfumes carregados:', perfumeData.length, 'perfumes');
    } catch (error) {
        console.error('Erro ao carregar dados dos perfumes:', error);
        // Dados de exemplo caso falhe
        perfumeData = [
            {
                "Perfume": "Bleu de Chanel",
                "Marca": "Chanel",
                "País de Origem": "França",
                "Gênero": "Masculino",
                "Acorde Principal 1": "Amadeirado",
                "Acorde Principal 2": "Cítrico",
                "Acorde Principal 3": "Aromático"
            },
            {
                "Perfume": "Sauvage",
                "Marca": "Dior",
                "País de Origem": "França",
                "Gênero": "Masculino",
                "Acorde Principal 1": "Aromático",
                "Acorde Principal 2": "Especiado",
                "Acorde Principal 3": "Fresco"
            },
            {
                "Perfume": "Chanel No. 5",
                "Marca": "Chanel",
                "País de Origem": "França",
                "Gênero": "Feminino",
                "Acorde Principal 1": "Floral Aldeídico",
                "Acorde Principal 2": "Atalcado",
                "Acorde Principal 3": "Elegante"
            }
        ];
    }
}

function parseCSV(csvText) {
    const lines = csvText.split('\\n');
    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
    const data = [];
    
    for (let i = 1; i < lines.length; i++) {
        if (lines[i].trim()) {
            const values = lines[i].split(',').map(v => v.trim().replace(/"/g, ''));
            const row = {};
            headers.forEach((header, index) => {
                row[header] = values[index] || '';
            });
            data.push(row);
        }
    }
    
    return data;
}

function displayPerfumeRecommendations() {
    console.log('Exibindo recomendações de perfumes...');
    
    const result = currentState.result;
    const userOrigin = currentState.userProfile.origin;
    const userUniverse = currentState.userProfile.universe;
    
    // Filtrar perfumes
    let filteredPerfumes = perfumeData.filter(perfume => {
        // Filtro por origem
        if (userOrigin === 'importados' && perfume['País de Origem'] === 'Brasil') return false;
        if (userOrigin === 'nacionais' && perfume['País de Origem'] !== 'Brasil') return false;
        
        // Filtro por gênero
        if (userUniverse === 'masculino' && perfume['Gênero'] !== 'Masculino') return false;
        if (userUniverse === 'feminino' && perfume['Gênero'] !== 'Feminino') return false;
        
        return true;
    });
    
    // Calcular match score
    filteredPerfumes = filteredPerfumes.map(perfume => {
        let matchScore = 0;
        result.tags.forEach(tag => {
            if (perfume['Acorde Principal 1'] === tag) matchScore += 3;
            if (perfume['Acorde Principal 2'] === tag) matchScore += 2;
            if (perfume['Acorde Principal 3'] === tag) matchScore += 1;
        });
        return { ...perfume, matchScore };
    });
    
    // Ordenar por match score e pegar os top 5
    const recommendations = filteredPerfumes
        .sort((a, b) => b.matchScore - a.matchScore)
        .slice(0, 5);
    
    // Exibir recomendações
    const container = document.getElementById('recommended-perfumes');
    if (!container) return;
    
    container.innerHTML = '';
    
    if (recommendations.length === 0) {
        container.innerHTML = '<p>Carregando recomendações personalizadas...</p>';
        return;
    }
    
    recommendations.forEach(perfume => {
        const card = document.createElement('div');
        card.className = 'perfume-card';
        card.innerHTML = `
            <h4>${perfume['Perfume']}</h4>
            <div class="brand">${perfume['Marca']}</div>
            <div class="notes">
                <strong>Acordes:</strong> ${perfume['Acorde Principal 1']}, ${perfume['Acorde Principal 2']}, ${perfume['Acorde Principal 3']}
            </div>
        `;
        container.appendChild(card);
    });
    
    console.log('Recomendações exibidas:', recommendations.length);
}

function shareResult() {
    console.log('Compartilhando resultado...');
    
    const resultContent = document.getElementById('result-content');
    if (!resultContent) {
        console.error('Elemento result-content não encontrado');
        return;
    }
    
    // Verificar se html2canvas está disponível
    if (typeof html2canvas === 'undefined') {
        console.error('html2canvas não está carregado');
        alert('Erro ao gerar imagem. Biblioteca não carregada.');
        return;
    }
    
    html2canvas(resultContent, {
        backgroundColor: '#000000',
        scale: 2,
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        // Criar link de download
        const link = document.createElement('a');
        link.download = `meu-perfil-olfativo-${currentState.userProfile.name.toLowerCase().replace(/\\s+/g, '-')}.png`;
        link.href = canvas.toDataURL();
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        playSuccessSound();
        
        // Mostrar mensagem de sucesso
        const button = document.getElementById('share-btn');
        if (button) {
            const originalText = button.textContent;
            button.textContent = '✅ Imagem salva!';
            button.style.background = '#25D366';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.background = '';
            }, 3000);
        }
    }).catch(error => {
        console.error('Erro ao gerar imagem:', error);
        alert('Erro ao gerar imagem. Tente novamente.');
    });
}

// Frases motivacionais para o áudio
const motivationalPhrases = [
    "Ótima escolha!",
    "Você tem bom gosto!",
    "Perfeito!",
    "Excelente!",
    "Muito bem!",
    "Isso aí!"
];

// Simular áudio motivacional
function playMotivationalAudio() {
    const phrase = motivationalPhrases[Math.floor(Math.random() * motivationalPhrases.length)];
    console.log(`🔊 ${phrase}`);
    
    // Web Speech API para falar a frase
    if ('speechSynthesis' in window) {
        try {
            const utterance = new SpeechSynthesisUtterance(phrase);
            utterance.lang = 'pt-BR';
            utterance.rate = 1.2;
            utterance.pitch = 1.1;
            utterance.volume = 0.7;
            speechSynthesis.speak(utterance);
        } catch (e) {
            console.log('Speech synthesis error:', e);
        }
    }
}

// Adicionar áudio motivacional aos cliques nas opções
document.addEventListener('click', function(e) {
    if (e.target.closest('.option-button')) {
        setTimeout(playMotivationalAudio, 200);
    }
});

console.log('Script carregado completamente!');'''

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Arquivo script.js corrigido criado com sucesso!")
print("\\nPrincipais correções feitas:")
print("- Verificação se elementos DOM existem antes de usar")
print("- Logs de debug para identificar problemas")
print("- Tratamento de erros melhorado")
print("- Inicialização mais robusta")
print("- Fallback para imagens que não carregam")
print("- Verificação da biblioteca html2canvas")

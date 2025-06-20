// Dados dos arquétipos
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
    scores: {}
};

// Elementos DOM
const screens = {
    welcome: document.getElementById('welcome-screen'),
    identification: document.getElementById('identification-screen'),
    quiz: document.getElementById('quiz-screen'),
    loading: document.getElementById('loading-screen'),
    results: document.getElementById('results-screen')
};

// Sons
const clickSound = document.getElementById('click-sound');
const successSound = document.getElementById('success-sound');

// Funções de utilidade
function playSound(sound) {
    try {
        sound.currentTime = 0;
        sound.play().catch(e => console.log('Audio play failed:', e));
    } catch (e) {
        console.log('Audio error:', e);
    }
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
    currentState.screen = screenName;
}

function updateProgress(percentage) {
    const progressBar = document.querySelector('.progress');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Botão inicial
    document.getElementById('start-btn').addEventListener('click', function() {
        playSound(clickSound);
        showScreen('identification');
        updateProgress(10);
    });

    // Form de identificação
    document.getElementById('user-form').addEventListener('submit', handleUserForm);

    // Upload de foto
    document.getElementById('user-photo').addEventListener('change', handlePhotoUpload);
    document.querySelector('.photo-preview').addEventListener('click', function() {
        document.getElementById('user-photo').click();
    });

    // Carregar dados de perfumes
    loadPerfumeData();
}

function handlePhotoUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview-img');
            const placeholder = document.querySelector('.photo-placeholder');

            preview.src = e.target.result;
            preview.style.display = 'block';
            placeholder.style.display = 'none';

            currentState.userProfile.photo = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function handleUserForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    currentState.userProfile.name = formData.get('user-name');
    currentState.userProfile.universe = formData.get('universe');
    currentState.userProfile.origin = formData.get('origin');

    playSound(successSound);
    startQuiz();
}

function startQuiz() {
    showScreen('quiz');
    currentState.currentQuestion = 0;
    currentState.scores = {};
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentState.currentQuestion];
    const progress = ((currentState.currentQuestion + 1) / questions.length) * 80 + 10; // 10-90%

    updateProgress(progress);

    document.getElementById('question-title').textContent = question.title;

    const optionsContainer = document.getElementById('question-options');
    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.innerHTML = `
            <img src="${option.image}" alt="${option.text}" loading="lazy">
            <div class="option-text">${option.text}</div>
        `;

        button.addEventListener('click', () => selectAnswer(option, index));
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(option, index) {
    playSound(clickSound);

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
    showScreen('loading');
    updateProgress(95);

    // Simular processamento
    setTimeout(() => {
        calculateResults();
        showResults();
    }, 3000);
}

function calculateResults() {
    const userUniverse = currentState.userProfile.universe;
    const availableArchetypes = archetypes[userUniverse] || archetypes.versatil;

    let bestMatch = null;
    let highestScore = 0;

    availableArchetypes.forEach(archetype => {
        let score = 0;
        archetype.tags.forEach(tag => {
            score += currentState.scores[tag] || 0;
        });

        if (score > highestScore) {
            highestScore = score;
            bestMatch = archetype;
        }
    });

    currentState.result = bestMatch || availableArchetypes[0];
}

function showResults() {
    showScreen('results');
    updateProgress(100);

    const result = currentState.result;
    const userProfile = currentState.userProfile;

    // Foto do usuário
    if (userProfile.photo) {
        document.getElementById('result-user-photo').src = userProfile.photo;
    }

    // Nome do usuário
    document.getElementById('result-user-name').textContent = userProfile.name.toUpperCase();

    // Informações do arquétipo
    document.getElementById('archetype-img').src = result.image;
    document.getElementById('archetype-name').textContent = result.name;
    document.getElementById('archetype-description').textContent = result.description;
    document.getElementById('famous-people').textContent = result.famous;
    document.getElementById('ideal-occasions').textContent = result.occasions;

    // Recomendações de perfumes
    displayPerfumeRecommendations();

    // Botão de compartilhar
    document.getElementById('share-btn').addEventListener('click', shareResult);
}

let perfumeData = [];

async function loadPerfumeData() {
    try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTVo5-wbqe0_hjaervqTvaYNnKJ4J4C9IRMGOt-kn8ST6XO41Sn7_hd181oL1vvIbQHJU88FEVnxHD_/pub?output=csv');
        const csvText = await response.text();
        perfumeData = parseCSV(csvText);
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
            }
        ];
    }
}

function parseCSV(csvText) {
    const lines = csvText.split('\n');
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
    container.innerHTML = '';

    if (recommendations.length === 0) {
        container.innerHTML = '<p>Nenhuma recomendação encontrada para este perfil. Estamos atualizando nossa base de dados!</p>';
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
}

function shareResult() {
    const resultContent = document.getElementById('result-content');

    html2canvas(resultContent, {
        backgroundColor: '#000000',
        scale: 2,
        useCORS: true
    }).then(canvas => {
        // Criar link de download
        const link = document.createElement('a');
        link.download = `meu-perfil-olfativo-${currentState.userProfile.name.toLowerCase().replace(/\s+/g, '-')}.png`;
        link.href = canvas.toDataURL();

        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        playSound(successSound);

        // Mostrar mensagem de sucesso
        const button = document.getElementById('share-btn');
        const originalText = button.textContent;
        button.textContent = '✅ Imagem salva!';
        button.style.background = '#25D366';

        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = '';
        }, 3000);
    }).catch(error => {
        console.error('Erro ao gerar imagem:', error);
        alert('Erro ao gerar imagem. Tente novamente.');
    });
}

// Frases motivacionais para o áudio (simulação)
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

    // Aqui você poderia usar Web Speech API para falar a frase
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        utterance.pitch = 1.1;
        speechSynthesis.speak(utterance);
    }
}

// Adicionar áudio motivacional aos cliques
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('option-button')) {
        setTimeout(playMotivationalAudio, 200);
    }
});

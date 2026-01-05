// ========== TRANSLATIONS ==========
const translations = {
    en: {
        // Header
        'header-cta': 'Get in Touch',
        
        // Hero
        'hero-title-1': 'Developer',
        'hero-title-2': 'Full Stack',
        'hero-description': 'Developer specialized in creating robust and efficient digital solutions. Passionate about technology, software engineering and solving complex problems.',
        'hero-cta': "Let's Talk",
        
        // Technologies
        'tech-tag': 'Stack',
        'tech-title': 'Technologies I Master',
        
        // Experience
        'exp-tag': 'Projects',
        'exp-title': 'Professional Experience',
        'exp-card1-title': 'Database Reverse Engineering',
        'exp-card1-desc': 'Analysis and documentation of legacy database structures, relationship mapping and creation of ER diagrams for various systems.',
        'exp-card2-title': 'Web Development',
        'exp-card2-desc': 'Creation and maintenance of websites and web systems using PHP, Laravel and WordPress, focusing on performance, SEO and user experience.',
        'exp-card3-title': 'Mobile Development',
        'exp-card3-desc': 'Experience with Android application development using Android Studio and Java, creating native and responsive mobile solutions.',
        
        // Education
        'edu-tag': 'Education • Training',
        'edu-title': 'My Academic<br>Journey',
        'edu-card1-title': "Bachelor's in Information Systems",
        'edu-card1-desc': 'Higher education focused on software development, databases, software engineering and IT management.',
        'edu-card1-year': 'In Progress',
        'edu-card2-title': 'Technical Course in IT',
        'edu-card2-desc': 'Technical training with emphasis on programming, computer networks and technical support.',
        'edu-card3-title': 'Hardware Assembly and Maintenance',
        'edu-card3-desc': 'Technical course focused on assembly, configuration and maintenance of computers and peripherals.',
        'edu-card4-title': 'Specialization in Development',
        'edu-card4-desc': 'Specialized courses in modern web and mobile development technologies.',
        'edu-card4-year': 'Ongoing',
        
        // Contact
        'contact-tag': 'Contact',
        'contact-title': "Let's work together!",
        'contact-desc': "I'm always open to new opportunities and interesting projects. Get in touch and let's talk!",
        
        // Form
        'form-name': 'Full Name',
        'form-name-ph': 'Your name',
        'form-email': 'E-mail',
        'form-phone': 'Phone',
        'form-phone-ph': '(00) 00000-0000',
        'form-subject': 'Subject',
        'form-subject-ph': 'Email subject',
        'form-message': 'Message',
        'form-message-ph': 'Write your message...',
        'form-submit': 'Send Message',
        
        // Footer
        'footer-desc': 'Backend Developer passionate about creating innovative and efficient digital solutions.',
        'footer-links': 'Quick Links',
        'footer-contact': 'Contact',
        'footer-rights': '© 2026 Pedro Alves. All rights reserved.',
        
        // Navbar
        'nav-home': 'Home',
        'nav-tech': 'Technologies',
        'nav-exp': 'Experience',
        'nav-edu': 'Education',
        'nav-contact': 'Contact'
    },
    pt: {
        // Header
        'header-cta': 'Entre em Contato',
        
        // Hero
        'hero-title-1': 'Desenvolvedor',
        'hero-title-2': 'Full Stack',
        'hero-description': 'Desenvolvedor especializado em criar soluções digitais robustas e eficientes. Apaixonado por tecnologia, engenharia de software e resolução de problemas complexos.',
        'hero-cta': 'Vamos Conversar',
        
        // Technologies
        'tech-tag': 'Stack',
        'tech-title': 'Tecnologias que Domino',
        
        // Experience
        'exp-tag': 'Projetos',
        'exp-title': 'Experiência Profissional',
        'exp-card1-title': 'Engenharia Reversa de BD',
        'exp-card1-desc': 'Análise e documentação de estruturas de bancos de dados legados, mapeamento de relacionamentos e criação de diagramas ER para diversos sistemas.',
        'exp-card2-title': 'Desenvolvimento Web',
        'exp-card2-desc': 'Criação e manutenção de sites e sistemas web utilizando PHP, Laravel e WordPress, com foco em performance, SEO e experiência do usuário.',
        'exp-card3-title': 'Desenvolvimento Mobile',
        'exp-card3-desc': 'Experiência com desenvolvimento de aplicativos Android utilizando Android Studio e Java, criando soluções mobile nativas e responsivas.',
        
        // Education
        'edu-tag': 'Formação • Educação',
        'edu-title': 'Minha Jornada<br>Acadêmica',
        'edu-card1-title': 'Bacharelado em Sistemas de Informação',
        'edu-card1-desc': 'Formação superior com foco em desenvolvimento de software, banco de dados, engenharia de software e gestão de TI.',
        'edu-card1-year': 'Cursando',
        'edu-card2-title': 'Curso Técnico em Informática',
        'edu-card2-desc': 'Formação técnica com ênfase em programação, redes de computadores e suporte técnico.',
        'edu-card3-title': 'Montagem e Manutenção de Hardware',
        'edu-card3-desc': 'Curso técnico com foco em montagem, configuração e manutenção de computadores e periféricos.',
        'edu-card4-title': 'Especialização em Desenvolvimento',
        'edu-card4-desc': 'Cursos especializados em tecnologias modernas de desenvolvimento web e mobile.',
        'edu-card4-year': 'Contínuo',
        
        // Contact
        'contact-tag': 'Contato',
        'contact-title': 'Vamos trabalhar juntos!',
        'contact-desc': 'Estou sempre aberto a novas oportunidades e projetos interessantes. Entre em contato e vamos conversar!',
        
        // Form
        'form-name': 'Nome Completo',
        'form-name-ph': 'Seu nome',
        'form-email': 'E-mail',
        'form-phone': 'Telefone',
        'form-phone-ph': '(00) 00000-0000',
        'form-subject': 'Assunto',
        'form-subject-ph': 'Assunto do e-mail',
        'form-message': 'Mensagem',
        'form-message-ph': 'Escreva sua mensagem...',
        'form-submit': 'Enviar Mensagem',
        
        // Footer
        'footer-desc': 'Desenvolvedor Backend apaixonado por criar soluções digitais inovadoras e eficientes.',
        'footer-links': 'Links Rápidos',
        'footer-contact': 'Contato',
        'footer-rights': '© 2026 Pedro Alves. Todos os direitos reservados.',
        
        // Navbar
        'nav-home': 'Home',
        'nav-tech': 'Tecnologias',
        'nav-exp': 'Experiência',
        'nav-edu': 'Educação',
        'nav-contact': 'Contato'
    }
};

let currentLang = 'pt';

function switchLanguage(lang) {
    currentLang = lang;
    const elements = document.querySelectorAll('[data-translate]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-translate');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Translate placeholders
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(el => {
        const key = el.getAttribute('data-translate-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update navbar links
    const navLinks = document.querySelectorAll('.navbar a');
    const navKeys = ['nav-home', 'nav-tech', 'nav-exp', 'nav-edu', 'nav-contact'];
    navLinks.forEach((link, index) => {
        if (translations[lang][navKeys[index]]) {
            link.textContent = translations[lang][navKeys[index]];
        }
    });
    
    // Update language button
    const langToggle = document.getElementById('langToggle');
    if (lang === 'en') {
        langToggle.innerHTML = "<i class='bx bx-globe'></i><span>PT</span>";
        langToggle.title = 'Mudar para Português';
        langToggle.classList.add('active');
    } else {
        langToggle.innerHTML = "<i class='bx bx-globe'></i><span>EN</span>";
        langToggle.title = 'Switch to English';
        langToggle.classList.remove('active');
    }
    
    // Save preference
    localStorage.setItem('preferredLang', lang);
}

// ========== FORM VALIDATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // Language toggle
    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', function() {
        switchLanguage(currentLang === 'pt' ? 'en' : 'pt');
    });
    
    // Check saved preference
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        switchLanguage(savedLang);
    }

    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const submitBtn = document.getElementById('submitBtn');

    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Validation patterns
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const phonePattern = /^\(?[0-9]{2}\)?[\s.-]?[0-9]{4,5}[\s.-]?[0-9]{4}$/;

    // Character count for message
    messageInput.addEventListener('input', function() {
        const currentLength = this.value.length;
        const maxLength = 500;
        charCount.textContent = `${currentLength}/${maxLength}`;
        
        if (currentLength >= maxLength) {
            charCount.style.color = '#f85149';
        } else if (currentLength >= maxLength * 0.8) {
            charCount.style.color = '#d29922';
        } else {
            charCount.style.color = '#8b949e';
        }
    });

    // Phone mask
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 11) {
            if (value.length <= 2) {
                value = value.replace(/(\d{0,2})/, '($1');
            } else if (value.length <= 7) {
                value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
            } else {
                value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
            }
        }
        
        e.target.value = value;
    });

    // Validation functions
    function validateName() {
        const value = nameInput.value.trim();
        
        if (value.length < 3) {
            showError(nameInput, nameError, 'Nome deve ter no mínimo 3 caracteres');
            return false;
        }
        
        if (value.length > 100) {
            showError(nameInput, nameError, 'Nome deve ter no máximo 100 caracteres');
            return false;
        }
        
        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(value)) {
            showError(nameInput, nameError, 'Nome deve conter apenas letras');
            return false;
        }
        
        showSuccess(nameInput, nameError);
        return true;
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        
        if (!value) {
            showError(emailInput, emailError, 'E-mail é obrigatório');
            return false;
        }
        
        if (!emailPattern.test(value)) {
            showError(emailInput, emailError, 'Digite um e-mail válido');
            return false;
        }

        // Check for common disposable email domains
        const disposableDomains = ['tempmail.com', 'throwaway.com', '10minutemail.com', 'guerrillamail.com'];
        const domain = value.split('@')[1];
        if (disposableDomains.includes(domain)) {
            showError(emailInput, emailError, 'E-mails temporários não são permitidos');
            return false;
        }
        
        showSuccess(emailInput, emailError);
        return true;
    }

    function validatePhone() {
        const value = phoneInput.value.trim();
        const cleanPhone = value.replace(/\D/g, '');
        
        if (!value) {
            showError(phoneInput, phoneError, 'Telefone é obrigatório');
            return false;
        }
        
        if (cleanPhone.length < 10 || cleanPhone.length > 11) {
            showError(phoneInput, phoneError, 'Digite um telefone válido com DDD');
            return false;
        }

        // Check for invalid patterns (all same digits)
        if (/^(\d)\1+$/.test(cleanPhone)) {
            showError(phoneInput, phoneError, 'Telefone inválido');
            return false;
        }
        
        showSuccess(phoneInput, phoneError);
        return true;
    }

    function validateSubject() {
        const value = subjectInput.value.trim();
        
        if (value.length < 5) {
            showError(subjectInput, subjectError, 'Assunto deve ter no mínimo 5 caracteres');
            return false;
        }
        
        if (value.length > 150) {
            showError(subjectInput, subjectError, 'Assunto deve ter no máximo 150 caracteres');
            return false;
        }
        
        showSuccess(subjectInput, subjectError);
        return true;
    }

    function validateMessage() {
        const value = messageInput.value.trim();
        
        if (value.length < 20) {
            showError(messageInput, messageError, 'Mensagem deve ter no mínimo 20 caracteres');
            return false;
        }
        
        if (value.length > 500) {
            showError(messageInput, messageError, 'Mensagem deve ter no máximo 500 caracteres');
            return false;
        }

        // Check for spam patterns
        const spamPatterns = [
            /(.)\1{10,}/,  // Same character repeated 10+ times
            /(http|https|www\.)/gi,  // URLs (basic spam prevention)
        ];

        for (const pattern of spamPatterns) {
            if (pattern.test(value)) {
                showError(messageInput, messageError, 'Mensagem contém padrões não permitidos');
                return false;
            }
        }
        
        showSuccess(messageInput, messageError);
        return true;
    }

    function showError(input, errorElement, message) {
        input.classList.remove('success');
        input.classList.add('error');
        errorElement.textContent = message;
    }

    function showSuccess(input, errorElement) {
        input.classList.remove('error');
        input.classList.add('success');
        errorElement.textContent = '';
    }

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);

    // Clear error on focus
    [nameInput, emailInput, phoneInput, subjectInput, messageInput].forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.remove('error', 'success');
            const errorId = this.id + 'Error';
            document.getElementById(errorId).textContent = '';
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPhoneValid = validatePhone();
        const isSubjectValid = validateSubject();
        const isMessageValid = validateMessage();

        if (!isNameValid || !isEmailValid || !isPhoneValid || !isSubjectValid || !isMessageValid) {
            e.preventDefault();
            
            // Find first error and focus
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.focus();
            }
            
            return false;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Enviando...</span><i class="bx bx-loader-alt bx-spin"></i>';
    });

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========== HEADER SCROLL EFFECT ==========
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = 'rgba(13, 17, 23, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        } else {
            header.style.background = 'rgba(13, 17, 23, 0.95)';
            header.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });

    // ========== ACTIVE NAV LINK ==========
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    // ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    document.querySelectorAll('.tech-item, .experience-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});


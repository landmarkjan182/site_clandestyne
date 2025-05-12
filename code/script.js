document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburguer (compartilhado com eventos.js)
    initMenu();
    
    // Efeito de digitação
    const slogan = document.querySelector('.slogan');
    if (slogan) {
        const originalText = slogan.textContent;
        slogan.textContent = '';
        
        let i = 0;
        const typingEffect = setInterval(() => {
            if (i < originalText.length) {
                slogan.textContent += originalText.charAt(i);
                i++;
            } else {
                clearInterval(typingEffect);
            }
        }, 100);
    }

    // Scroll suave para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Efeito hover no botão
    const joinBtn = document.querySelector('.btn');
    if (joinBtn) {
        joinBtn.addEventListener('mouseover', () => {
            joinBtn.style.transform = 'scale(1.05)';
        });
        joinBtn.addEventListener('mouseout', () => {
            joinBtn.style.transform = 'scale(1)';
        });
    }

    // Card clicável de eventos
    const eventCard = document.querySelector('.clickable-card');
    if (eventCard) {
        eventCard.addEventListener('click', function() {
            const isGitHub = window.location.hostname.includes('github.io');
            const baseUrl = isGitHub 
                ? '/site_clandestyne/code/eventos/eventos.htm' 
                : 'code/eventos/eventos.htm';
            window.location.href = baseUrl;
        });
    }
});

// Função compartilhada para o menu
function initMenu() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    
    if (!hamburgerMenu || !sidebar) return;

    hamburgerMenu.addEventListener('click', function(e) {
        e.stopPropagation();
        hamburgerMenu.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburgerMenu.classList.remove('active');
                sidebar.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            e.target !== hamburgerMenu) {
            hamburgerMenu.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
}
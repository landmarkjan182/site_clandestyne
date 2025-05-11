document.addEventListener('DOMContentLoaded', function() {
   
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    
    
    console.log("Elementos carregados:");
    console.log("Hamburger:", hamburgerMenu);
    console.log("Sidebar:", sidebar);
    
   
    hamburgerMenu.addEventListener('click', function(e) {
        console.log("Menu clicado!");
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

   
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });

    
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            e.target !== hamburgerMenu) {
            sidebar.classList.remove('active');
        }
        
    });

    
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

    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    const joinBtn = document.querySelector('.btn');
    if (joinBtn) {
        joinBtn.addEventListener('mouseover', () => {
            joinBtn.style.transform = 'scale(1.05)';
        });
        joinBtn.addEventListener('mouseout', () => {
            joinBtn.style.transform = 'scale(1)';
        });
    }
});
function showEventDetails(eventNumber) {
    const details = document.getElementById(`eventDetails${eventNumber}`);
    details.classList.toggle('active');
    
    const btn = document.querySelector(`#eventDetails${eventNumber}`).previousElementSibling.querySelector('.btn-details');
    if (details.classList.contains('active')) {
        btn.innerHTML = '<i class="fas fa-times"></i> OCULTAR DETALHES';
    } else {
        btn.innerHTML = '<i class="fas fa-search"></i> VER DETALHES';
    }
}

// Modal para imagens (opcional)
document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.addEventListener('click', function() {
        // Implemente um lightbox aqui se desejar
        console.log('Imagem clicada:', this.src);
    });
});
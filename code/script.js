
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerMenu = document.getElementById('hamburgerMenu');
  const sidebar = document.getElementById('sidebar');
  
 
  hamburgerMenu.addEventListener('mouseenter', function() {
    this.style.boxShadow = '0 0 10px rgba(255, 0, 0, 0.7)';
  });
  
  hamburgerMenu.addEventListener('mouseleave', function() {
    this.style.boxShadow = 'none';
  });
  
  
  hamburgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    this.classList.toggle('active');
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
  

  const titles = document.querySelectorAll('.section-title');
  titles.forEach(title => {
    const text = title.textContent;
    title.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        title.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, 50);
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
                target.scrollIntoView({ behavior: 'smooth' });
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
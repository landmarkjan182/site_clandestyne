
document.addEventListener('DOMContentLoaded', function() {
    const slogan = document.querySelector('.slogan');
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
    
   
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    
    const joinBtn = document.getElementById('joinBtn');
    joinBtn.addEventListener('mouseover', () => {
        joinBtn.style.transform = 'scale(1.05)';
    });
    joinBtn.addEventListener('mouseout', () => {
        joinBtn.style.transform = 'scale(1)';
    });
});

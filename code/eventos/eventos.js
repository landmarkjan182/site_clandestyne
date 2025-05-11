document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    
  
    console.log("Elementos carregados:");
    console.log("Hamburger:", hamburgerMenu);
    console.log("Sidebar:", sidebar);
    
 
    hamburgerMenu.addEventListener('click', function(e) {
        console.log("Menu clicado!");
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
});

    
    document.addEventListener('DOMContentLoaded', function() {
        const isGitHub = window.location.hostname.includes('github.io');
        const basePath = isGitHub ? '/nome-do-repositorio/' : '/';
        
        document.querySelectorAll('a').forEach(link => {
            if(link.href.includes('index.html')) {
                link.href = basePath + 'index.html' + (link.hash || '');
            }
        });
    });

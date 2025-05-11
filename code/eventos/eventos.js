document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburgerMenu');
    const sidebar = document.getElementById('sidebar');
    
    // Debug (opcional)
    console.log("Elementos carregados:");
    console.log("Hamburger:", hamburgerMenu);
    console.log("Sidebar:", sidebar);
    
    // Abrir/fechar menu
    hamburgerMenu.addEventListener('click', function(e) {
        console.log("Menu clicado!");
        e.stopPropagation();
        hamburgerMenu.classList.toggle('active');
        sidebar.classList.toggle('active');
    });

    // Fechar menu ao clicar em um link (mobile)
    document.querySelectorAll('.sidebar-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                hamburgerMenu.classList.remove('active');
                sidebar.classList.remove('active');
            }
        });
    });

    // Fechar menu ao clicar fora (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && 
            !sidebar.contains(e.target) && 
            e.target !== hamburgerMenu) {
            hamburgerMenu.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
});
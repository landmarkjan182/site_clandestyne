document.addEventListener('DOMContentLoaded', function() {
  const REPO_NAME = 'site_clandestyne';
  const IS_GITHUB = window.location.hostname.includes('github.io');
  
  
  document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');
      
     
      if(href && (href.includes('index.html') || href === '/')) {
          const newHref = IS_GITHUB 
              ? `/${REPO_NAME}/index.html${link.hash || ''}` 
              : `/index.html${link.hash || ''}`;
          link.href = newHref;
      }
      
      
      else if(href && !href.startsWith('http') && !href.startsWith('#')) {
          const newHref = IS_GITHUB 
              ? `/${REPO_NAME}${href.startsWith('/') ? href : '/' + href}`
              : href;
          link.href = newHref;
      }
  });

  
  if(window.history.replaceState) {
      window.history.replaceState(null, null, window.location.pathname);
  }
});
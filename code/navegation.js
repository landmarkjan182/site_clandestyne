
document.addEventListener('DOMContentLoaded', function() {
    
    if(window.history.replaceState) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  
   
    document.querySelectorAll('a[href*="index.html"], a[href="/"]').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.replace(window.location.origin + '/');
      });
    });
  });
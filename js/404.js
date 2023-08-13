if (window.history && window.history.pushState) {
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        
        var href = link.getAttribute('href');
        var cleanHref = href.replace('.html', '');
  
        window.history.pushState({}, '', cleanHref);
  
        // Fetch and display the content of the new URL (you need to implement this)
      });
    });
  }
  
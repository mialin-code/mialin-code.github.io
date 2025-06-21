document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
  
        target.classList.remove('blink-highlight');
        void target.offsetWidth;
        target.classList.add('blink-highlight');
      }
    });
  });
  
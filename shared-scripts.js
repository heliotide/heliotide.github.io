      // match elements with class="contact-email-address" to protect email from scrapers
      (function() {
        const user = 'hello';
        const domain = 'heliotide.com';
        const address = user + '@' + domain;

        document.querySelectorAll('.contact-email-address').forEach(function(link) {
          link.href = 'mailto:' + address;
          link.textContent = address;
        });
      })();
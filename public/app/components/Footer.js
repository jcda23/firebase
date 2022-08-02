export function Footer() {
  const $footer = document.createElement("footer");
  $footer.id = "main__footer";
  $footer.classList.add("main__footer");
  $footer.innerHTML = `
      <div class="footer__section">
      <h2 class="footer__title">About Us</h2>
      <p class="footer__txt">Curabitur non nulla sit amet nislinit tempus convallis quis ac lectus. lac inia eget
        consectetur sed, convallis at tellus. Nulla porttitor accumsana tincidunt.</p>
    </div>
    <div class="footer__section">
      <h2 class="footer__title">Location :</h2>
      <p class="footer__txt">0926k 4th block building, king Avenue, New York City</p>
      <h2 class="footer__title">Contact</h2>
      <p class="footer__txt">Phone : +121 098 8907 9987</p>
      <p class="footer__txt">Email : info@example.com</p>
    </div>
    <div class="footer__section">
      <h2 class="footer__title">Quick Links</h2>
      <a href="" class="footer__link">Home</a>
      <a href="" class="footer__link">About</a>
      <a href="" class="footer__link">Error</a>
      <a href="" class="footer__link">Shop</a>
      <a href="" class="footer__link">Contact Us</a>
    </div>
    <div class="footer__section">
      <h2 class="footer__title">Sign up for your offers</h2>
      <p class="footer__txt">By subscribing to our mailing list you will always get latest news and updates from us.</p>
      <input type="email" class="footer__input" placeholder="Enter your email">
    </div>
    <p class="copy">© 2022. All Rights Reserved | Design by jdasilva</p>`;

  const $stylos = document.createElement("style");
  $stylos.innerHTML = ` 


  .main__footer {
  margin: 0 auto 3rem auto;
  margin-top: 2rem;
  background: #151515;
  color: white;
  padding: 2rem 1rem;
}

.footer__title {
  border-bottom: 1px dotted #555;
  padding-bottom: 20px;
}

.footer__txt {
  color: #555;
}

.footer__link {
  color: #555;
  text-decoration: none;
  display: block;
  padding: 10px 0;
}

.footer__input {
  background: #151515;
  width: 100%;
  display: block;
  padding: 20px;
  border: 1px solid #555;
}

.copy {
  color: #555;
}

@media screen and (min-width: 1024px) {

  .main__footer {
    background: #151515;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    margin-bottom: 0;
  }

  .copy {
    grid-column-start: span 4;
    text-align: center;
  }
}`;
  document.head.appendChild($stylos);
  return $footer;
}

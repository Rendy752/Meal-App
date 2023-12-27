class FooterContainer extends HTMLElement {
  connectedCallback() {
    this.className = 'page-footer orange darken-3';
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="container center-align">
        Copyright © 2023 Meal App
    </div>
      `;
  }
}
customElements.define('footer-container', FooterContainer, {
  extends: 'footer'
});

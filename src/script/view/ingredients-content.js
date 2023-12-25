class IngredientsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    Ingredients Content
    `;
  }
}

customElements.define('ingredients-content', IngredientsContent);

class IngredientsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
      Ingredients Content
    </div>
    `;
  }
}

customElements.define('ingredients-content', IngredientsContent);

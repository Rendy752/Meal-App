class IngredientsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
      <h5>Ingredient List</h5>
      <div class="divider"></div>
    </div>
    `;
  }
}

customElements.define('ingredients-content', IngredientsContent);

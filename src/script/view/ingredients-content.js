import '../component/ingredients-list';

class IngredientsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
      <h3 class="content-title">Ingredient List (Maintenance)</h3>
      <div class="divider"></div>
      <ingredients-list></ingredients-list>
    </div>
    `;
  }
}

customElements.define('ingredients-content', IngredientsContent);

import "../component/ingredients-list";
import "../component/meal-detail-modal";

class IngredientsContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="section container">
        <h3 class="content-title">Ingredient List</h3>
        <div class="divider"></div>
        <ingredients-list></ingredients-list>
        <meal-detail-modal></meal-detail-modal>
      </div>
    `;
  }
}

customElements.define("ingredients-content", IngredientsContent);

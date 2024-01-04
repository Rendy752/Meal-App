import '../component/categories-list';
import '../component/meal-detail-modal';

class CategoriesContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
      <h3 class="content-title">Category List</h3>
      <div class="divider"></div>
      <categories-list></categories-list>
      <meal-detail-modal></meal-detail-modal>
    </div>
    `;
  }
}

customElements.define('categories-content', CategoriesContent);

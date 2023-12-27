import '../component/categories-list';

class CategoriesContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
      <h5>Category List</h5>
      <div class="divider"></div>
      <categories-list></categories-list>
    </div>
    `;
  }
}

customElements.define('categories-content', CategoriesContent);

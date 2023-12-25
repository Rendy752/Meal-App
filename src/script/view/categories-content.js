class CategoriesContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="section container">
      Categories Content
    </div>
    `;
  }
}

customElements.define('categories-content', CategoriesContent);

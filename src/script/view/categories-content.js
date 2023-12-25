class CategoriesContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    Categories Content
    `;
  }
}

customElements.define('categories-content', CategoriesContent);

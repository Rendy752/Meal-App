class LinearLoading extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="progress yellow">
        <div class="indeterminate"></div>
      </div>
      `;
  }
}
customElements.define('linear-loading', LinearLoading);

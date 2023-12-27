import './category-item';
import './linear-loading';

class CategoriesList extends HTMLElement {
  set categories(categories) {
    this._categories = categories;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="category-list-container" class="row">
        <ul class="collapsible"></ul>    
    </div>
    `;
    this._categories.forEach((category) => {
      const categoryItemElement = document.createElement('li', {
        is: 'category-item'
      });

      categoryItemElement.category = category;
      this.querySelector('.collapsible').appendChild(categoryItemElement);
    });
  }

  renderLoading() {
    this.innerHTML = `
    <div class="center-align">
      <linear-loading></linear-loading>
    </div>
    `;
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
    <div class="center-align flow-text">
      <span class="btn-floating pulse red darken-3"><i class="material-icons black-text">notifications_active</i></span>
      <span>${message}</span>
    </div>
    `;
  }
}

customElements.define('categories-list', CategoriesList);

import './ingredient-item';
import './linear-loading';

class IngredientsList extends HTMLElement {
  set ingredients(ingredients) {
    this._ingredients = ingredients;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="ingredient-list-container" class="row">
        <ul class="collapsible"></ul>    
    </div>
    `;
    this._ingredients.forEach((ingredient) => {
      const ingredientItemElement = document.createElement('li', {
        is: 'ingredient-item',
      });

      ingredientItemElement.ingredient = ingredient;
      this.querySelector('.collapsible').appendChild(ingredientItemElement);
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

customElements.define('ingredients-list', IngredientsList);

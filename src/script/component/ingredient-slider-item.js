class IngredientSliderItem extends HTMLLIElement {
  set ingredient(ingredient) {
    this._ingredient = ingredient;
    this.className = 'flow-text';
    this.render();
  }

  render() {
    this.innerHTML = `
    <img class="responsive-img" src="https://www.themealdb.com/images/ingredients/${this._ingredient.ingredient}.png">
    <div class="caption left-align">
      <h5 class="card-panel orange lighten-5 transparent hoverable black-text waves-effect waves-block waves-light">
      ${this._ingredient.measure} ${this._ingredient.ingredient}
      </h5>
    </div>
      `;
  }
}

customElements.define('ingredient-slider-item', IngredientSliderItem, {
  extends: 'li'
});

import IngredientsData from '../data/ingredients-data';

class IngredientItem extends HTMLLIElement {
  set ingredient(ingredient) {
    const setIngredient = async () => {
      this._ingredient = ingredient;
      const showListMeal = async (name) => {
        try {
          const listMeal = await IngredientsData.searchMealByIngredient(name);
          return listMeal;
        } catch (e) {
          return null;
        }
      };
      this._listMeal = await showListMeal(ingredient.strIngredient);
      this.render();
    };
    setIngredient();
  }

  render() {
    this.innerHTML = `
        <div class="collapsible-header orange darken-4 waves-effect waves-light">
        <div class="row hoverable orange darken-3 ingredient-item-header waves-effect waves-light">
            <div class="col l4 s12 center-align">
            <img src="https://www.themealdb.com/images/ingredients/${this._ingredient.strIngredient}.png" class="responsive-img circle white">
            </div>
            <div class="col l8 s12">
                <h5>${this._ingredient.strIngredient}</h5>
            </div>
        </div>
        </div>
        <div class="collapsible-body orange darken-3">
        <div id="list-ingredients-container" class="row"></div>
        </div>
    `;
    if (this._listMeal !== null) {
      this._listMeal.forEach((meal) => {
        this.querySelector('#list-ingredients-container').innerHTML += `
            <img src="${meal.strMealThumb}" class="tooltipped col l3 m4 s6" 
            data-position="top"
            data-tooltip="${meal.strMeal}">
        `;
      });
    } else {
      this.querySelector('#list-ingredients-container').innerHTML += `
            <h6>There're no meal in this ${this._ingredient.strIngredient} ingredient</h6>
        `;
    }
    const tooltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltip);
  }
}

customElements.define('ingredient-item', IngredientItem, { extends: 'li' });

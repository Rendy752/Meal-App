import MealData from '../data/meal-data';

class MealItemMini extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  onButtonMealDetailClicked = async () => {
    try {
      const mealDetailModalElement =
        document.querySelector('meal-detail-modal');
      mealDetailModalElement.renderLoading();
      const result = await MealData.getMealDetails(this._meal.idMeal);
      mealDetailModalElement.detail = result;
    } catch (e) {
      mealDetailModalElement.renderError(e);
    }
  };

  render() {
    this.innerHTML = `
    <img id="showDetail" src="${this._meal.strMealThumb}" class="tooltipped col l3 m4 s6 modal-trigger" href="#meal-detail"
            data-position="top"
            data-tooltip="${this._meal.strMeal}"> 
    `;
    this.querySelector('#showDetail').addEventListener(
      'click',
      this.onButtonMealDetailClicked,
    );
    const materialboxed = this.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);
  }
}

customElements.define('meal-item-mini', MealItemMini);

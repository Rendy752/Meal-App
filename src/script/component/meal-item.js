import MealData from '../data/meal-data';

class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.className = 'col l3 m4 s6';
    this.render();
  }

  get idMeal() {
    return this._meal.idMeal;
  }

  onButtonMealDetailClicked = async () => {
    try {
      const mealDetailModalElement =
        document.querySelector('meal-detail-modal');
      mealDetailModalElement.renderLoading();
      const result = await MealData.getMealDetails(this.idMeal);
      mealDetailModalElement.detail = result;
    } catch (e) {
      mealDetailModalElement.renderError(e);
    }
  };

  render() {
    this.innerHTML = `
    <div class="card">
    <div class="card-image">
      <img class="materialboxed" src="${this._meal.strMealThumb}">
    </div>
    <span class="new badge green col" data-badge-caption="">${this._meal.strCategory}</span>
    <div class="card-content orange darken-4">
      <div class="valign-wrapper row activator hoverable">
        <span class="card-title grey-text text-darken-4">${this._meal.strMeal}</span>
        <i class="material-icons right">more_vert</i>
      </div>
      <a id="showDetail" class="waves-effect waves-light btn orange darken-2 hoverable modal-trigger" href="#meal-detail"><i class="material-icons right">navigate_next</i>Detail</a>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Instruction<i class="material-icons right">close</i></span>
      <p>${this._meal.strInstructions}</p>
    </div>
  </div>    
    `;
    this.querySelector('#showDetail').addEventListener(
      'click',
      this.onButtonMealDetailClicked
    );
    const materialboxed = this.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);
  }
}

customElements.define('meal-item', MealItem);

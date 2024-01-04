import MealData from '../data/meal-data';

class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.className = 'col xl3 l4 m6 s12';
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
      <div class="valign-wrapper row activator hoverable tooltipped">
        <span class="activator str-meal card-title grey-text text-darken-4">${this._meal.strMeal}</span>
        <i class="material-icons orange-text darken-2">more_vert</i>
      </div>
      <a id="showDetail" class="waves-effect waves-light btn orange darken-2 hoverable modal-trigger" 
      href="#meal-detail"><i class="hide-on-small-and-down material-icons right">navigate_next</i>Detail</a>
    </div>
    <div class="card-reveal orange darken-2">
      <i class="card-title material-icons right">close</i>
      <h6 class="grey-text text-darken-4 flow-text">Ingredients</h6>
      <div class="divider"></div>
    </div>
  </div>    
    `;
    [...Array(20)].forEach((_, number) => {
      const ingredient = this._meal['strIngredient' + (number + 1)];
      const measure = this._meal['strMeasure' + (number + 1)];
      if (ingredient) {
        this.querySelector('.card-reveal').innerHTML += `
        <div class="row valign-wrapper">
          <img class="responsive-img col s4 orange lighten-4 circle" src="https://www.themealdb.com/images/ingredients/${ingredient}-Small.png">
          <span class="col s8">${measure} ${ingredient}</span>
        </div>`;
      }
    });

    this.querySelector('#showDetail').addEventListener(
      'click',
      this.onButtonMealDetailClicked,
    );
    const materialboxed = this.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);
  }
}

customElements.define('meal-item', MealItem);

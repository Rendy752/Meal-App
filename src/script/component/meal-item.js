import '../component/meal-detail-modal';
import MealData from '../data/meal-data';
class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.className = 'col l3 m4 s6';
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get idMeal() {
    console.log(this._meal.idMeal);
    return this._meal.idMeal;
  }

  // onButtonMealDetailClicked = async (id) => {
  //   try {
  //     const mealDetailModalElement =
  //       document.querySelector('meal-detail-modal');
  //     console.log(mealDetailModalElement);
  //     mealDetailModalElement.renderLoading();
  //     console.log(id);
  //     const result = await MealData.getMealDetails(id);
  //     console.log(result);
  //     mealDetailModalElement.detail = result;
  //     console.log(mealDetailModalElement);
  //   } catch (e) {
  //     mealDetailModalElement.renderError(e);
  //   }
  // };

  render() {
    this.innerHTML = `
    <div class="card">
    <div class="card-image">
      <img class="materialboxed" src="${this._meal.strMealThumb}">
    </div>
    <div class="card-content">
      <span class="card-title activator hoverable grey-text text-darken-4">${this._meal.strMeal}<i class="material-icons right">more_vert</i></span>
      <a id="showDetail" class="waves-effect waves-light btn orange darken-1 hoverable modal-trigger" href="#meal-detail"><i class="material-icons right">navigate_next</i>Detail</a>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Instruction<i class="material-icons right">close</i></span>
      <p>${this._meal.strInstructions}</p>
    </div>
  </div>    
    `;
    // const onButtonMealDetailClicked = async (id) => {
    //   try {
    //     mealDetailModalElement.renderLoading();
    //     console.log(id);
    //     const result = await MealData.getMealDetails(id);
    //     mealDetailModalElement.detail = result;
    //   } catch (e) {
    //     mealDetailModalElement.renderError(e);
    //   }
    // };
    // console.log(this);
    // this.clickEvent = onButtonMealDetailClicked;

    // this.querySelector('#showDetail').addEventListener(
    //   'click',
    //   this.onButtonMealDetailClicked(this._meal.idMeal)
    // );

    const mealDetailModalElement = document.querySelector('meal-detail-modal');

    const onButtonMealDetailClicked = async () => {
      try {
        mealDetailModalElement.renderLoading();
        console.log(this.idMeal);
        const result = await MealData.getMealDetails(this.idMeal);
        mealDetailModalElement.detail = result;
      } catch (e) {
        mealDetailModalElement.renderError(e);
      }
    };

    console.log(this.querySelector('#showDetail'));
    this.querySelector('#showDetail').addEventListener(
      'click',
      onButtonMealDetailClicked
    );
    const materialboxed = this.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);
  }
}

customElements.define('meal-item', MealItem);

import './meal-item';
import './linear-loading';

class MealList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.innerHTML = `
    <div id="meal-list-container" class="row"></div>
    `;
    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement('meal-item');
      mealItemElement.meal = meal;
      this.querySelector('#meal-list-container').appendChild(mealItemElement);
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

customElements.define('meal-list', MealList);

import './meal-item';

class MealList extends HTMLElement {
  set meals(meals) {
    this.meals = meals;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this.meals.forEach((meal) => {
      const mealItemElement = document.createElement('meal-item');
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML += `
    <style>
    .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>
    <h2 class="placeholder">${message}</h2>`;
  }
}

customElements.define('meal-list', MealList);

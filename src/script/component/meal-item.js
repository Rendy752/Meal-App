class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.className="col l3 m4 s6";
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${this._meal.strMealThumb}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${this._meal.strMeal}<i class="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Instruction<i class="material-icons right">close</i></span>
      <p>${this._meal.strInstructions}</p>
    </div>
  </div>
            
    `;
  }
}

customElements.define('meal-item', MealItem);

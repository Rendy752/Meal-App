class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.className="col l3 m4 s6";
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
    <a href="${this._meal.strSource}" target="_blank"><div class="card-image waves-effect waves-block waves-light">
      <img src="${this._meal.strMealThumb}">
    </div></a>
    <div class="card-content">
      <span class="card-title activator hoverable grey-text text-darken-4">${this._meal.strMeal}<i class="material-icons right">more_vert</i></span>
      <a class="waves-effect waves-light btn orange darken-1 hoverable"><i class="material-icons right">navigate_next</i>Detail</a>
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

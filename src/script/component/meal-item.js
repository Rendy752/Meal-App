class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.className = 'col l3 m4 s6';
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="card">
    <div class="card-image">
      <img class="materialboxed" src="${this._meal.strMealThumb}">
    </div>
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
    const materialboxed = this.querySelectorAll('.materialboxed');
    M.Materialbox.init(materialboxed);
  }
}

customElements.define('meal-item', MealItem);

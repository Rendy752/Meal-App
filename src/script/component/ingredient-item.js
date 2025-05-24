import IngredientsData from "../data/ingredients-data";
import MealData from "../data/meal-data";
import "./meal-item-mini";

const cache = new Map();

class IngredientItem extends HTMLLIElement {
  constructor() {
    super();
    this.debounceTimeout = null;
  }

  set ingredient(ingredient) {
    this._ingredient = ingredient;
    this.fetchAndRender();
  }

  async fetchAndRender() {
    clearTimeout(this.debounceTimeout);

    this.debounceTimeout = setTimeout(async () => {
      try {
        const cacheKey = `ingredient_${this._ingredient.strIngredient}`;
        if (cache.has(cacheKey)) {
          this._listMeal = cache.get(cacheKey);
          this.render();
          return;
        }

        const listMeal = await IngredientsData.searchMealByIngredient(
          this._ingredient.strIngredient
        );
        this._listMeal = listMeal;
        cache.set(cacheKey, listMeal); // Store in cache
        this.render();
      } catch (e) {
        this.renderError(e);
      }
    }, 300);
  }

  onButtonMealDetailClicked = async (id) => {
    try {
      const mealDetailModalElement =
        document.querySelector("meal-detail-modal");
      mealDetailModalElement.renderLoading();
      const result = await MealData.getMealDetails(id);
      mealDetailModalElement.detail = result;
    } catch (e) {
      mealDetailModalElement.renderError(e);
    }
  };

  render() {
    this.innerHTML = `
      <div class="collapsible-header orange darken-4 waves-effect waves-light">
        <div class="row hoverable orange darken-3 ingredient-item-header waves-effect waves-light">
          <div class="col l4 s12 center-align">
            <img src="https://www.themealdb.com/images/ingredients/${
              this._ingredient.strIngredient
            }.png" class="responsive-img circle white">
          </div>
          <div class="col l8 s12">
            <h5>${this._ingredient.strIngredient}</h5>
            <p>${
              this._ingredient.strDescription
                ? this._ingredient.strDescription.replace("\n", "<br>")
                : "No description available."
            }</p>
          </div>
        </div>
      </div>
      <div class="collapsible-body orange darken-3">
        <div id="list-ingredients-container" class="row"></div>
      </div>
    `;

    const container = this.querySelector("#list-ingredients-container");
    if (this._listMeal && this._listMeal.length > 0) {
      this._listMeal.forEach((meal) => {
        const mealItemMiniElement = document.createElement("meal-item-mini");
        mealItemMiniElement.meal = meal;
        mealItemMiniElement.addEventListener("click", () =>
          this.onButtonMealDetailClicked(meal.idMeal)
        );
        container.appendChild(mealItemMiniElement);
      });
    } else {
      container.innerHTML = `
        <h6>No meals found for ${this._ingredient.strIngredient} ingredient.</h6>
      `;
    }

    const tooltip = document.querySelectorAll(".tooltipped");
    M.Tooltip.init(tooltip);
  }

  renderError(message) {
    this.innerHTML = `
      <div class="center-align flow-text">
        <span class="btn-floating pulse red darken-3"><i class="material-icons black-text">notifications_active</i></span>
        <span>${message}</span>
      </div>
    `;
  }
}

customElements.define("ingredient-item", IngredientItem, { extends: "li" });

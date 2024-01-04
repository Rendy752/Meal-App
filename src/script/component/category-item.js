import CategoriesData from '../data/categories-data';
import MealData from '../data/meal-data';
import './meal-item-mini';

class CategoryItem extends HTMLLIElement {
  set category(category) {
    const setCategory = async () => {
      this._category = category;
      const showListMeal = async (name) => {
        try {
          const listMeal = await CategoriesData.searchMealByCategory(name);
          return listMeal;
        } catch (e) {
          return null;
        }
      };
      this._listMeal = await showListMeal(category.strCategory);
      this.render();
    };
    setCategory();
  }

  onButtonMealDetailClicked = async (id) => {
    try {
      const mealDetailModalElement =
        document.querySelector('meal-detail-modal');
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
        <div class="row hoverable orange darken-3 category-item-header waves-effect waves-light">
            <div class="col l4 s12 center-align">
            <img src=${
              this._category.strCategoryThumb
            } class="responsive-img circle white">
            </div>
            <div class="col l8 s12">
                <h5>${this._category.strCategory}</h5>
                <p>${this._category.strCategoryDescription.replace(
                  '\n',
                  '<br>',
                )}</p>
            </div>
        </div>
        </div>
        <div class="collapsible-body orange darken-3">
        <div id="list-meal-container" class="row"></div>
        </div>
    `;
    this._listMeal.forEach((meal) => {
      const mealItemMiniElement = document.createElement('meal-item-mini');
      mealItemMiniElement.meal = meal;
      this.querySelector('#list-meal-container').appendChild(
        mealItemMiniElement,
      );
      // this.querySelector('#list-meal-container').innerHTML += `
      //       <img id="showDetail" src="${meal.strMealThumb}" class="tooltipped col l3 m4 s6 modal-trigger" href="#meal-detail"
      //       data-position="top"
      //       data-tooltip="${meal.strMeal}">
      //   `;
      // console.log(meal.idMeal);
      // this.querySelector('#showDetail').addEventListener(
      //   'click',
      //   this.onButtonMealDetailClicked(meal.idMeal),
      // );
    });
    const tooltip = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(tooltip);
  }
}

customElements.define('category-item', CategoryItem, { extends: 'li' });

import '../component/nav-bar';
import './meals-content';
import './categories-content';
import './ingredients-content';
import '../component/search-bar';
import '../component/meal-list';
import '../component/meal-item';
import '../component/meal-detail-modal';
import MealData from '../data/meal-data';

const main = async (content = 'meals-content') => {
  if (content === 'meals-content') {
    const searchElement = document.querySelector('search-bar');
    const mealListElement = document.querySelector('meal-list');

    const onButtonSearchKeywordClicked = async () => {
      try {
        mealListElement.renderLoading();
        console.log(searchElement.keyword);
        const result = await MealData.searchMeal(searchElement.keyword);
        mealListElement.meals = result;
      } catch (e) {
        mealListElement.renderError(e);
      }
    };
    searchElement.clickEvent = onButtonSearchKeywordClicked;

    const showRandomMeal = async () => {
      try {
        mealListElement.renderLoading();
        const result = await MealData.searchRandomMeal();
        mealListElement.meals = result;
      } catch (e) {
        mealListElement.renderError(e);
      }
    };

    await showRandomMeal();
    // const mealDetailModalElement = document.querySelector('meal-detail-modal');
    // const mealItemElement = document.querySelector('meal-item');

    // const onButtonMealDetailClicked = async () => {
    //   try {
    //     mealDetailModalElement.renderLoading();
    //     console.log(mealItemElement.idMeal);
    //     const result = await MealData.getMealDetails(mealItemElement.idMeal);
    //     mealDetailModalElement.detail = result;
    //   } catch (e) {
    //     mealDetailModalElement.renderError(e);
    //   }
    // };
    // console.log(mealItemElement);
    // mealItemElement.clickEvent = onButtonMealDetailClicked();

    // mealItemElement.forEach((item) => {
    //   console.log(item);
    //   item.clickEvent = onButtonMealDetailClicked();
    // });

    const sidenav = document.querySelectorAll('.sidenav');
    const options = {
      edge: 'left'
    };
    M.Sidenav.init(sidenav, options);

    const modal = document.querySelectorAll('meal-detail-modal');
    M.Modal.init(modal);
  }
};

export default main;

import '../component/nav-bar';
import '../component/footer-container';
import './meals-content';
import './categories-content';
import './ingredients-content';
import MealData from '../data/meal-data';

const main = async (content = 'meals-content') => {
  if (content === 'meals-content') {
    const searchElement = document.querySelector('search-bar');
    const mealListElement = document.querySelector('meal-list');

    const onButtonSearchKeywordClicked = async () => {
      try {
        mealListElement.renderLoading();
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

    const sidenav = document.querySelectorAll('.sidenav');
    const options = {
      edge: 'left'
    };
    M.Sidenav.init(sidenav, options);

    const modal = document.querySelectorAll('meal-detail-modal');
    M.Modal.init(modal, { preventScrolling: false });
  }
};

export default main;

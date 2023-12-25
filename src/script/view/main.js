import '../component/nav-bar';
import './meals-content';
import './categories-content';
import './ingredients-content';
import '../component/search-bar';
import '../component/meal-list';
import MealData from '../data/meal-data';

function main() {
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
            console.log(result);
            mealListElement.meals = result;
        } catch (e) {
            mealListElement.renderError(e);
        }
    };
    showRandomMeal();
};

export default main;

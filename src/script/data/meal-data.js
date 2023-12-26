const baseUrl = 'https://www.themealdb.com/api/json/v1/1';
class MealData {
  static searchMeal = async (keyword) => {
    try {
      const response = await fetch(`${baseUrl}/search.php?s=${keyword}`);
      const responseJson = await response.json();
      return responseJson.meals
        ? Promise.resolve(responseJson.meals)
        : Promise.reject(
            `Meal <span class="red-text">${keyword}</span> is not found`
          );
    } catch (e) {
      return Promise.reject('Problem occurred, such as your internet');
    }
  };

  static searchRandomMeal = async () => {
    try {
      const response = await fetch(`${baseUrl}/random.php`);
      const responseJson = await response.json();
      return Promise.resolve(responseJson.meals);
    } catch (e) {
      return Promise.reject('Problem occurred, such as your internet');
    }
  };

  static getMealDetails = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/lookup.php?i=${id}`);
      const responseJson = await response.json();
      return Promise.resolve(responseJson.meals);
    } catch (e) {
      return Promise.reject('Problem occurred, such as your internet');
    }
  };
}

export default MealData;

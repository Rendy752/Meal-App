const baseUrl = "https://www.themealdb.com/api/json/v1/1";

class IngredientsData {
  static async showIngredients() {
    try {
      const response = await fetch(`${baseUrl}/list.php?i=list`);
      const responseJson = await response.json();
      return Promise.resolve(responseJson.meals || []);
    } catch (e) {
      return Promise.reject(
        "Problem occurred, such as your internet. Please try again later"
      );
    }
  }

  static async searchMealByIngredient(ingredient) {
    try {
      const response = await fetch(`${baseUrl}/filter.php?i=${ingredient}`);
      const responseJson = await response.json();
      return Promise.resolve(responseJson.meals || []);
    } catch (e) {
      return Promise.reject(
        "Problem occurred, such as your internet. Please try again later"
      );
    }
  }
}

export default IngredientsData;

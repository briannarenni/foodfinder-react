import ky from 'ky';
import { MenuItem, Restaurant } from './Models';

class ApiService {
  URL = 'https://foodfindernetapi.azurewebsites.net';
  cuisines = ['american', 'chinese', 'greek', 'italian', 'mexican', 'thai'];
  restaurants = [];
  menuItems = [];

  async getRestaurants() {
    const data = await ky.get(`${this.URL}/restaurants`).json();
    this.restaurants = data.map(restaurant => {
      const { RestName, Cuisine, City, Grade, Rating } = restaurant;
      return new Restaurant(RestName, Cuisine, City, Grade, Rating);
    });
    return this.restaurants;
  }

  async getCuisineMenu(cuisine) {
    const params = new URLSearchParams({ cuisine });
    const data = await ky.get(`${this.URL}/menus/cuisine`, { searchParams: params }).json();
    this.menuItems = data.map(menuItem => {
      const { ItemName, ItemPrice, ItemGroup } = menuItem;
      return new MenuItem(ItemName, ItemPrice, ItemGroup);
    });
    return this.menuItems;
  }
}

export default ApiService;

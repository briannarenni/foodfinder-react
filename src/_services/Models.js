export const sortFilters = ['Name (A-Z)', 'Highest Score', 'Lowest Score'];

export const cuisineFilters = ['American', 'Chinese', 'Greek', 'Italian', 'Mexican', 'Thai'];

export const cityFilters = ['Atlanta', 'Chicago', 'Las Vegas', 'Los Angeles', 'Miami', 'NYC', 'Orlando', 'Seattle'];

export class MenuItem {
  constructor(name, price, group) {
    this.ItemName = name;
    this.ItemPrice = price;
    this.ItemGroup = group;
  }
}

export class Restaurant {
  constructor(name, cuisine, city, grade, rating) {
    this.RestName = name;
    this.Cuisine = cuisine;
    this.City = city;
    this.Grade = grade;
    this.Rating = rating;
  }
}


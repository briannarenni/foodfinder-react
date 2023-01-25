export const cuisines = ['American', 'Chinese', 'Greek', 'Italian', 'Mexican', 'Thai'];

export const cities = ['Atlanta', 'Chicago', 'Houston', 'Los Angeles', 'Miami', 'New Orleans', 'New York City', 'Orlando', 'Portland', 'Seattle', 'San Diego', 'San Francisco'];

export const sortOptions = ['Name', 'Highest Rating', 'Lowest Rating'];

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


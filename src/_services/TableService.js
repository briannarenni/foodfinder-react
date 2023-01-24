import { MenuItem, Restaurant } from './Models';

class TableService {
  _restaurants = [];
  _currTableList = [];

  get restaurants() { return this._restaurants; }
  set restaurants(value) { this._restaurants = value; }

  get currTableList() { return this.currTableList; }
  set currTableList(value) { this.currTableList = value; }

}

export default new TableService();

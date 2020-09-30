import * as superagent from 'superagent';

export class StockItemService {
  constructor(baseUrl) {
    this.baseUrl = baseUrl || '/api';
  }

  async listStockItems() {
    console.log("calling bff with url;" + this.baseUrl)
    return superagent
      .get(this.baseUrl + '/stock-items')
      .set('accept', 'application/json')
      .then(res => {
        console.log('Got response: ', res);
        return res.body || [];
      });
  }
}
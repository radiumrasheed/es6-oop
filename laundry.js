class Laundry {

  constructor() {
    this.queue = [];
    this.clothes = [];
  }


  addClothes(cloth) {
    this.clothes.push(cloth);

    return this;
  }


  removeClothes(cloth) {
    const clothIndex = this.clothes.findIndex(value => value === cloth);
    this.clothes.splice(clothIndex, 1);

    return this;
  }


  wash() {
    this.clothes = 'washed';

    const item = new Promise(resolve => setTimeout(() => resolve(1), 3000)).catch()

    this.queue.push(item);

    return this;
  }


  rinse() {
    this.clothes = 'rinsed';

    const item = new Promise(resolve => setTimeout(() => resolve(2), 2000)).catch()

    this.queue.push(item);

    return this;
  }


  finish() {
    return Promise.all(this.queue);
  }
}


module.exports = Laundry;

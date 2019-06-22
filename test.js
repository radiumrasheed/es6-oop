const Laundry = require('./laundry');

const laundry = new Laundry();

// class chain methods...
laundry.wash().rinse().finish().then(console.log).catch(console.error);

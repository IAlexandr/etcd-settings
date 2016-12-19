import setter from './setter';
import connections from './default-connections';

console.log('> Set default settings');
setter(connections)
  .then(() => {
    console.log('> Done.');
  })
  .catch(err => {
    throw err;
  });

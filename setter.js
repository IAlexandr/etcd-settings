import Bletcd from 'bletcd';
import async from 'async';
import options from './options';
var etcd = new Bletcd({ url: options.ETCD_CONN });

function setNodeFunc ({ path, value, options }) {
  return (callback) => {
    etcd.put(path, value, options, (err, response) => {
      if (err) {
        console.error(`Failed put ${path}`, err);
        return callback(err);
      }
      console.log(`${path} putted.`);
      return callback();
    });
  }
}

export default function (connections = {}) {
  return new Promise((resolve, reject) => {
    const funcs = Object.keys(connections).map(path => {
      return setNodeFunc({
        path,
        value: JSON.stringify(connections[path].value),
        options: connections[path].options || {}
      });
    });
    async.waterfall(funcs, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

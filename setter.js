import Bletcd from 'bletcd';
import async from 'async';
import options from './options';
var etcd = new Bletcd({ url: options.ETCD_CONN });

function setNodeFunc (conn, value) {
  return (callback) => {
    const path = `/connections/${conn}`;
    etcd.put(path, value, {}, (err, response) => {
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
    const funcs = Object.keys(connections).map(conn => {
      return setNodeFunc(conn, JSON.stringify(connections[conn]));
    });
    async.waterfall(funcs, (err) => {
      if (err) {
        return reject(err);
      }
      return resolve();
    });
  });
}

const version = require('./package.json').version;
const optionsSpec = {
  ETCD_CONN: {
    required: true,
    default: 'http://10.10.10.20:2379',
    env: 'ETCD_SETTINGS_ETCD_CONN'
  },
};

let options = {
  version
};

const op = {
  ...options, ...Object.keys(optionsSpec).map((key) => {
    if (!optionsSpec[key].preprocess) {
      optionsSpec[key].preprocess = function preprocess (str) {
        return str;
      };
    }
    const opt = { name: key };
    if (process.env[optionsSpec[key].env]) {
      opt.value = optionsSpec[key].preprocess(process.env[optionsSpec[key].env]);
    } else if (optionsSpec[key].default) {
      opt.value = optionsSpec[key].preprocess(optionsSpec[key].default);
    } else if (optionsSpec[key].required) {
      throw new Error('!!! REQUIRED OPTION NOT SET: ' + key);
    }
    return opt;
  }).reduce((prev, cur) => {
    prev[cur.name] = cur.value;
    return prev;
  }, {})
};

export default op;

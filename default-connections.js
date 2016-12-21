module.exports = {
  '/connections/amqp': {
    value: {
      url: 'localhost'
    }
  },
  '/connections/db': {
    value: {
      options: {
        dialect: 'postgres',
        host: 'localhost',
        port: '5432',
        logging: false
      },
      username: 'docker',
      password: 'docker',
      dbName: 'cameraserver'
    }
  },
  '/connections/s3': {
    value: {
      accessKeyId: '4I93XTM0WB8UBX73R7J9',
      secretAccessKey: 'qwhS5T6AeMKAktqU2wDWL4wGXLPmhU0Gnf5YAysO',
      endpoint: 'http://10.10.10.242:7480',
      bucket: 'TESTING'
    }
  },
  '/components/sysms/init': {
    value: { masterLevel: 10000000000 },
    options: { ttl: 1 }
  },
  '/components/regs/init': {
    value: {},
    options: { ttl: 1 }
  }
};

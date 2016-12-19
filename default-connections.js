module.exports = {
  amqp: {
    url: '10.10.10.20'
  },
  db: {
    options: {
      dialect: 'postgres',
      host: '10.10.10.20',
      port: '5432',
      logging: false
    },
    username: 'docker',
    password: 'docker',
    dbName: 'cameraserver'
  },
  s3: {
    accessKeyId: '4I93XTM0WB8UBX73R7J9',
    secretAccessKey: 'qwhS5T6AeMKAktqU2wDWL4wGXLPmhU0Gnf5YAysO',
    endpoint: 'http://10.10.10.242:7480',
  }
};

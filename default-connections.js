module.exports = {
  '/connections/amqp': {
    value: {
      url: '10.157.212.14'
    }
  },
  '/connections/db': {
    value: {
      options: {
        dialect: 'postgres',
        host: '10.157.212.13',
        port: '5432',
        logging: false
      },
      username: 'user',
      password: 'user21',
      dbName: 'cameraserver'
    }
  },
  '/connections/s3': {
    value: {
      accessKeyId: 'MEG3MWFU1H3ADK0SRCAX',
      secretAccessKey: 'HVq85eQiN4WQp2YrzSzx6IBAYXCI09jH1zOfQiJY',
      endpoint: 'http://10.157.212.10:7480',
      bucket: 'DASH'
    }
  },
  '/connections/localStore': {
    value: {
      folderPath: 'C:/GEOWORKS-CCTV/archive', // hours
    }
  },
  '/connections/redis': {
    value: {
      host: '10.157.212.15',
      port: '6379'
    }
  },
  '/settings/regs': {
    value: {
      sessionMaxAge: '39600', // 11h, (seconds 3600 = 1h)
      cacheTtl: 60, // seconds 3600 = 1h
      pingInterval: 10,
    }
  },
  '/settings/sysms': {
    value: {
      cleanerHoursTO: '12', // hours
    }
  },
  '/settings/general': {
    value: {
      archiveStoreType: 'localStore',
      /* archiveStoreType: Тип хранения архива.
      * local - локально в папке, (путь указывается в reg)
      * s3 - настройки берутся из connections/s3
      * */
    }
  },
  // '/connections/s3': {
  //   value: {
  //     accessKeyId: '4I93XTM0WB8UBX73R7J9',
  //     secretAccessKey: 'qwhS5T6AeMKAktqU2wDWL4wGXLPmhU0Gnf5YAysO',
  //     endpoint: 'http://10.10.10.242:7480',
  //     bucket: 'TESTING'
  //   }
  // },
  '/components/balancers/init': {
    value: { masterLevel: 10000000000 },
    options: { ttl: 1 }
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

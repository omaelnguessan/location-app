import { resolve } from 'path';

const SOURCE_PATH = resolve(__dirname, '..', 'src');

export default {
  database: {
    host: '',
    port: '',
    name: '',
    username: '',
    password: null,
  },
  orm: {
    entities: [`${SOURCE_PATH}/**/*.entity.ts`],
    synchronize: false,
  },
  public: {
    path: resolve(__dirname, '..', 'public'),
  },
  templates: {
    path: resolve(__dirname, '..', 'views'),
  },
};

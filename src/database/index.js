import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Appointment from '../app/models/Appointment';

import databaseConfig from '../config/database';

const models = [User, File, Appointment];
class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connetion = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connetion))
      .map(model => model.associate && model.associate(this.connetion.models)); // serve para inicializar o relacionamento entre tabelas
  }
}

export default new Database();

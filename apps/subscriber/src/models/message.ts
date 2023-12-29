import { Sequelize, DataTypes } from 'sequelize'

import { dbConnectionUri } from '../usecases/createMessage'

const sequelize = new Sequelize(dbConnectionUri)

export const Message = sequelize.define('Message', {
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  temperature: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

console.log(Message === sequelize.models.Message)
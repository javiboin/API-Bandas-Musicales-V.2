const BandaModel = (connection, Sequelize) => {
  const Banda = connection.define('banda', {
    id_banda: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre_banda: {
      type: Sequelize.STRING
    },
    integrantes_banda: {
      type:Sequelize.INTEGER
    },
    fecha_inicio_banda: {
      type: Sequelize.DATE
    },
    fecha_separacion_banda: {
      type: Sequelize.DATE
    },
    id_pais: {
      type: Sequelize.INTEGER
    }
  })
  return Banda
};

module.exports = BandaModel;
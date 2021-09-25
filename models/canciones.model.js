const CancionModel = (connection, Sequelize) => {
  const Cancion = connection.define('cancion', {
    id_cancion: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre_cancion: {
      type: Sequelize.STRING
    },
    duracion_cancion: {
      type: Sequelize.INTEGER
    },
    id_album: {
      type: Sequelize.INTEGER
    },
    id_banda: Sequelize.INTEGER
  });
  
  return Cancion 
};

module.exports = CancionModel;
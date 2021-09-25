const PaisModel = (connection, Sequelize) => {
  const Pais = connection.define('pais', {
    id_pais: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre_pais: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false
  });

  return Pais
};

module.exports = PaisModel;
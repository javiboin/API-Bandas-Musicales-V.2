const AlbumModel = (connection, Sequelize) => {
  const Album = connection.define('albumes', {
    id_album: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    nombre_album: {
      type: Sequelize.STRING
    },
    id_banda: {
      type: Sequelize.INTEGER
    },
    fecha_publicacion_album: {
      type: Sequelize.DATE
    }
  },
  { timestamps: false });
  return Album
};

module.exports = AlbumModel;
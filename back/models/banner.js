module.exports = function(sequelize, dataTypes){
  const banner = sequelize.define('Banner',{
    imageUrl : {
      type : dataTypes.STRING(300),
      allowNull:false
    },
    href : {
      type : dataTypes.STRING(200),
      allowNull:false
    },
    createdAt: {
      type: dataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: dataTypes.DATE,
      allowNull: false,
    },
  });
  return banner;
}
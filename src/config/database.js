module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker', // sua senha
  database: 'suspiciouscat',
  port: 5433, // 5432
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },

  dialectOptions: {
    useUTC: false,
  },
};

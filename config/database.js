module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ccq7ssaen0hr84g7654g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_rwpy'),
      user: env('DATABASE_USERNAME', 'tikodev'),
      password: env('DATABASE_PASSWORD', 'sBS4K2nutW5zwXHBfmhRydW7a5XrOcYC'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});

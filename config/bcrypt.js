// config/bcrypt.js
import bcrypt from 'bcrypt';

const saltRounds = 10; // Número de rondas de sal para el hash

const hashSync = (password) => {
  return bcrypt.hashSync(password, saltRounds);
};

const compareSync = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};

export default { hashSync, compareSync };

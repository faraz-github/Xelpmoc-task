const bcrypt = require("bcryptjs");

const encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);
    return encryptedPassword;
}

const verifyPassword = async (plainPassword, encryptedPassword) => {
    const result = await bcrypt.compare(plainPassword, encryptedPassword);
    return result;
}

module.exports = { encryptPassword, verifyPassword };
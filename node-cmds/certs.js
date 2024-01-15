
const os = require("os");
const fs = require('fs');
const path = require("path");

const userDirectory = os.homedir();


const certificate = path.resolve(userDirectory, ".office-addin-dev-certs", "localhost.crt");
const key = path.resolve(userDirectory, ".office-addin-dev-certs", "localhost.key");


const targetCertificate = path.resolve(__dirname, '..', "localhost.crt");
const targetKey = path.resolve(__dirname, '..', "localhost.key");

fs.copyFile(certificate, targetCertificate, () => { });
fs.copyFile(key, targetKey, () => { });


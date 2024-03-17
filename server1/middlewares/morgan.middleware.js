const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const logger = require("../config/logger.config");

// �α׸� ������ ���丮 ��� ����
const logDirectory = path.join(__dirname, "..", "logs");

// logs ���丮�� �������� ������ ����
if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

// Morgan �̵���� ���� �� ����
const morganMiddleware = morgan("combined", {
  stream: fs.createWriteStream(path.join(logDirectory, "access.log"), {
    flags: "a",
  }),
});

module.exports = morganMiddleware;

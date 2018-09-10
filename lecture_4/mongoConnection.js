const MongoClient = require("mongodb").MongoClient;

const settings = {
	mongoConfig: {
		serverUrl: "mongodb://localhost:27017/",
		database: "Shuangwei_Shi_lab4"
	}
};

let _connection = undefined;
let _db = undefined;

module.exports = async () => {
	if (!_connection) {
		_connection = await MongoClient.connect(settings.mongoConfig.serverUrl);
		_db = await _connection.db(settings.mongoConfig.database);
	}

	return _db;
};
const MongoClient = require("mongodb").MongoClient;

const settings = {
	mongoConfig: {
		serverUrl: "mongodb://localhost:27017/",
		database: "Shuangwei_Shi_lab4"
	}
};

let = fullMongoUrl = `${settings.mongoConfig.serverUrl}`;
let _connection = undefined;
let _db = undefined;

async function connection() {
	if (!_connection) {
		_connection = await (MongoClient.connect(fullMongoUrl));
		_db = await (_connection.db(settings.mongoConfig.database));
	}

	return _db;
}

module.exports = {
	connection
};
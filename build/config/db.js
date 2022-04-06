"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = require("mongoose");
// Connect to data sources
const db = async () => {
    const DATABASE_URL = process.env.DATABASE_URL;
    const connection = await (0, mongoose_1.connect)(DATABASE_URL).catch((err) => {
        const message = `😵 Error connecting to database: ${err.message}`;
        console.error(message);
        process.exit(1);
    });
    return connection;
};
exports.db = db;
//# sourceMappingURL=db.js.map
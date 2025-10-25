const mongoose = require("mongoose")
const dns = require('dns');

// Use Google's DNS servers to resolve SRV records
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDatabase =async  () => {

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
            socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
        })

        console.log("MongoDB Connection Successfully")
    } catch (error) {
        console.error("MongoDB Connection Error:", error.message)
        process.exit(1)
    }

}

module.exports = connectDatabase

const cron = require("node-cron");
const Train = require("../modles/Train");

const deleteExpiredTrains = () => {
  cron.schedule("0 * * * *", async () => {
    const cutoff = new Date(Date.now() - 1000 * 60 * 60 * 24);
    await Train.deleteMany({ departureTime: { $lt: cutoff } });
    // console.log("Old trains deleted");
  });
};

module.exports = deleteExpiredTrains;

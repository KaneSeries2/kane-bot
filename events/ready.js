module.exports = async (client) => {
    client.user.setPresence({ activity: { name: "Extreme Bot List", type: "WATCHING" }, status: 'dnd' });
    client.logger.log(`Logged in as ${client.user.tag}`);
}
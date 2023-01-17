
const Event = require('../structures/Event');
const config = require('../config.json');

module.exports = class extends Event {
    async run() {

    // ready interval 

    
    const activities = [
      { name: `${config.bot_name || 'SharkArmy'}`, type: 'WATCHING' }, 
    ];
    this.client.user.setPresence({ status: 'online', activity: activities[0] });
  
    let activity = 1;
    
  
}

}



const Event = require('../structures/Event');
const config = require('../config.json');

module.exports = class extends Event {
    async run() {

    // ready interval 

    
    const activities = [
      { name: `${config.bot_status_name}`, type: `${config.bot_status_type}` }, 
    ];
    this.client.user.setPresence({ status: `${config.bot_status}`, activity: activities[0] });
  
    let activity = 1;
    
  
}

}


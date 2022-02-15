import { RTMClient } from '@slack/rtm-api'
import { SLACK_OAUTH_TOKEN } from './constants';




const rtm = new RTMClient(SLACK_OAUTH_TOKEN);
rtm.on('ready',async()=> {
    console.log('Today Date')
});

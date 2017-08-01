#!/bin/sh
ssh -t deploy@146.185.155.128 'cd MacGyver/ && git pull && ps aux | grep -ie '\''node /usr/bin/serve -s build'\'' | awk '\''{print $2;exit}'\'' | xargs kill && npm install && nohup serve -s build >/dev/null 2>&1 &'

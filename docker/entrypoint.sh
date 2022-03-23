#!/bin/sh

# start nodejs app on background, restart if crash
{ while true; do su node -c 'cd /usr/src/app && NODE_ENV=production npm run start'; sleep 2; done } &

exec "/usr/sbin/nginx" -g "daemon off;"


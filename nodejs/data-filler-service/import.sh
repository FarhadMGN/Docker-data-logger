#! /bin/bash

mongoimport --host mongodb --db docker-node-mongo --collection logs --type json --file /data/init.json

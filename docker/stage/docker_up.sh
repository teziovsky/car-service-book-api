#!/bin/bash

docker compose --env-file ../../.env.stage down
docker compose --env-file ../../.env.stage up -d --build

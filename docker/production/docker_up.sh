#!/bin/bash

docker compose --env-file ../../.env down
docker compose --env-file ../../.env up -d
#!/bin/sh
set -e

# Setup AWS credentials for the Docker container
curl -sqL -o aws_credentials.json http://169.254.170.2/$AWS_CONTAINER_CREDENTIALS_RELATIVE_URI > aws_credentials.json

export AWS_ACCESS_KEY_ID=$(jq -r '.AccessKeyId' aws_credentials.json)
export AWS_ACCESS_SECRET_KEY=$(jq -r '.SecretAccessKey' aws_credentials.json)
export AWS_SESSION_TOKEN=$(jq -r '.Token' aws_credentials.json)

exec "$@"
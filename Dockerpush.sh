echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin
docker push statnlp/web-resource
docker push statnlp/web-resource:${APP_VERSION}

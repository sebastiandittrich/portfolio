<script>
    export default {
        meta: {
            title: 'CI/CD Pipeline with Vue.js',
            description: 'Learn how to set up a CI/CD Pipeline for a basic Vue.js application.',
        }
    }
</script>

# CI/CD Pipeline with Vue.js
*In this Tutorial you will learn how to setup a basic CI/CD Pipeline with Vue.js and Gitlab.*

## Getting started
The entrypoint for every CI/CD Pipeline on Gitlab is the `.gitlab-ci.yml` file in your Project root. In this file you can declare all the needed steps in your Pipeline.

Just take a quick look at the following example:

```yaml
image: node:8.12

stages:
  - build
  - test
  - deploy

before_script:
  - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client -y )'
  - eval $(ssh-agent -s)
  - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add - > /dev/null
  - mkdir -p ~/.ssh
  - chmod 700 ~/.ssh
  - echo "$SSH_KNOWN_HOSTS" > ~/.ssh/known_hosts
  - chmod 644 ~/.ssh/known_hosts

build:
  stage: build
  script:
    - echo $(git rev-parse --short=8 HEAD) > .commithash
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist
      - .commithash

deploy:
  stage: deploy
  environment: production
  only:
    - master
  variables:
    GIT_STRATEGY: none
  script:
    - deploymentsdir="~/app/deployments"
    - currentdir="~/app/current"
    - dirname="$deploymentsdir/$(date "+%Y%m%d-%H%M%S")-$(cat .commithash)"
    - ssh $SSH_USER@$SSH_HOST "mkdir -p $deploymentsdir"
    - scp -r dist $SSH_USER@$SSH_HOST:$dirname
    - ssh $SSH_USER@$SSH_HOST "ln -nfs $dirname $currentdir"
```

*Looks complex, right?*

Let's walk through this file step by step and learn what is does!

---
## Images
```yaml
image: node:8.12

# ...
```
The Gitlab Pipelines are based on Docker. This means, that all your steps are executed inside of a Docker Container which is started for each stage you define.

Because Vue.js applications are based on Javascript, I would recommend using the `node` image. This image has node.js and npm pre-installed, so we don't have to deal with installing them. I am using version `8.12`, but you can also use any other version that works for you.

## Stages
```yaml
# ...

stages:
  - build
  - deploy

# ...
```
Your CI/CD Pipeline consists of different stages, based on what type of application you are building. For a basic Vue application

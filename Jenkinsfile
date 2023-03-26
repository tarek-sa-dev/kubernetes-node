pipeline {
  agent any

  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }

  environment {
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
  }

  stages {
    stage("Build") {
      steps {
        echo 'building the docker image...'
        sh 'docker build -t tareksaimouah/kubernetes-node:latest .'
      }
    }

    stage("Login") {
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
      }
    }

    stage("Push") {
      steps {
        sh 'docker push tareksaimouah/kubernetes-node:latest'
      }
    }
  }

  post {
    always {
      sh 'docker logout'
    }
  }
}
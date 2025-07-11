pipeline {
  agent any
  stages {
    stage('Echo Version') {
      steps {
        echo 'Version 1.0.0'
      }
    }

    stage('Install & Build') {
      steps {
        echo 'Installing dependencies...'
        sh 'npm install'
        archiveArtifacts 'artifacts.xml'
      }
    }

    stage('Unit Test') {
      steps {
        echo 'Running unit tests...'
        sh 'npm test'
        junit(testResults: 'test-results/results.xml', keepProperties: true, keepTestNames: true)
      }
    }

    stage('Archive test Artifacts') {
      steps {
        echo 'Archiving artifacts...'
        archiveArtifacts(artifacts: 'test-results/results.xml, index.js', onlyIfSuccessful: true)
        junit 'test-results/results.xml'
      }
    }

  }
}
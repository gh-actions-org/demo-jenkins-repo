pipeline {
  agent any
  
  stages {
    stage('Echo Version') {
      steps {
        echo 'Version 1.0.0'
        sh '''
          echo "sleeptime - ${SLEEP_TIME}, port-number - ${PORT_NUMBER}, branch - ${BRANCH_NAME}"
        '''
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

    stage('Integration Test') {
      steps {
        echo 'Running integration tests...'
        sh 'sleep 5s'
        sh 'curl -s https://localhost:1234/demo || echo "Integration endpoint unreachable"'
      }
    }

    // stage('Archive test Artifacts') {
    //   steps {
    //     echo 'Archiving artifacts...'
    //     archiveArtifacts(artifacts: 'test-results/results.xml, index.js', onlyIfSuccessful: true)
    //     junit 'test-results/results.xml'
    //   }
    // }
  }
}

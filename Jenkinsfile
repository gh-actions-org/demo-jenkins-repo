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
            }
        }

        stage('Unit Test') {
            steps {
                echo 'Running unit tests...'
                sh 'npm test'
            }
        }

        stage('Archive Artifacts') {
            steps {
                echo 'Archiving artifacts...'
                archiveArtifacts artifacts: 'test-results/results.xml, index.js', onlyIfSuccessful: true
                junit 'test-results/results.xml'
            }
        }
    }
}

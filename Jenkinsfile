pipeline {
    agent any

    stages {
        stage('Echo Version') {
            steps {
                echo 'Version 1.0.0'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Add your build commands here if any, e.g., npm run build or mvn package
            }
        }
        
        stage('Unit Test') {
            steps {
                script {
                    for (int i = 1; i <= 10; i++) {
                        echo "Running test iteration ${i}"
                        sleep 1
                    }
                }
                sh 'echo Running unit tests...'
            }
        }
    }
}

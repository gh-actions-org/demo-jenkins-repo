pipeline {
    agent any
    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Unit test'){
            steps{
                script{
                    for (int i=1; i<60; i++ ){
                        echo "${i+1}"
                        sleep 1
                    }
                }
                sh 'echo runiing unit test'
            }
        }
    }
}

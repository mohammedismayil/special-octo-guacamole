pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                 echo 'Hi, here i come GeekFlare. Starting to build the App.'
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /home/ubuntu/special-octo-guacamole/"
                sh "sudo cp -r ${WORKSPACE}/build/ /home/ubuntu/special-octo-guacamole/"
            }
        }
    
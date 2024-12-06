pipeline {
    agent any

    environment {
        BACKEND_DIR = 'backend'
        FRONTEND_DIR = 'frontend'
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/AsthaDashore/Elearning'
            }
        }

        stage('Build Backend') {
            steps {
                dir("${BACKEND_DIR}") {
                    sh 'mvn clean install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir("${FRONTEND_DIR}") {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Run Tests') {
            steps {
                dir("${BACKEND_DIR}") {
                    sh 'mvn test'  // Replace with your test command
                }
                dir("${FRONTEND_DIR}") {
                    sh 'npm run test'
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    // Build Docker images for both frontend and backend
                    sh 'docker build -t backend-image ./backend'
                    sh 'docker build -t frontend-image ./frontend'
                }
            }
        }

        stage('Deploy to EC2') {
            steps {
                script {
                    // Deploy to AWS EC2 using SSH, Docker, or AWS CLI
                    // Example: Deploy Docker images to EC2 instance
                    sh 'scp -i your-key.pem docker-compose.yml ec2-user@your-ec2-ip:/path/to/deploy'
                    sh 'ssh -i your-key.pem ec2-user@your-ec2-ip "docker-compose up -d"'
                }
            }
        }
    }

    post {
        always {
            cleanWs()  // Clean workspace after build
        }
    }
}

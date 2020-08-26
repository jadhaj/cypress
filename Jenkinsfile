node {
   def commit_id
   stage('Preparation') {
     checkout scm
     sh "git rev-parse --short HEAD > .git/commit-id"
     commit_id = readFile('.git/commit-id').trim()
   }
   stage('test') {
     def myTestContainer = docker.image('cypress/included:4.1.0')
     myTestContainer.pull()
     myTestContainer.inside {
       -v /home/jhajyahy/e2e-cypress/cypress:/cypress
       -v /home/jhajyahy/e2e-cypress/cypress.json:/cypress.json
       sh 'npx cypress run --spec "cypress/integration/first_test.spec.js"'
     }
   }                                     
}       


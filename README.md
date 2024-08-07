# rms-cognito-triggers
A set of Lambda triggers to customize Amazon Cognito authentication actions in the [RMS project](https://github.com/Grupo-G03-4SOAT-FIAP/rms-api-pedidos). Lambda triggers allow you to customize how you register and confirm users, authenticate users, send messages, and generate tokens.

[![SAM Validate and Build](https://github.com/Grupo-G03-4SOAT-FIAP/rms-cognito-triggers/actions/workflows/sam-validate.yml/badge.svg)](https://github.com/Grupo-G03-4SOAT-FIAP/rms-cognito-triggers/actions/workflows/sam-validate.yml)
[![SAM Deploy](https://github.com/Grupo-G03-4SOAT-FIAP/rms-cognito-triggers/actions/workflows/sam-deploy.yml/badge.svg)](https://github.com/Grupo-G03-4SOAT-FIAP/rms-cognito-triggers/actions/workflows/sam-deploy.yml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)

![AWS LAMBDA](https://img.shields.io/badge/AWS%20Lambda-FF9900.svg?style=for-the-badge&logo=AWS-Lambda&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

> [!TIP]
> O Amazon Cognito trabalha com funções do AWS Lambda para modificar o comportamento da autenticação. As funções Lambda podem modificar o comportamento padrão do fluxo de autenticação, como permitir login "passwordless" sem senha por exemplo.\
> _Para mais informações sobre os Lambda Triggers do Amazon Cognito visiste a página [Como personalizar fluxos de trabalho do grupo de usuários com acionadores do Lambda](https://docs.aws.amazon.com/pt_br/cognito/latest/developerguide/cognito-user-identity-pools-working-with-aws-lambda-triggers.html)._

## Pré-requisitos

Você deve ter instalado a [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html), o [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html#install-sam-cli-instructions) e possuir uma conta na AWS.

## Deploy the sample application

To build and deploy your application for the first time, run the following in your shell:

```bash
sam build
sam deploy --guided
```

## Use the SAM CLI to build and test locally

Build your application with the `sam build` command.

```bash
rms-cognito-triggers$ sam build
```

The SAM CLI installs dependencies defined in `<function-name>/package.json`, compiles TypeScript with esbuild, creates a deployment package, and saves it in the `.aws-sam/build` folder.

Test a single function by invoking it directly with a test event. An event is a JSON document that represents the input that the function receives from the event source. Test events are included in the `events` folder in this project.

Run functions locally and invoke them with the `sam local invoke` command.

```bash
rms-cognito-triggers$ sam local invoke HelloWorldFunction --event events/event.json
```

The SAM CLI can also emulate your application's API. Use the `sam local start-api` to run the API locally on port 3000.

```bash
rms-cognito-triggers$ sam local start-api
rms-cognito-triggers$ curl http://localhost:3000/
```

## Unit tests

Tests are defined in the `<function-name>/tests` folder in this project. Use NPM to install the [Jest test framework](https://jestjs.io/) and run unit tests.

```bash
rms-cognito-triggers$ cd function-name
function-name$ npm install
function-name$ npm run test
```

## Cleanup

To delete the sample application that you created, use the AWS CLI. Assuming you used your project name for the stack name, you can run the following:

```bash
sam delete --stack-name rms-cognito-triggers
```

## Métricas de código

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=bugs)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)

## Projetos relacionados

API de Pedidos\
https://github.com/Grupo-G03-4SOAT-FIAP/rms-api-pedidos

Infrastructure as code (IaC) com Terraform\
https://github.com/Grupo-G03-4SOAT-FIAP/rms-iac

## Requisitos

*aws-cli/2.15.10, AWS SAM CLI version 1.110.0 e Node.js 20.x*

[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-white.svg)](https://sonarcloud.io/summary/new_code?id=Grupo-G03-4SOAT-FIAP_rms-cognito-triggers)

import { PreSignUpTriggerEvent, Context, Callback } from 'aws-lambda';
import { lambdaHandler } from '../../src/handlers/pre-signup';
import { expect, describe, it, jest, beforeEach, afterEach } from '@jest/globals';

describe('Unit test for app handler', function () {
    let context: Context;
    let callback: Callback;

    beforeEach(async () => {
        context = {} as Context;
        callback = jest.fn();
    });

    afterEach(async () => {
        jest.clearAllMocks();
    });

    it('verifies successful response', async () => {
        const eventJson = {
            "version": "1",
            "region": "us-east-1",
            "userPoolId": "us-east-1_aX9fo84QN",
            "userName": "38742612047",
            "callerContext": {
                "awsSdkVersion": "aws-sdk-unknown-unknown",
                "clientId": "4e6phhh81h477b54ns9vfc5ahv"
            },
            "triggerSource": "PreSignUp_SignUp",
            "request": {
                "userAttributes": {
                    "name": "Fulano da Silva Santos",
                    "email": "fulano@gmail.com"
                },
                "validationData": null
            },
            "response": {
                "autoConfirmUser": false,
                "autoVerifyEmail": false,
                "autoVerifyPhone": false
            }
        }

        const event: PreSignUpTriggerEvent = eventJson as any;

        const responseJson = {
            "version": "1",
            "region": "us-east-1",
            "userPoolId": "us-east-1_aX9fo84QN",
            "userName": "38742612047",
            "callerContext": {
                "awsSdkVersion": "aws-sdk-unknown-unknown",
                "clientId": "4e6phhh81h477b54ns9vfc5ahv"
            },
            "triggerSource": "PreSignUp_SignUp",
            "request": {
                "userAttributes": {
                    "name": "Fulano da Silva Santos",
                    "email": "fulano@gmail.com"
                },
                "validationData": null
            },
            "response": {
                "autoConfirmUser": true,
                "autoVerifyEmail": true,
                "autoVerifyPhone": false
            }
        }

        const response: PreSignUpTriggerEvent = responseJson as any;

        const result: PreSignUpTriggerEvent = await lambdaHandler(event, context, callback);

        expect(result).toEqual(response);
    });

    it('verifies error response', async () => {
        const eventJson = {
            "version": "1",
            "region": "us-east-1",
            "userPoolId": "us-east-1_aX9fo84QN",
            "userName": "00000000000",
            "callerContext": {
                "awsSdkVersion": "aws-sdk-unknown-unknown",
                "clientId": "4e6phhh81h477b54ns9vfc5ahv"
            },
            "triggerSource": "PreSignUp_SignUp",
            "request": {
                "userAttributes": {
                    "name": "Fulano da Silva Santos",
                    "email": "fulano@gmail.com"
                },
                "validationData": null
            },
            "response": {
                "autoConfirmUser": false,
                "autoVerifyEmail": false,
                "autoVerifyPhone": false
            }
        }

        const event: PreSignUpTriggerEvent = eventJson as any;

        await lambdaHandler(event, context, callback);

        expect(callback).toHaveBeenCalledWith(Error("CPF inválido"), event);
    });
});

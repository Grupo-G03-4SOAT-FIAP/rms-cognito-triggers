import { DefineAuthChallengeTriggerEvent } from 'aws-lambda';
import { lambdaHandler } from '../../app';
import { expect, describe, it } from '@jest/globals';

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const eventJson = {
            "version": "1",
            "region": "us-east-1",
            "userPoolId": "us-east-1_aX9fo84QN",
            "userName": "00000000191",
            "callerContext": {
                "awsSdkVersion": "aws-sdk-unknown-unknown",
                "clientId": "4e6phhh81h477b54ns9vfc5ahv"
            },
            "triggerSource": "DefineAuthChallenge_Authentication",
            "request": {
                "userAttributes": {
                    "sub": "1428f428-c001-7013-6ffe-9b0100820c85",
                    "cognito:user_status": "FORCE_CHANGE_PASSWORD",
                    "name": "Cliente Anônimo",
                    "email": "cliente@anonimo.com"
                },
                "session": []
            },
            "response": {
                "challengeName": null,
                "issueTokens": null,
                "failAuthentication": null
            }
        }

        const event: DefineAuthChallengeTriggerEvent = eventJson as any;

        const responseJson = {
            "version": "1",
            "region": "us-east-1",
            "userPoolId": "us-east-1_aX9fo84QN",
            "userName": "00000000191",
            "callerContext": {
                "awsSdkVersion": "aws-sdk-unknown-unknown",
                "clientId": "4e6phhh81h477b54ns9vfc5ahv"
            },
            "triggerSource": "DefineAuthChallenge_Authentication",
            "request": {
                "userAttributes": {
                    "sub": "1428f428-c001-7013-6ffe-9b0100820c85",
                    "cognito:user_status": "FORCE_CHANGE_PASSWORD",
                    "name": "Cliente Anônimo",
                    "email": "cliente@anonimo.com"
                },
                "session": []
            },
            "response": {
                "challengeName": "CUSTOM_CHALLENGE",
                "issueTokens": false,
                "failAuthentication": false
            }
        }

        const response: DefineAuthChallengeTriggerEvent = responseJson as any;

        const result: DefineAuthChallengeTriggerEvent = await lambdaHandler(event);

        expect(result).toEqual(response);
    });
});

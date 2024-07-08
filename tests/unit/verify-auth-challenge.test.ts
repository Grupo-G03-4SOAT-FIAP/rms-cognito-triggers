import { VerifyAuthChallengeResponseTriggerEvent } from 'aws-lambda';
import { lambdaHandler } from '../../src/handlers/verify-auth-challenge';
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
            "triggerSource": "VerifyAuthChallengeResponse_Authentication",
            "request": {
                "userAttributes": {
                    "sub": "1428f428-c001-7013-6ffe-9b0100820c85",
                    "cognito:user_status": "FORCE_CHANGE_PASSWORD",
                    "name": "Cliente Anônimo",
                    "email": "cliente@anonimo.com"
                },
                "privateChallengeParameters": {
                    "challenge": "answer"
                },
                "challengeAnswer": "answer"
            },
            "response": {
                "answerCorrect": null
            }
        }

        const event: VerifyAuthChallengeResponseTriggerEvent = eventJson as any;

        const responseJson = {
            "version": "1",
            "region": "us-east-1",
            "userPoolId": "us-east-1_aX9fo84QN",
            "userName": "00000000191",
            "callerContext": {
                "awsSdkVersion": "aws-sdk-unknown-unknown",
                "clientId": "4e6phhh81h477b54ns9vfc5ahv"
            },
            "triggerSource": "VerifyAuthChallengeResponse_Authentication",
            "request": {
                "userAttributes": {
                    "sub": "1428f428-c001-7013-6ffe-9b0100820c85",
                    "cognito:user_status": "FORCE_CHANGE_PASSWORD",
                    "name": "Cliente Anônimo",
                    "email": "cliente@anonimo.com"
                },
                "privateChallengeParameters": {
                    "challenge": "answer"
                },
                "challengeAnswer": "answer"
            },
            "response": {
                "answerCorrect": true
            }
        }

        const response: VerifyAuthChallengeResponseTriggerEvent = responseJson as any;

        const result: VerifyAuthChallengeResponseTriggerEvent = await lambdaHandler(event);

        expect(result).toEqual(response);
    });

    it('verifies error response', async () => {
        const eventJson = {
            "version": "1",
            "region": "us-east-1",
            "userPoolId": "us-east-1_aX9fo84QN",
            "userName": "00000000191",
            "callerContext": {
                "awsSdkVersion": "aws-sdk-unknown-unknown",
                "clientId": "4e6phhh81h477b54ns9vfc5ahv"
            },
            "triggerSource": "VerifyAuthChallengeResponse_Authentication",
            "request": {
                "userAttributes": {
                    "sub": "1428f428-c001-7013-6ffe-9b0100820c85",
                    "cognito:user_status": "FORCE_CHANGE_PASSWORD",
                    "name": "Cliente Anônimo",
                    "email": "cliente@anonimo.com"
                },
                "privateChallengeParameters": {
                    "challenge": "answer"
                },
                "challengeAnswer": "wrong answer!"
            },
            "response": {
                "answerCorrect": null
            }
        }

        const event: VerifyAuthChallengeResponseTriggerEvent = eventJson as any;

        const result: VerifyAuthChallengeResponseTriggerEvent = await lambdaHandler(event);

        console.log(JSON.stringify(result));

        expect(result.response.answerCorrect).toEqual(false);
    });
});

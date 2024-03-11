import { CreateAuthChallengeTriggerEvent } from 'aws-lambda';
import { lambdaHandler } from '../../app';
import { expect, describe, it } from '@jest/globals';

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: CreateAuthChallengeTriggerEvent = JSON.parse("{\"version\":\"1\",\"region\":\"us-east-1\",\"userPoolId\":\"us-east-1_CWeZ7Rcv2\",\"userName\":\"9f64d4fb-5880-47f8-8c2d-41c644b567d0\",\"callerContext\":{\"awsSdkVersion\":\"aws-sdk-unknown-unknown\",\"clientId\":\"2ni3m77vqrslh3ioif6cjoebs0\"},\"triggerSource\":\"CreateAuthChallenge_Authentication\",\"request\":{\"userAttributes\":{\"sub\":\"9f64d4fb-5880-47f8-8c2d-41c644b567d0\",\"cognito:email_alias\":\"userpooltester@gmail.com\",\"cognito:user_status\":\"CONFIRMED\",\"email_verified\":\"true\",\"email\":\"userpooltester@gmail.com\"},\"challengeName\":\"CUSTOM_CHALLENGE\",\"session\":[],\"userNotFound\":false},\"response\":{\"publicChallengeParameters\":null,\"privateChallengeParameters\":null,\"challengeMetadata\":null}}");
        const response: CreateAuthChallengeTriggerEvent = JSON.parse("{\"version\":\"1\",\"region\":\"us-east-1\",\"userPoolId\":\"us-east-1_CWeZ7Rcv2\",\"userName\":\"9f64d4fb-5880-47f8-8c2d-41c644b567d0\",\"callerContext\":{\"awsSdkVersion\":\"aws-sdk-unknown-unknown\",\"clientId\":\"2ni3m77vqrslh3ioif6cjoebs0\"},\"triggerSource\":\"CreateAuthChallenge_Authentication\",\"request\":{\"userAttributes\":{\"sub\":\"9f64d4fb-5880-47f8-8c2d-41c644b567d0\",\"cognito:email_alias\":\"userpooltester@gmail.com\",\"cognito:user_status\":\"CONFIRMED\",\"email_verified\":\"true\",\"email\":\"userpooltester@gmail.com\"},\"challengeName\":\"CUSTOM_CHALLENGE\",\"session\":[],\"userNotFound\":false},\"response\":{\"publicChallengeParameters\":null,\"privateChallengeParameters\":{\"challenge\":\"answer\"},\"challengeMetadata\":null}}");
        
        const result: CreateAuthChallengeTriggerEvent = await lambdaHandler(event);

        expect(result).toEqual(response);
    });
});

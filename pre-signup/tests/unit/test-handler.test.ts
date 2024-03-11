import { PreSignUpTriggerEvent } from 'aws-lambda';
import { lambdaHandler } from '../../app';
import { expect, describe, it } from '@jest/globals';

describe('Unit test for app handler', function () {
    it('verifies successful response', async () => {
        const event: PreSignUpTriggerEvent = JSON.parse("{\"version\":\"1\",\"region\":\"us-east-1\",\"userPoolId\":\"us-east-1_CWeZ7Rcv2\",\"userName\":\"e079eebd-cc35-4ce1-8f3e-4bdf504ad923\",\"callerContext\":{\"awsSdkVersion\":\"aws-sdk-unknown-unknown\",\"clientId\":\"2ni3m77vqrslh3ioif6cjoebs0\"},\"triggerSource\":\"PreSignUp_SignUp\",\"request\":{\"userAttributes\":{\"email\":\"userpooltester@gmail.com\"},\"validationData\":null},\"response\":{\"autoConfirmUser\":false,\"autoVerifyEmail\":false,\"autoVerifyPhone\":false}}");
        const response: PreSignUpTriggerEvent = JSON.parse("{\"version\":\"1\",\"region\":\"us-east-1\",\"userPoolId\":\"us-east-1_CWeZ7Rcv2\",\"userName\":\"e079eebd-cc35-4ce1-8f3e-4bdf504ad923\",\"callerContext\":{\"awsSdkVersion\":\"aws-sdk-unknown-unknown\",\"clientId\":\"2ni3m77vqrslh3ioif6cjoebs0\"},\"triggerSource\":\"PreSignUp_SignUp\",\"request\":{\"userAttributes\":{\"email\":\"userpooltester@gmail.com\"},\"validationData\":null},\"response\":{\"autoConfirmUser\":true,\"autoVerifyEmail\":true,\"autoVerifyPhone\":false}}");

        const result: PreSignUpTriggerEvent = await lambdaHandler(event);

        expect(result).toEqual(response);
    });
});

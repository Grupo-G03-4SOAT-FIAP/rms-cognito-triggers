import { PreSignUpTriggerEvent, Context, Callback } from 'aws-lambda';
import { lambdaHandler } from '../../app';
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
        const event: PreSignUpTriggerEvent = JSON.parse(
            '{"version":"1","region":"us-east-1","userPoolId":"us-east-1_CWeZ7Rcv2","userName":"00000000191","callerContext":{"awsSdkVersion":"aws-sdk-unknown-unknown","clientId":"2ni3m77vqrslh3ioif6cjoebs0"},"triggerSource":"PreSignUp_SignUp","request":{"userAttributes":{"email":"userpooltester@gmail.com"},"validationData":null},"response":{"autoConfirmUser":false,"autoVerifyEmail":false,"autoVerifyPhone":false}}',
        );
        const response: PreSignUpTriggerEvent = JSON.parse(
            '{"version":"1","region":"us-east-1","userPoolId":"us-east-1_CWeZ7Rcv2","userName":"00000000191","callerContext":{"awsSdkVersion":"aws-sdk-unknown-unknown","clientId":"2ni3m77vqrslh3ioif6cjoebs0"},"triggerSource":"PreSignUp_SignUp","request":{"userAttributes":{"email":"userpooltester@gmail.com"},"validationData":null},"response":{"autoConfirmUser":true,"autoVerifyEmail":true,"autoVerifyPhone":false}}',
        );

        const result: PreSignUpTriggerEvent = await lambdaHandler(event, context, callback);

        expect(result).toEqual(response);
    });

    it('verifies error response', async () => {
        const event: PreSignUpTriggerEvent = JSON.parse(
            '{"version":"1","region":"us-east-1","userPoolId":"us-east-1_CWeZ7Rcv2","userName":"0000000019","callerContext":{"awsSdkVersion":"aws-sdk-unknown-unknown","clientId":"2ni3m77vqrslh3ioif6cjoebs0"},"triggerSource":"PreSignUp_SignUp","request":{"userAttributes":{"email":"userpooltester@gmail.com"},"validationData":null},"response":{"autoConfirmUser":false,"autoVerifyEmail":false,"autoVerifyPhone":false}}',
        );
        const response: PreSignUpTriggerEvent = JSON.parse(
            '{"version":"1","region":"us-east-1","userPoolId":"us-east-1_CWeZ7Rcv2","userName":"0000000019","callerContext":{"awsSdkVersion":"aws-sdk-unknown-unknown","clientId":"2ni3m77vqrslh3ioif6cjoebs0"},"triggerSource":"PreSignUp_SignUp","request":{"userAttributes":{"email":"userpooltester@gmail.com"},"validationData":null},"response":{"autoConfirmUser":true,"autoVerifyEmail":true,"autoVerifyPhone":false}}',
        );

        const result: PreSignUpTriggerEvent = await lambdaHandler(event, context, callback);

        expect(result).toEqual(response);
    });
});

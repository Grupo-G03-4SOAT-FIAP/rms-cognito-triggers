import { validate } from './validateCPF';
import { PreSignUpTriggerEvent, Context, Callback } from 'aws-lambda';

export const lambdaHandler = async (
    event: PreSignUpTriggerEvent,
    context: Context,
    callback: Callback,
): Promise<PreSignUpTriggerEvent> => {
    // Impose a condition that CPF must be valid.
    const cpf = event.userName;
    if (!validate(cpf)) {
        const error = new Error('CPF inválido');
        // Return error to Amazon Cognito
        callback(error, event);
    }

    // Confirm the user
    event.response.autoConfirmUser = true;
    // Set the email as verified if it is in the request
    if (event.request.userAttributes.hasOwnProperty('email')) {
        event.response.autoVerifyEmail = true;
    }

    // Set the phone number as verified if it is in the request
    if (event.request.userAttributes.hasOwnProperty('phone_number')) {
        event.response.autoVerifyPhone = true;
    }

    return event;
};

// Baseado no exemplo na documentação da AWS em
// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-pre-sign-up.html
// https://youtu.be/oFSU6rhFETk?si=HDsE2gmJacUPD4AH

import { CreateAuthChallengeTriggerEvent } from 'aws-lambda';

export const lambdaHandler = async (event: CreateAuthChallengeTriggerEvent): Promise<CreateAuthChallengeTriggerEvent> => {
    event.response.privateChallengeParameters = {};
    event.response.privateChallengeParameters.challenge = "opensesame";
    return event;
};

// Baseado no exemplo na documentação da AWS em
// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-create-auth-challenge.html
// https://youtu.be/oFSU6rhFETk?si=HDsE2gmJacUPD4AH

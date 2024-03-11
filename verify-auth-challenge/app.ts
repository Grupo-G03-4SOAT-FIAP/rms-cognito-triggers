import { VerifyAuthChallengeResponseTriggerEvent } from 'aws-lambda';

export const lambdaHandler = async (event: VerifyAuthChallengeResponseTriggerEvent): Promise<VerifyAuthChallengeResponseTriggerEvent> => {
    let challenge;
    try {
        challenge = event.request.privateChallengeParameters.challenge
    } catch (err) {
        event.response.answerCorrect = false;
        return event;
    }

    // Check if challenge is met
    if (event.request.challengeAnswer == challenge) {
        event.response.answerCorrect = true;
        return event;
    }

    event.response.answerCorrect = false;
    return event;
};

// Baseado no exemplo na documentação da AWS em
// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-verify-auth-challenge-response.html
// https://youtu.be/oFSU6rhFETk?si=HDsE2gmJacUPD4AH

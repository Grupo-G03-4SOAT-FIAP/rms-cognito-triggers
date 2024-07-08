import { DefineAuthChallengeTriggerEvent } from 'aws-lambda';

export const lambdaHandler = async (event: DefineAuthChallengeTriggerEvent): Promise<DefineAuthChallengeTriggerEvent> => {
    if (event.request.userNotFound) {
        event.response.failAuthentication = true;
        event.response.issueTokens = false;
    }

    const session = event.request.session;

    if (session && session.length > 0 && session[session.length - 1].challengeResult) {
        // The right answer to the challenge is provided - issue tokens to user
        event.response.failAuthentication = false;
        event.response.issueTokens = true;
        return event;
    }

    // in this case we haven't received a correct answer - present new challenge to user
    event.response.failAuthentication = false;
    event.response.issueTokens = false;
    event.response.challengeName = "CUSTOM_CHALLENGE";
    return event;
};

// Baseado no exemplo na documentação da AWS em
// https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-lambda-define-auth-challenge.html
// https://youtu.be/oFSU6rhFETk?si=HDsE2gmJacUPD4AH

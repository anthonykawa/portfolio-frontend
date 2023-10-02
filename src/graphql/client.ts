import { ApolloClient, InMemoryCache, HttpLink, ApolloLink  } from '@apollo/client';
import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link';
import { createSubscriptionHandshakeLink } from 'aws-appsync-subscription-link';
import { Auth } from 'aws-amplify';
import awsExports from '../aws-exports';

const url = awsExports.aws_appsync_graphqlEndpoint;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authType: any = awsExports.aws_appsync_authenticationType;
const region = awsExports.aws_appsync_region;
const auth: AuthOptions = {
  type: authType,
  jwtToken: async () => {
    try {
      const jwtToken = (await Auth.currentSession()).getIdToken().getJwtToken();
      return jwtToken;
    } catch (error: unknown) {
      return "";
    }
  },
};

const httpLink = new HttpLink({ uri: url });

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
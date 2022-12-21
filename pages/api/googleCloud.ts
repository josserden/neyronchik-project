/* eslint-disable @typescript-eslint/no-require-imports */
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');

export const getInstagramToken = async () => {
  // parse your base 64 env variable to a JSON object
  const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_APPLICATION_CREDENTIALS as string).toString(
      'base64',
    ),
  );

  // TO DO -> CHANGE
  const projectId = 'finalstydyproject';
  const secretId = 'instagram-token';

  // set up credentials config
  const config = {
    projectId,
    credentials,
  };

  // init secret manager with credentials
  const client = new SecretManagerServiceClient(config);

  const secretName = `projects/${projectId}/secrets/${secretId}/versions/latest`;

  // Access the secret.
  const [accessResponse] = await client.accessSecretVersion({
    name: secretName,
  });

  const instaToken = accessResponse.payload.data.toString('utf8');

  return instaToken;
};

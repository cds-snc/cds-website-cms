module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET_KEY'),
      region: 'ca-central-1',
      params: {
        Bucket: env('BUCKET_NAME'),
      },
    },
  },
});

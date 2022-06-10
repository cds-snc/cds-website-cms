module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      region: 'ca-central-1',
      params: {
        Bucket: env('BUCKET_NAME'),
      },
    },
  },
});

const hasha = require('hasha');

exports.handler = async (event, context) => {
  const { CLOUD_NAME: cloudName, CLOUDINARY_USERNAME: username, CLOUDINARY_API_SECRET: secret } = process.env
  const timestamp = Date.now()
  const str = `cloud_name=${cloudName}&timestamp=${timestamp}&username=${username}${secret}`
  const hash = hasha(str, { algorithm: 'sha256' });
  return {
    statusCode: 200,
    body: `
      ${JSON.stringify(event, null, 2)}
      ${JSON.stringify(context, null, 2)}
      ${hash}
      ${timestamp}
    `,
  }
}
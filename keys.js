console.log('this is loaded');

exports.captcha = {
  site: process.env.Captcha_site_key,
  secret: process.env.Captcha_secret_key
};
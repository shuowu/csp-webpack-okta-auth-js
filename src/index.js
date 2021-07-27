import { OktaAuth } from '@okta/okta-auth-js';

const oktaAuth = new OktaAuth({
  issuer: 'https://{domain}/oauth2/default'
});
console.log(oktaAuth);

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = 'Hello webpack';

  return element;
}

document.body.appendChild(component());

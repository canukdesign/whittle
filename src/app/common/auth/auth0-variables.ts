interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'x1CBGr80YhBtRXSTegGlYWuBfDAlC0P5',
  domain: 'canukdesign.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};

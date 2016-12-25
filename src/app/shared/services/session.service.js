import cookie from 'js-cookie';

export default class Session {
  constructor() {
    this.session = cookie;
    this.sessionTime = 24;
    this.sessionName = 'dca';
  }

  create(authData) {
    var session = authData;
    session.expires = new Date();
    session.expires.setTime( (new Date()).getTime() + this.sessionTime );

    this.session.set(
      this.sessionName, 
      JSON.stringify( session ), 
      { path: '/', expires: session.expires }
    );
  }

  destroy() {
    this.session.remove(
      this.sessionName, 
      { path: '/' }
    );
  }
}
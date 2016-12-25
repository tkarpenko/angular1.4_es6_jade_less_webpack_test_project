export default class browser {
  constructor() {
    this.type = '';
  }

  getType() {
    let browser = window.navigator.userAgent,
        M = browser.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    // If it is Edge
    if ( browser.match( /\b(Edge)\/(\d+)/ ) ) {
      this.type = 'edge';
    }

    // If it is IE
    if ( /trident/i.test( M[1] ) ) {
      this.type = 'ie';
    }

    // If it is Opera
    if ( M[1] === 'Chrome' ) {
      let version = browser.match( /\b(OPR|Edge)\/(\d+)/ );
      if ( version != null ) {
        this.type = 'opera';
      }
    } 

    // If it is Chrome or Firefox or Safari
    M = M[2] ? [ M[1], M[2] ] : [ navigator.appName, navigator.appVersion, '-?' ];
    if ( M[0] == 'Firefox' && M[1] >= 41) this.type = 'firefox';
    if ( M[0] == 'Chrome' && M[1] >= 43) this.type = 'chrome';
    if ( M[0] == 'Safari' && M[1] >= 8) this.type = 'safari';

    return this.type;
  }
}

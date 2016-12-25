export default class videosCtrl {
  constructor() {
    this.predicate       = '';
    this.filters         = [
      {predicate : 'tags',       title: 'Tags'},
      {predicate : 'popularity', title: 'Sort by Popularity'}
    ];

  }

  setPredicate( predicate ) {
    if ( this.predicate === predicate ) {
      this.predicate = '';
      return;
    }
    this.predicate = predicate;
  }
}
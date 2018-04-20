import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  text(i) {
    return 'Post ' + i
  }
  // afterCreate(post, server) {
  //   server.createList('comment', 10, { post });
  // }
});

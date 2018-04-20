export default function(server) {

  // server.createList('post',10);


  let post = server.create('post', {title: 'Zelda'});
  server.createList('comment', 20, { post });

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  // server.createList('post', 10);
}

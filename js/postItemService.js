let PostService = function($http, $cookies) {
  
  // let url = SERVER.URL;
  // let token = $cookies.get('auth_token');
  // SERVER.CONFIG.headers['Access-Token'] = token;
  
  // this.postItem = postItem;

  // function Item (newItem) {
  //   this.title = newItem.title;
  //   this.picture = newItem.picture;
  //   this.description = newItem.description;
  // }

  // function postItem (newItem) {
  //   let i = new Item(newItem);
  //   return $http.post(url + '', i, SERVER.CONFIG);
  // }

};

PostService.$inject = ['$http', '$cookies'];

export default PostService;
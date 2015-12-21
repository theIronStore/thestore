let PostController = function($scope, $http, PostService, $state, $cookies) {
  
  //Setting header properties needed
  // let url = SERVER.URL;
  // let token = $cookies.get('');
  // SERVER.CONFIG.headers[''] = token;

  let vm = this;
  vm.postNewItem = postNewItem;

  function postNewItem (newItem) {
    console.log('hi');
    // PostService.postItem(newItem).then((response) => {
    //   console.log(response);
    // });
    // scope.newItem = {};
  }

};

PostController.$inject = ['$scope', '$http', 'PostService', '$state', '$cookies'];

export default PostController;
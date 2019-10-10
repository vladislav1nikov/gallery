export const reducer = function(state= { images: null, isLoading: true, isError: false }, action) {
  switch (action.type) {
    case 'IMAGES_ERROR':
      return Object.assign({}, state, {
        isError: action.isError
      });
    case 'IMAGES_LOADING':
      return Object.assign({}, state, {
        isLoading: action.isLoading
      });
    case 'IMAGES_UPLOADED':
      return Object.assign({}, state, {
        images: action.images
      });
    default:
      return state;
  }
}
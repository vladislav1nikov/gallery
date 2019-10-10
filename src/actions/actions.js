import { unsplash } from '../config/config.js';
import { toJson } from 'unsplash-js/native';
import Photo from '../models/Photo.js';

export function errorLoadingImages(isError) {
  return {
      type: 'IMAGES_ERROR',
      isError
  };
}

export function imagesLoading(isLoading) {
  return {
      type: 'IMAGES_LOADING',
      isLoading
  };
}

export function imagesUploaded(images) {
  return {
      type: 'IMAGES_UPLOADED',
      images
  };
}

export function getImages(page, per_page) {
  return (dispatch) => {
      let images = [];
      unsplash.photos.listPhotos(page, per_page)
      .then(toJson)
      .then(
          result => {
              result.map(item => {
                  images.push(new Photo(item.id, item.user.name, item.links.download));
              });
              dispatch(imagesUploaded(images));
              dispatch(imagesLoading(false));
          }
      )
      .catch(() => {
        dispatch(imagesLoading(false));
        dispatch(errorLoadingImages(true));
      });
  }
}
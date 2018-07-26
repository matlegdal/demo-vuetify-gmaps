

/**
 * This function fetches a type of layer
 * @param {string} type The type of feature: 'clients' or 'stores'
 */
export function get(type) {
  return fetch(`/api/${type}`)
    .then(res => res.json());
}

/**
 * POST a location to the api
 * @param  {String} type    Type of location to add
 * @param  {Object} geoJSON geoJSON to send to the api
 */
export function postLocation(type, geoJSON) {
  return fetch(`/api/${type}`, {
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(geoJSON),
    method: 'POST',
  })
    .then(res => res.json());
  // .catch(err => new Alert('warning', `An error occurred adding the location: ${err}`));
}

/**
 * This function import a file of data
 * @param {*} file The file to import
 * @param {string} type The type of data in the file 'clients' or 'stores'
 */
export function postFile(file, type) {
  return fetch(`/api/${type}/import`, {
    method: 'POST',
    body: file,
  })
    .then(res => res.json());
  // .catch(err => new Alert('warning', `An error occurred while importing the file: ${err}`));
}

/**
 * This function delete a feature by id
 * @param {Number} id The id of the feature to delete
 * @param {string} type The type of feature: 'clients' or 'stores'
 */
export function deleteFeature(id, type) {
  return fetch(`/api/${type}/${id}`, {
    method: 'DELETE',
  })
    .then(res => res.json());
  // .catch(err => new Alert('warning', `An error occurred while deleting the feature: ${err}`));
}

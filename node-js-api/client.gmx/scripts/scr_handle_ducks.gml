/// scr_handle_ducks()   

var objectArray = http_response_get_object_array();

// If list exists
if (ds_exists(objectArray, ds_type_list)){
  var size = http_response_get_object_array_size(objectArray);
  
  var ducks = ds_grid_create(2, size);
  
  for (var i=0; i<size; i++;){
    var objectElement = http_response_get_object_array_element(objectArray, i);
    
    // Get the ducks id
    ds_grid_set(ducks, 0, i, http_response_get_object_array_element_property(objectElement, "_id"));
    
    // Get the ducks name
    ds_grid_set(ducks, 1, i, http_response_get_object_array_element_property(objectElement, "name"));
    
    http_response_destroy_object(objectElement);
  }
  http_response_destroy_object_array(objectArray);
  
  scr_refresh_ducks(ducks);
}

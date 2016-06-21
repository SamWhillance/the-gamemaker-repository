/// inst = mat_event_insert(INST event, INT index);

show_debug_message("INSERT event ["+object_get_name(argument0.object_index)+"]");

// Add event to the queue
ds_list_insert(global.event_queue, argument1, argument0);

// Return the instance
return argument0;

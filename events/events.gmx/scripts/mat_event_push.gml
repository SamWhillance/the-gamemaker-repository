/// inst = mat_event_push(INST event);

show_debug_message("PUSH event ["+object_get_name(argument0.object_index)+"]");

// Add event to the queue
ds_list_add(global.event_queue, argument0);

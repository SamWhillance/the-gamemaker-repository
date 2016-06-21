/// mat_event_queue_pop()

// Get the event instance id
var top = ds_list_find_value(global.event_queue, 0);

// Remove from queue
ds_list_delete(global.event_queue, 0);

// Return reference to instance
return top;

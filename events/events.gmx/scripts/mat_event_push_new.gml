/// inst = mat_event_insert([OBJECT event, INT delay, INT index, arguments]);

if (argument_count < 2){
    show_debug_message("Error pushing event. Not enough arguments provided");
    return noone;
}

show_debug_message("PUSH event");

// Create the instance and set values
var _ev = instance_create(0, 0, argument[0]);
_ev.delay = argument[1];

// Set optional arguments
for (var i=0; i<13; i++)
{
    if (i < argument_count-3){
        _ev.arg[i] = argument[i+3];
    }
}

// Add event to the queue
ds_list_insert(global.event_queue, argument[2], _ev);

// Return the instance
return _ev;

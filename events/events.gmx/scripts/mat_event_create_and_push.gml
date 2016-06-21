/// mat_event_create_and_push([OBJECT event, INT delay, arguments])

if (argument_count < 2){
    show_debug_message("Error pushing event. Not enough arguments provided");
    return noone;
}

// Create the instance and set values
var _ev = instance_create(0, 0, argument[0]);
_ev.delay = argument[1];
_ev.arg_count = argument_count-2;

// Set optional arguments
for (var i=0; i<14; i++)
{
    if (i < argument_count-2){
        _ev.arg[i] = argument[i+2];
    }
}

mat_event_push(_ev);

return _ev;

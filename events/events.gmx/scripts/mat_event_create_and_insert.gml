/// mat_event_create_and_insert([OBJECT event, INT delay, INT index, arguments])

if (argument_count < 3){
    show_debug_message("Error inserting event. Not enough arguments provided");
    return noone;
}

// Create the instance and set values
var _ev = instance_create(0, 0, argument[0]);
_ev.delay = argument[1];
_ev.arg_count = argument_count-3;

// Set optional arguments
for (var i=0; i<13; i++)
{
    if (i < argument_count-3){
        _ev.arg[i] = argument[i+3];
    }
}

mat_event_insert(_ev, argument[2]);

return _ev;

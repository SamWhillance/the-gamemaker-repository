/// mat_event_exists_in_queue(OBJECT event)

var exists = false;

for (var i=0; i<ds_list_size(global.event_queue); i++) {
    var _ev = ds_list_find_value(global.event_queue, i);
    
    if (_ev.object_index == argument0){
        exists = true;
        i=9999;
        break;
    }
}

return exists;

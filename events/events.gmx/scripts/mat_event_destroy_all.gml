/// mat_event_destroy_all();

mat_event_destroy(par_event);

with(ctr_mat_event_queue)ds_list_clear(global.event_queue);

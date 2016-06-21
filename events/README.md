# Events

Implements an event queue. Each event has a delay. This is useful for games that are non-realtime.

Example:
mat_event_create_and_push(eve_show_debug_message, 60, "Hello 1");
mat_event_create_and_push(eve_show_debug_message, 60, "Hello 2");
mat_event_create_and_push(eve_show_debug_message, 60, "Hello 3");
mat_event_create_and_insert(eve_show_debug_message, 60, 0, "Hello INSERT");

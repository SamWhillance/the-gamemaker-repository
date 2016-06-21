/// scr_refresh_ducks(dsGridOfDuckNames)

with(obj_duck)instance_destroy();

var startx = 150;
var xx = startx;
var yy = startx;
var gap = 250;

for (var i=0; i<ds_grid_height(argument0); i++;){
  var newDuck = instance_create(xx, yy, obj_duck);
  
  newDuck._id = ds_grid_get(argument0, 0, i);
  newDuck.name = ds_grid_get(argument0, 1, i);
  
  // Create in a grid
  xx += gap;
  if (xx > room_width-(startx)){
    xx = startx;
    yy += gap;
  }
}

ds_grid_destroy(argument0);

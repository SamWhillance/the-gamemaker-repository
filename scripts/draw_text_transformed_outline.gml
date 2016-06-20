#define mat_draw_text_outline
///mat_draw_text_outline(x, y, string, scale, angle, outline width, outline colour)

// 360/8 = Fidelity of outline (recommended: 4 for small, 8 for medium, 16 for larger)

// Remember the draw colour
var dto_dcol=draw_get_color();

var outlineColour = argument6;
var outlineWidth = argument5;

// Draw the outline
draw_set_color(outlineColour);
for(var dto_i=45; dto_i<405; dto_i+=360/8)
{
    draw_text_transformed(argument0+lengthdir_x(outlineWidth,dto_i), argument1+lengthdir_y(outlineWidth,dto_i), argument2, argument3, argument3, argument4);
}

// Set the colour
draw_set_color(dto_dcol);

// Draw the fill
draw_text_transformed(argument0,argument1,argument2,argument3,argument3,argument4);


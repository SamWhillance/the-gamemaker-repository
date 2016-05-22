# Text Surface

Increase the performance of your project by only drawing text to the screen when necessary.  Drawing text every step slows down your game. By drawing text to a surface first, and then drawing that surface to the screen every frame, you speed up your draw pipeline.

This project makes this simple. Each 'label' in your project is a text-surface object that updates its string value. Whenever the value changes, the surface for that label is redrawn.

90% of the functionality is in the parent object, par_text_surface.

You can set the horizontal or vertical alignment on each label.

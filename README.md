# pi-approximator

This is a mini app built using vanilla html, css, and JavaScript that approximates pi using random values. It works using some simple algebra and intuition.

We start with a ratio. We can find the area of a circle using pi(r^2) and the area of a square using (2*r)^2. Assuming we are working on a unit circle, we simply find that the area of the circle is pi and the area of the square is 4. Now, let us begin randomly placing points in a square of sidelength 1. All the point that fall before the circle's perimeter will constitute its area. All  points plotted will constitute the square's area. We can now set our ration of pi : 4 equal to num points in circle : total points.

We find that we can approximate pi as 4 * (num points in circle) / total points.

https://vnhns.github.io/pi-approximator/
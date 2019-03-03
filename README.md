# hw4

P&E Homework 4

This repository is for Computational Practice 1 Assignment 4

How many lines are drawn each frame? In other words, how often does the for loop run?

39 lines

What do the first, second, and third appearances of the number 10 do in the code?

The first 10 is to set where to draw the first line. The second is to set where to draw the last line. The third is to set the interval of each line.

How many times does the loop body run each frame, once the x and y arrays are full?

What are two ways of increasing the spacing between rings?

1.by increasing the number "10" in 

    for (var i = 0; i < x.length; i = i + 10)
    
2.by adding the third "i" in the in 

    ellipse(x[i], y[i], 1 + (x.length - i) )
    
for example

    ellipse(x[i], y[i], 1 + (x.length + 20*i) )
    
How can you make the ellipse trail longer?

By decreasing the number "10" in

    for (var i = 0; i < x.length; i = i + 10)

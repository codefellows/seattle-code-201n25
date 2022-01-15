# Goat Picker planning

- Global variables
  - counter - starts at 0 clicks / max of 15 clicks
  - window into the DOM (change image of goats)
  - array of all the goats

- event listerns
  - what got clicked on?
  - view results button

- constructor function (Goats)
  - views
  - likes/votes
  - image src
  - image alt text / name

- functions
  - callback function:
    - handle clicks
      - increase number of votes on that goat by 1
      - render new goats (call the render goats function)
      - check if user has hit max clicks (if the user has stop voting)
    - handle results button
      - render the results to the DOM
      - get the info from our goats and display it
  - render goats (confirm the same image doesn't render twice — validation)
    - increase number of views on that goat by 1

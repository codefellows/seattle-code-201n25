# Event Handing

Event is FIRE or RAISED

Code is TRIGGERED

## Event type

- click
- submit
- onChange
- hover
- on page load
- on key release
- on mouse over

**Event Listeners**
: code that is TRIGGERED when an event is fired

**Bind**
: bind or tether an event listener to the event

**Event Handling**
: code that runs in response to an event

## Old ways to do event handing (DO NOT DO THIS!)

- In the HTML: `<article onClick="handleClick">`
- In the JavaScript file: `element.onEvent = functionName;`' ex: `button(document.getElementById('button')).onSubmit=handEvent;`

## DO THIS INSTEAD: DOM Level 2 Event Handers

(see js file in class folder)

**Event bubbling (what we will use)**
: Using event bubbling we can put the event listener on just the container and it will listen to click events in its children elements. We call this bubbling because when an event happens on one of these child “inner” elements, that event will ‘bubble’ outward. With bubbling, the event is first handled by the innermost element and then propagated to outer elements.

**Event capturing (rarely used)**
: The opposite: With capturing, the event is first captured by the outermost element and propagated to the inner elements.

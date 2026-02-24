
## What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

###  `getElementById()`

getElementByID() finds only one element by its ID
```javascript
document.getElementById("Id");
```

---

###  `getElementsByClassName()`



getElementsByClassName() finds multiple class with the same classname returns a HTMLCollection which can be iterate through forEach()

```javascript
document.getElementsByClassName("className");
```

---

###  `querySelector()`


querySelector() returns an element which is matched with first matching element.

```javascript
document.querySelector(".className");
```



###  `querySelectorAll()`


querySelectorAll() returns all matching elements with a css selector.

```javascript
document.querySelectorAll(".className");
```

---

### Key Differences Summary

| Method                 | Returns        | Selects By   | Live Collection |
| ---------------------- | -------------- | ------------ | --------------- |
| getElementById         | Single Element | ID           | No              |
| getElementsByClassName | HTMLCollection | Class        | Yes             |
| querySelector          | Single Element | CSS Selector | No              |
| querySelectorAll       | NodeList       | CSS Selector | No              |

---

## How do you create and insert a new element into the DOM?

To create and insert a new element:

### Step 1: Create the element

```javascript
const newDiv = document.createElement("div");
```

### Step 2: Add content or class

```javascript
newDiv.textContent = "Hello World";
newDiv.classList.add("className");
```

### Step 3: Insert into the DOM

```javascript
document.body.appendChild(newDiv);
```

You can also use:

* `append()`
* `prepend()`
* `insertBefore()`

---

##  What is Event Bubbling? And how does it work?

###  Definition:

Event Bubbling is a techniques where an event starts from the target element and bubbles up to its parent elements.

###  Example:

If you click anywhere inside a div:

1. Then it runs first.
2. Then the div event runs.
3. Then body.
4. Then html.

### Order:

**Child → Parent → Document**

Event bubbling allows parent elements to detect events triggered on child elements.

---

##  What is Event Delegation in JavaScript? Why is it useful?

###  Definition:

Event Delegation is a technique where you add a single event listener to a parent element instead of adding listeners to multiple child elements.

###  How it works:

Because of event bubbling, the parent can detect which child triggered the event.

###  Example:

```javascript
parentElement.addEventListener("click", function(event) {
    if(event.target.classList.contains("btn")) {
        console.log("Button clicked");
    }
});
```

###  Why is it useful?

Improves performance. Reduce memory usage. We shouldn't declare multiple eventListener by using it.
---

##  What is the difference between `preventDefault()` and `stopPropagation()`?

### 🔹 `preventDefault()`


  * Prevent form submission.
  * Prevent link navigation.

```javascript
event.preventDefault();
```

---

###  `stopPropagation()`

* Stops the event from bubbling up to parent elements.

```javascript
event.stopPropagation();
```

---





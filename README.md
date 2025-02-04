# Color-Switcher

A simple web page where users can change the background color of the page by clicking on different color boxes. The text inside the page also updates to the selected color to indicate the change.

## Features:

- Click on any of the color boxes to change the background color of the page.

## Technologies Used:

- **HTML**: Structure of the webpage.
- **CSS**: Styling of the color boxes.
- **JavaScript**: Adds interactivity to the color boxes and updates the background color and text color.

## Getting Started:

1. Clone the repository or download the project files.
2. Open the `index.html` file in your browser.

## How it works:

- Each color box (like grey, white, blue, yellow) has a specific background color.
- When clicked, the page background color changes to match the clicked box.

## Customization:

- You can add more colors by adding additional `<div class="button" id="colorName"></div>` elements.
- Modify the `colorId` in the JavaScript to add new color options.

## Example:

To add a new color box (e.g., red), you can add the following code:

```html
<div class="button" id="red"></div>
```

```css
#red {
  background: red;
}
```

This will add a red color box to the page, and the background will change to red when clicked.

## License:

This project is open source and available under the MIT License.

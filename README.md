# calculator

## Description
This project is a **fully functional calculator application** developed as part of the Odin Project's Foundations course. The primary goal was to create an interactive calculator that performs basic mathematical operations with a clean and intuitive UI.

## Features
✅ **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division.
✅ **Exponentiation**: `xⁿ` button for power calculations.
✅ **Decimal Support**: Allows floating point number inputs.
✅ **Backspace Functionality**: `DEL` button to remove the last digit.
✅ **Clear Function**: `AC` button resets the calculator to its default state.
✅ **Chaining Operations**: Continuous calculations without pressing `=` each time.
✅ **Display Formatting**: Rounds results to 5 decimal places to prevent overflow.
✅ **Error Handling**: Prevents division by zero and multiple decimal points in a number.
✅ **Responsive UI**: Built with Flexbox for a structured layout and better usability.

## Technologies Used
- **HTML**: Provides the structure of the calculator.
- **CSS**: Styles the calculator for a clean and modern design.
- **JavaScript**: Handles all calculator logic and interactivity.

## Project Structure

### Files
- `index.html` - Contains the structure of the calculator, including rows and buttons.
- `style.css` - Defines the styling for the calculator layout, buttons, and interactivity.
- `script.js` - Implements the logic for all mathematical operations and user interactions.

### Layout Details
- **Display Section**: Positioned at the top for showing inputs and results.
- **Button Rows**:
  - **First Row**: `CLEAR`, `BACK`, `xⁿ`, and `÷`.
  - **Number Rows**: Numbers `0-9` and operators `+`, `-`, `×`.
  - **Last Row**: `0`, `.` (decimal), and `=` (evaluate).

## How to Use

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd calculator
   ```
3. Open `index.html` in a web browser to use the calculator.

## Future Enhancements (To-Do List)
- ✅ Implement keyboard support for numbers and operators.
- ✅ Improve handling of large numbers in the display (e.g., scientific notation or scrolling).
- ✅ Enhance mobile responsiveness for smaller screens.
- ✅ Add more advanced features like roots, parentheses, and memory functions.

## Acknowledgments
This project is part of the [Odin Project](https://www.theodinproject.com/), a comprehensive web development curriculum.


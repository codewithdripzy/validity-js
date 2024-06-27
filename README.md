# Auth Valdify: Powerful and Customizable Validation for Node.js

[![npm version](https://badge.fury.io/js/auth-validify.svg)](https://www.npmjs.com/package/auth-validify)

**auth-validify** simplifies and strengthens data validation in your Node.js applications. It provides a comprehensive set of validation functions for common data types, along with options for customization to meet your specific needs.

This library empowers you to:

- Ensure the integrity and security of user-submitted data.
- Prevent invalid inputs from reaching your backend logic.
- Enhance user experience with clear and actionable error messages.

## Installation

```bash
npm install auth-validify
```

**Usage**

Offer practical examples demonstrating how to use each validation function:

## Usage

**1. Basic Validation:**

```javascript
    const { validator } = require('auth-validify');

    const email = 'someone@email.com';
    const password = 'StrongPassword123!';

    if (validator.isEmail(email) && validator.isValidPassword(password)) {
        console.log('Valid email and password!');
    } else {
        // Provide helpful error messages
        if (!validator.isEmail(email)) {
            console.error('Invalid email format.');
        }
        if (!validator.isValidPassword(password)) {
            console.error('Password must be at least 8 characters long and contain a combination of letters, numbers, and special characters.');
        }
    }
```

```javascript
    const { validator } = require('auth-validify');

    // Set custom password length (minimum 12 characters)
    const options = { minLength: 12 };

    if (validator.isValidPassword(password, options)) {
        console.log('Password meets custom criteria!');
    } else {
    // ... (error handling)
    }
```

<!-- // (demonstrate validation methods for phone numbers, usernames, URLs, etc.) -->

## Features and Benefits

- **Comprehensive Validation:** Covers common data types like email, password, phone number, username, and URL.
- **Customizable Rules:** Tailor validation criteria to your application's specific needs (e.g., minimum password length, allowed email domains).
- **Clear Error Handling:** Throw informative exceptions or provide custom error messages for better debugging and user experience.
- **Asynchronous Support:** Enables seamless integration with promises or async/await patterns.
- **Well-Documented:** Provides detailed documentation with clear examples and API descriptions.

## Contribution

We welcome contributions to improve `auth-validify`. Feel free to submit pull requests for bug fixes, new features, or improved documentation.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Author

- [Bankole Emmanuel](https://github.com/codewithdripzy) (https://buymeacoffee.com/thecodeguyy)

**Buy Me a Coffee**

If you find this library helpful, consider buying me a coffee to support further development:

[![Buy me a coffee](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/thecodeguyy)

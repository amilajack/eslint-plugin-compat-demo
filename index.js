// Make a network request using fetch
// This is not an error because we added a fetch polyfill
// in our eslint settings
fetch('google.com');

// Instantiate PaymentRequest
const req = new PaymentRequest();

// Instantiate IntersectionObserver
const observer = new IntersectionObserver(() => {});

const foo = Object.values({});

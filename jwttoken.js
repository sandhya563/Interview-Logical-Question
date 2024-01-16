// Create JWT token
const jwt = require('jsonwebtoken');
const payload = {
  userId: 1,
  username: 'sandy',
  email: 'sandy@example.com'
};
const secret = 'secret-key';
const token = jwt.sign(payload, secret, {
  expiresIn: 60 * 60 // 1 hour
});
console.log(token);

// Verify JWT token
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiamlvaGRvZSIsImVtYWlsIjoiam9obmRvZUBleGFtcGxlLmNvbSIsInRpcGVyIjoxNjY1NDU2OTY0fQ.9-jY_lA5291360i_u1XEQ3a3a4e3223a8050';
// const secret = 'my-secret-key';
// try {
//   const decoded = jwt.verify(token, secret);
//   console.log('Decoded payload:', decoded);
// } catch (error) {
//   console.error('Invalid token');
// }
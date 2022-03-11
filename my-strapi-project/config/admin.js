module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '95192a00470811edea552b43f6845976'),
  },
});

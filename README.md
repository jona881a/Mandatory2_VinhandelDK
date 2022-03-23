# Mandatory2_VinhandelDK
This is a project for the NodeJS Fullstack Course at KEA Computerscience education where the task is to create a frontend and backend that uses a webframework and several auth techniques
The Task list:
Technical requirements:
Use a web framework. 
Use a database.
Email should be sent out with Nodemailer. This can be done through sign up/forgot password/contact us/thank you for your purchase message. Only 1 email is required but all the requirements would be nice. 
Add notifications. At least one. You could use this library: https://github.com/CodeSeven/toastr
Backend:
You need to implement authentication:
Implement it yourself with Bcrypt, route etc. You could consider a library or a service such as Passport.js, Google SSO, OAuth or Firebase Authenticate. 
You need to implement authorization. 
Use sessions (easy), JWT (difficult).
Good video on how to implement JWT with Express: https://www.youtube.com/watch?v=mbsmsi7l3r4
Frontend: 
You need to implement authentication too:
The minimum requirement is a Login/Sign out component. (Sign up/Forgot password are optional). 

You need to implement authorization here too: 
Protect your routes. If you are using svelte-navigator use private routes so people can’t access pages by changing the URL. You could use this:
https://github.com/mefechoel/svelte-navigator/tree/main/example/private-routes


Bonus
Simulate payment. You could use Stripe. And you could use this library for it. 
https://www.sveltestripe.com/

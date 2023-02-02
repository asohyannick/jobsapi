Never ever store users passwords as strings in your DB bc once an attacker have access to your DB,he or she is going to messed up the lives of your users. So, never ever store your users password as strings in your DB.
what's the solution to this issue ?
// we are using to HASH THEM.
// READ MORE ON THE HASHING ALGORITHEM.
The best libraries for password hashing is the bcryptjs.
// the genSalt method is the default method.
// the hash method is looking for the genSalt;
// hashing our password using bcrypt
// visit allKeyGenerator.com to help generate a very long, complex and unguessable string as our password.

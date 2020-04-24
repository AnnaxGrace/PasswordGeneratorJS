# PasswordGeneratorJS

Pseudo Code:

Choose a number 8-128


The confirm boxes need to say in the for loop "if this was selected "ok", then use this random.
    - Is this where we would push into the array? I think so!

Then the generator needs to pick randomly from a selection of randoms. So there needs to be 4 strings, then those strings need to be random. And then each character needs to pick randomly from those randoms for the amount of number user picks.

So that is the Pseudo Code that I started with, translating my actual code:

Have query selector that was provided.

Created four strings of characters that will be used in our pre-defined character questions.

Created empty arrays for password and finalPassword.


Created function random to create a random number that is the length of the array.

Created four functions with confirms that push to password array if someone says "yes".

Created the click event that encompasses generating the password.

Created prompt that asks for length, store inside of length

Run the all the confirm functions

Created an if that forces the user to choose at least one confirm function

Created a for loop that runs as long as "i" is less than length (which is the password length the user chose)

Created variable that chooses randomly from 0-3 to ensure that we're choosing which string in our array to pick from randomly

so depending on the number Final random choose, we pick from password array.
    - We check to make sure that it was actually added to the array with a loop that checked for an character. If the array was chosen to be added we then chose randomly from that array, and then push what was chosen. If it was not added to password, subtract from i, so finalPassword is the correct length.

 for loop ends when the character number is the same as the value the user chose.

Created generate to make finalPassword in password format, without the commas.

State that if your password is the correct length, then alerted password with message (using generate)

If it is not the correct length, you do not get password.
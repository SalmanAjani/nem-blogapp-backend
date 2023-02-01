<h1>Blog App Backend</h1>

<h2>Description</h2>
<p>This is a backend server that is ready to use for a simple blog app.</p>

<h2>Purpose</h2>
<p>Make an easy to use server that can be used by any frontend developer to make a blog app if they wish to.</p>

<h2>Deployed:</h2>
<p>If you wish to directly use the deployed link you can use this - <a href="https://good-teal-butterfly-kilt.cyclic.app/" alt="blogdeployed">Link</a>

<h2>Features:</h2>
<ul>
<li>User's password gets hashed during signup process.</li>
<li>Deleting a blog also removes it from the user's list.</li>
<li>Error handling on every step.</li>
</ul>

<h2>Steps to use:</h2>
<ol>
<li>Clone the repository.</li>
<li>Run <b>'npm install'</b> command to install all the dependencies.</li>
<li>Create a <b>'.env'</b> file and add your MongoDB url for the database you want to create.</li>
<li>Also add the port at which you want to run the server in the <b>.env</b>file.</li>
<li>Start the server using <b>'nodemon index.js'</b>.</li>
<li>Now test out all the routes using a software such as Postman or Thunderclient.</li>
<li>You can now deploy this on a server hosting platform such a Cyclic or Render to make it accessible for everyone.</li>
</ol>

<h2>Routes Provided:</h2>
<ul>
<li>"/" - Homepage</li>
<li>"/users" - Get all users.</li>
<li>"/users/signup" - User registration.</li>
<li>"/users/login" - User login.</li>
<li>"/blogs" - Get all blogs.</li>
<li>"/blogs/:id - Get a particular blog.</li>
<li>"/blogs/add" - Create a new blog.</li>
<li>"/blogs/update/:id" - Update a particular blog.</li>
<li>"/blogs/:id" - Delete a particular blog.</li>
<li>"/blogs/user/:id" - Get all blogs of a particular user.</li>
</ul>

<h2>Some Screenshots</h2>
<p>All Users:</p>
<img src="https://i.ibb.co/x54NJYk/img2.png" alt="img2" border="0">

<p>All blogs from a particular user:</p>
<img src="https://i.ibb.co/YyzW23h/img1.png" alt="img1" border="0">

<h2>Tech Stack</h2>
<ul>
<li>JavaScript</li>
<li>MongoDB</li>
<li>Express.js</li>
<li>Node.js</li>
</ul>

<h2>Features to work on:</h2>
<ul>
<li>Generating a token for a user so that the user can be validated completely.</li>
<li>Security for blogs. User 2 should not be able to edit or delete the blogs created by User 1.</li>
</ul>

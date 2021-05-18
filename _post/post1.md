# Pushing the limits of your smartphone: Web development on mobile - Part #1

Web development is a fun and interesting topic to learn. Everyday new developers are joining and contributing to the world of web development. Even I am one of them. When I started out last year during the worldwide lockdown, I didn't had much to start with. Only a smartphone and a lot of curiosity. I am not saying that I am some web development guru or ninja but I do know that I have the necessary skill and knowledge to make things work the better and easier way. 

Today, I am starting a series:  ["Pushing the limits of smartphone web development!!"]()

In this series, we will create a fully fledged web app with complete **user authentication**, **CRUD functionality** and **routing** using React. Bonus: **We will be deploying the app on Netlify!!**

Did I just say React??

Didn't I also say we will be doing this in an smartphone??

Well, yes I said React and also we will be building this project in an android smartphone.

*NOTE: I am assuming you know the fundamentals of React and a good understanding of ES6 as well as JSX(fancy term for writing HTML and CSS in JavaScript)*

You can learn React easily from their [official docs](https://reactjs.org/docs/getting-started.html)

## Prerequisites

<ol>
  <li><a href="https://play.google.com/store/apps/details?id=io.spck.editor.node">SPCK Editor</a></li>
  <li>Some patience</li>
  <li>Passion for learning and creating</li>
</ol>

## The setup 

Enough of the blah blah blah; I promise. :)

So, let's get started.

First of all, open SPCK Editor and click the hamburger icon on the top left of the screen.

$hamburger icon ss

Then clone this github repo: 
"https://github.com/abrarshahriar/react-systemjs.git"

$clone repo ss

Now, carefully follow the steps shown in the pictures below:

$checkout ss'es

Click on the run icon on top right of the screen. You might see the console. To close it, just click on the floating "settings" icon. 
If you see the legendary spinning react logo, congratulations!! you just achieved your first medal: React platoon: An individual with the will to do extraordinary!! ;)

## The Backend

Backend!! Things can get really messy on the backend sometimes. Since our app is going to be pretty simple, I will be using Google's Firebase as our backend. 

Firebase provides full user authentication, NoSQL database(firestore) as well as realtime data transfer between the backend and frontend. Sounds heavy but trust me it is so easy to get started with firebase. Let's create our first project on firebase. 

I recommend using the chrome browser on your smartphone.

<ol>
  <li>Head over to the <a href="https://console.firebase.google.com">Firebase console</a> and login/sign up using</li>
  <li>Click on the "Add Project" button</li>
  <li>Write your project name. We will call ours "thought-md"</li>
  
*Note: We are using firebase just for the backend. But we won't be using firebase to host our app.*
  
  <li>Now click continue</li>
  <li>You will see a google analytics page. Don't bother, click continue again.</li>
  <li>Select "Default Account For Firebase" and press "create project".</li>
  
  $select default account ss
  
  <li>Wait for a few seconds while firebase sets up your project</li>

</ol>

<h4>Now, let's integrate firebase with our app</h4>
  
<ol>
  <li>Add a web app on firebase</li>
    
  $add web app icon ss
    
  <li>Name the app. We will name it as same as the project.</li>
  <li>You don't have to check "Set up firebase hosting..." </li>
  <li>Click "Register app"</li>
  <li>You will see this page:</li>
    
  $cdn + config ss

  <li>Don't do anything here. We will copy the config from somewhere else.</li>
  <li>Press "Continue to console"</li>
  <li>Click on the hamburger icon on top left of the screen.</li>
  
  $firebase hamburger
  
  <li>Beside the "Project Overview" option, we will see a settings icon. Click on that.</li>
  
  $firebase project settings
  
  <li>Click on "Project settings"</li>
  <li>Scroll down and click on "Config"</li>
  <li>Copy the config</li>
  <li>Now, in our app's src folder, We will make a new file called "firebase.js"</li>
  
  The file should look like this:
  
  ```javascript
  import firebase from "firebase"
  
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    //your config...
  };
  
  const app = firebase.initializeApp(firebaseConfig)
  
  const auth = firebase.auth()
  const db = firebase.firestore()
  
  
  export { auth, db }
  ```

</ol>

So, we created our react app and integrated firebase with it. In the next part we will see how to authenticate a user with their google account along with routing!!! Great stuff ahead guys.<br> Stay tuned. <br>
Peace out.
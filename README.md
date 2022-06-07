# Hip Hop Quiz App
This is my second project i’ve created for The Learning People's front end developers course.

## Description
I created this quiz app test the knowledge of hip hop fans. There are 15+ questions the user will need to answer. Once the user has finished answering all the questions, they will then be able to see how many correct questions they got.

## UX

### Home
The Home section is the the first section to be shown. Here the user will have to enter a username using alphanumeric characters excluding symbols. The username should be between 3-20 characters. Should the username length be less or more than stated number of characters, the input box will be highlighted with a red border. Should the username be meet the length required, the input box will highlighted with with a green boarder. The user must enter a valid username in order to enable the play button which then takes them to the quiz section.

### Quiz
There are currently 15 multiple choice questions the user will to answer. Should the user pick the wrong answer, the chosen answer will be highlighted red however, should the user chose the correct answer, the chosen answer will be highlighted green.  Only when the user selects their answer will they be able to advance to the next question.

### Results
Depending on the results, the use will be presented with their score and 1 of 3 messages which is rendered to the webpage.

### Design
I used black and gold as the primary colour as i feel they are good colours to represent hip hop. I have also used a dark grey background to bring out the primary colours. I have used Sedgwick Ave font and the css letter spacing property for accessibility as it makes it easier to read.


## User Story
- As a  user I would like to navigate through the app with as much ease as possible.

- As a user, want to know how to play the the quiz and how the scoring system works.
  
- As a user I would like to know if the question I selected was correct or wrong.
  
- As a user, I would like to know how many questions I got correct.
  
- As a user, I want to have fun or learn something new when playing a quiz.
  
- As a potential employer, I want to know the developer make a web app/site that is accessible to and for everyone.
  
- As a potential emplyer, I want to see the developer can create an web app/site that is responsive on all devices.


## Technology

### Balsmiq
I chose to use Balsamiq to create my wireframe to help me get a visual understanding of what i waned my quiz app to look like

The reason for opting to use Balsmiq for my wireframes was to go for the simple look so i can focus more on the layout and design rather than the finer details such as colour, font and images. I have done wireframes for each screen size to help me work on the responsive layout.

The look of my quiz app has silghtly changed from the mock up stages. Instead of individual html documents, oi have decided to keep it all on one with diffeenct sections. I have also created a **Results section** and have created a modal for my **How To section**

Please see each links below.

### Wireframes

- [Home page Desktop](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/home-page-desktop.pdf)

- [Home page Tablet](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/home-page-tablet.pdf)

- [Home page Mobile](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/home-page-mobile.pdf)

- [Quiz page Desktop](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/game-page-desktop.pdf)

- [Quiz page Tablet](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/home-page-tablet.pdf)

- [Quiz page Mobile](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/game-page-mobile.pdf)

- [How to page Desktop](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/how-to-play-desktop.pdf)

- [How to page Tablet](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/how-to-play-tablet.pdf)

- [How to page Mobile](https://github.com/Mikhail2786/quiz-app/blob/main/assets/wireframe/how-to-play-mobile.pdf)

### Visual Studio Code

- I have used VS Code as my text editor to create my HTML, CSS, JavasScript and README files along with the terminal on VS Code to commit regular changes to my GitHub repository.

### HTML5

- I have used HTML5 to structure my content for my portfolio

### Bootstrap v5

- I have used bootstrap for a responsive grid system along with components. Bootstrap has helped structure my quiz app with positioning before adding CSS3.

### CSS3

- I have used CSS3 to add custom styles to html tags, classes and id’s to bring the content on my portfolio to life.

### JavaScript

- I have used Javascript to add logic to my quiz app so it behaves the way i intend it to. 

### Google Font

- I have used google font which was imported from the official google font website. 
  
### Git

- I have used Git version control system via VS Codes to consistently and and commit changes.

### GitHub

- I have used GitHub to push and store all my committed changes to my quiz app via Git and i have used Github pages to deploy my website.

## Testing

### Chrome DevTools

- DevTolls Element
    - I used DevTools elements section for responsive testing, to help test positioning if elements, widths and heights of images and elements. I also constantly tested my website at different break points such as mobile, tablet and desktop to give me a better understanding of how my site would look on each screens and to make necessary changes that would help the users experience.


- DevTools Console
    - I used the console and the console.log() method to help with debugging bugs in my javascript code. 

### Validation Websites
* HTML Validation
    * I used [W3C HTML Validation service](http://validator.w3.org) to test my HTML code.

* CSS Validation
    * I used [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) to test my CSS code

My quiz app was tested across all major browsers compatible with macOS.

## Deployment

**To deploy my project, I used GitHub pages with the following steps:**
1. I logged into my GitHub account.
2. Loaded my terminal via Visual Studio Codes.
3. `git init` to Initialise git. 
4. `git add [file name]` to add files to staging area.
5. `git status` to double check what is in staging area. 
6. `git commit -m “initial commit”` for first commit to project.
7. Created my first GitHub repository “personal-portfolio”.
8. Copied the url link from my GitHub and paste it into Visual Studio Codes terminal.
    as follows: `git remote add origin https://github.com/Mikhail2786/quiz-app.git`.
9. `git push -u origin master` for the local master branch to be push to the remote origin master branch.
  
**I committed regular changes with the following steps:**
1. `git add [file name]` to add files to staging area.
2. `git commit -m “message”` to commit files.
3. `git push` to push changes to GitHub remote repository. 

**I deployed my project with the following steps:**
1. Logged onto GitHub.
2. I clicked on to https://github.com/Mikhail2786/quiz-app.git.
3. I click settings.
4. I click pages.
5. I navigated to the source section, from the dropdown menu i clicked on branch then save.

**Repository Link:**
https://github.com/Mikhail2786/quiz-app.git.

**To run this project locally pls follow the following steps:**
1. Log into github
2. Search and click on Mikhail2786/quiz-app.
3. Click on the code and copy https://github.com/Mikhail2786/quiz-app.git.
4. Open your terminal.
5. Change your working directory to a location you want the cloned directory to he placed.
6. Type git clone https://guthub.com/Mikhail2786/quiz-app.git into your terminal.

## Acknowledgment
Sunny Hebbar - My Learning People mentor.
Scott Nnaghor - My Learning People mentor.
Stuart Gough- My mentor who helps me with my learning and development.
Rosin Kelly - My mentor who helps me with my development.

## Media
Logo created by Tristan Gordon - [Instagram: @sweetslewis](https://www.instagram.com/tg__grfx/?hl=af).
All icons are from [Bootstrap](https://getbootstrap.com/).
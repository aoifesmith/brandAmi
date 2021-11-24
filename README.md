# brandAmi Ambassador Eligibility Checker
This website has been created as a second portfolio for the Code Institute's Full Stack Software Development Course. This is a fictitious site. The site is a brand ambassador service that is expanding its community of brand ambassadors for its clients and products it is aligned with. 'Ami' is the French translation of 'friend'. The live website can be found [here](https://aoifesmith.github.io/brandAmi)

## User Experience Design

### The Strategy Plane
The site should be intuitive to use. The site provides users with an eligibility checker form created using JavaScript, HTML & CSS. The eligibility checker should be easy to understand, simple to interactive with and give feedback to the user on inputs.

#### Purpose
The site’s purpose is to check eligibility of candidates/applicants who want to apply to become an ambassador. The site provides information to create awareness of the company and its services. It provides an application form for a user to fill out which determines if an applicant meets the eligibility criteria to become a brand ambassador. It processes user input information carrying out defensive programming techniques with validation checks on user input in order. If they do not meet criteria they will be unsuccessful in their application. The benefit of the app is to save time on a screening process not allowing a user to proceed with application if they do not meet requirements. Inclusion of defensive programming reduces human error and other risks by anticipating them and designing them out. A video tutorial is included on the site with instructions on how to apply and the eligibility criteria to be met to be a successful applicant. Information about the company, useful links and social profiles are provided for the user to create awareness of the company.

#### How does it work?
The website provides an application form which determines eligibility of applicant to become a brand ambassador with brandAmi. The user inputs their data during the application process. The site responds to the users' actions, allowing users to actively engage with data, and alter the way the site displays the information to achieve their preferred goals.

#### Site Goals:

##### External User Goals:
* The site users want to find out about the services of the company brandAmi. 
* An applicant wants to apply to become a brand ambassador with brandAmi.

##### Site Owner Goals:
* To provide users with an eligibility checker to see if they qualify to become a brand ambassador within the brandAmi community.
* To attain valid user information using defensive programming and ensure applicant can proceed with steps only after passing expected criteria.
* Provide user instructions on how to use the application checker and confirm criteria needed to be a successful applicant. 

#### User stories
1. As a user, I want to easily understand the main purpose of the site.
2. As a user, I want to view the website and content clearly on any device.
3. As a user, I want to have instructions on how use the eligibility checker so that I can easily understand the process and requirements.
4. As a user, I want to learn what the eligibility requirements are to become a brand ambassador so I can ensure I meet criteria to become a successful applicant.
5. As a user, I want to be alerted to any errors I make during my application process.
6. As a user, I want to be advised if I have been successful in my application so I will be informed as to whether I need to reapply or wait upon instruction as a confirmed candidate..
7. As a user, I want to be offered the opportunity to reset the application process. 
8. As a user, I want to be provided with contact information for the site owner in case I want to reach out with any queries I have about the site.
9. As a site owner I want to be able to provide users a brief overview of the company so users can be informed what the company does.

### The Scope Plane

#### Features planned:
* Header area with Navigation.
* Hero image with information about the site.
* Video of how to use the site.
* Application Instructions - Clear instructions on how to traverse the application.
* Apply Button.
* Incorrect user input displayed.
* Message advising where ineligible criteria selected.
* Footer Items - Contact Information and links to social media profiles.

### The Structure Plane

#### User Story 1:
*As a user, I want to easily understand the main purpose of the site.*
##### Acceptance Criteria:
* Provide ‘About’ heading with text content explaining the services of the business.
##### Description:
There will be a section on the home page that gives text based information about the services of the business and what these entail. This will enable the users to immediately see what the site is about as soon as they arrive on the landing home page. 

#### User Story 2:
*As a user, I want to view the website and content clearly on any device.*
##### Acceptance Criteria:
* Website layout is well displayed and readable across all sized devices.
##### Description:
Flexbox is implemented to lay the content of the Website out in containers, rows and columns. Media queries are used to layout the content of the website and work across a variety of devices from desktop to tablet to mobile.

#### User Story 3:
*As a user, I want to have instructions on how to use the eligibility checker so that I can easily understand the process and requirements.*
##### Acceptance Criteria:
* How to Apply Instructions are provided that contain the following information:
* 	How to use the eligibility checker.
* 	How to be successful in applying to become a brandAmi ambassador.
* 	How to be unsuccessful in applying to become an ambassador.
##### Description:
Information to be included: A set of instructions will be added below the application form. This will display to the user, information on how to input manual data inputs, what inputs are accepted, how to be successful or unsuccessful in the application process.
Incorrect user data text input will be shown below the ‘Apply Now’ header so that the user can see what data they have either missed filling in or input.
If the user is successful in inputting their user id and password correctly they will
Only numbers will be accepted as the user id which is a 4 digit number.
The password cannot be the word ‘password’ and must be between 6 and 20 characters combined. 

#### User Story 4:
*As a user, I want to learn what the eligibility requirements are to become a brand ambassador so I can ensure I meet criteria to become a successful applicant.*
##### Acceptance Criteria:
* A list of requirements to be provided in the Critera section on main page as well as the 'How to Apply' modal button which contain a list of requirements
##### Description:
Information to be included: A list of eligibility requirements that are required to become a successful candidate. 
You need to be a resident of Ireland.
You must be over 18 years of age.
You must have at least 5k IG followers.
You must have at least 20k TikTok followers.
A sinister plot twist with ties to selling ones soul of course.

#### User Story 5:
*As a user, I want to be alerted to any errors I make during my application process.*
##### Acceptance Criteria:
* Unsuccessful data input errors are displayed on form area.
##### Description:
If the user enters an unsuccessful input for the user id or password, an error will be displayed in the form area under the 'Apply' heading. It will be highlighted with a different colour background which draws the user attention to the information required. 

#### User Story 6:
*As a user, I want to be advised if I have been successful in my application so I will be informed as to whether I need to reapply or wait upon instruction as a confirmed candidate.*
##### Acceptance Criteria:
* Successful completion of the application displayed to user.
##### Description:
If the user successfully answers the eligibility criteria a message will be displayed that the user is a successful candidate and will be contacted in due course. If the user is unsuccessful in a question they will not be able to proceed with further queries and will be prompted that they are ineligibe to become a brandAmi ambassador. 

#### User Story 7:
*As a user, I want to be offered the opportunity to reset the application process mid process*
##### Acceptance Criteria:
* Reset feature provided in the eligibility application area.
##### Description:
If the user wants to return to the initial eligibility checker questions they can opt to click on the reset feature and reset the questions. 

#### User Story 8:
*As a user, I want to be provided with contact information for the site owner in case I want to reach out with any queries I have about the site.*
##### Acceptance Criteria:
* Contact Information displayed in footer.
##### Description:
Contact information will be added to the footer. This will contain a name and email for the site owner.

#### User Story 9:
* As a site owner I want to be able to provide users a brief overview of the company so users can be informed what the company does*
##### Acceptance Criteria:
* Company services info displayed in the About opening paragraph on main page. 
##### Description:
Company information advising it's services will be added to the opening paragraph of the main page. The information will include details about who the service is for. 

### The Skeleton Plane
#### Wireframes
Wireframes were originally hand sketched designs created to aid planning the website layout. These were then created using Balsamiq. 
Mobile, Tablet, and Desktop wireframes are all available here with images to follow in the dropdown menu below.

Wireframes Layout Images

### The Surface Plane
#### Design
##### Imagery
The logo is a simple yellow design with the company name and an icon that combines the letters 'b' and 'a'. It is a custom created design made using the ios Procreate app. A variety of options was created and included square, vertical, horizontal sizes with and without transparent backgrounds. From Pixabay to Unsplash, research was conducted on a number of free photography websites. As the research progressed, the concept of using illustrations instead became a was deemed more appropriate as they are modern and contemporary and could cater to a wide range of people through the usage of diverse colors. Undraw provided the illustrations that were finally approved for usage.

The 'About' section's hero picture is a simple representation of a person with a number of computer devices behind them. Because social media is at the forefront of it, having an illustration with the devices was thought acceptable to the services of the business. To ensure uniformity & consistency across the site, the image was carefully altered to use the same hex color as the brand logo.

In order to amplify this consistency in the look and feel of the website all images were then altered using the colour scheme settled on for the site. The images were compressed using the site tinypng to help improve site loading time performance and prevent user delay wait times. When tinypng was not implemented images that were sent from the developer’s iPad through the mail app selected either the small or medium size selection keeping kbs sizes as low as possible without losing integrity of the image or pixilation issues.

#### Colour Scheme
The colour scheme was inspired by the name of the business. As this is a fictitious site a number of business names were considered. Given the nature of the site was for brand ambassadors the name ‘Ami’ was considered. It is the French translation of friend. brandAmi was the final outcome. With the word ‘friend’ in mind research on colours began. Yellow is the colour associated with friendship. Positive, sunny and optimistic, yellow is energetic and eye-catching – and particularly effective for point-of-sale messaging, as it's proven to catch the eye quicker than any other colour. From this the colour scheme evolved. Colours including various shades of yellow, blue and grey were run through a number of different colour generators (Brandfolder, Coolors, Procreate) until finally settling upon. Image Color Testing Report 

These were then tested for contrast ratios in order to ensure they would pass accessibility requirements. By ensuring this step was carried out the result would be to the benefit of those with visual impairments. Where it was deemed necessary to slightly alter the colour value to achieve higher accessibility ratio results amendments were then made. These were only done whereby the integrity of the design was to be maintained. See Color Contrast Test Report.

#### Typography
Research was carried out on a number of fonts for the website. An important consideration was in the area of accessibility. Given the modern and contemporary business approach the decision was to use a clear san-serif font. The site is to appeal to a wide variety of users and so keeping the typography in an easily readable font was of significant importance. A number of tests and comparisons were carried out matching various suitable fonts and seeing how they looked compared against each other. The fonts were rotated to see what differences were when swapped from header to paragraph text. 

Sometimes one font is enough to make your design stand. This is one of those times. The final confirmed fonts is Quicksand was selected whereby it would use two different weights. ‘Medium’ for the headings and ‘Light’ for the body. Quicksand is a geometric display sans-serif with rounded terminals, which makes it a friendly and pleasant type. Using it with bright colors creates a modern and sharp look. A backup font of sans-serif would be used where these fonts were not available so the site would still remain relatively consistent.

#### Favicon

text to be added

#### Differences to Design
All features listed in the Structure Plane were implemented as per design. A custom 404 page was added to the website that contains an link to allow the user to direct back to the home page if they try to access a page that is not available.



## Deployment
This project was created using [Gitpod](https://gitpod.io/) and deployed on [Github](https://github.com/). On occasion when there were server site issues with Gitpod or user interupted internet access VSCode on a local machine was used to progress. Code was copied and pasted to the project on Gitpod. The site was deployed to Github pages.

### Repository Setup on GitHub
1. Open GitHub in the browser.
2. Sign in with username and password.
3. Navigate to "Your repositories".
4. The portfolio 2 site was initially created using the code-institute-full-template repository available from the Code Institute. Upon navigating to the template link the "Use this template" button was selected.

Images 

### Workspace on GitPod
1. Enter the name of the Repository 
2. Click green 'Create repository from template' button
3. Wait while the repository is generated. 
4. Click the green 'Gitpod' button
5. Wait for IDE workspace to prepare.
6. IDE opens up and ready to use Gitpod platform. 
7. This workspace is used to create the required folders, files and code for the website and added all needed images.
8. Git commands such as add, commit and push command were regularly implemented when working on Gitpod sending saved details to GitHub.

Images 

### Deploy on GitHub

1. On GitHub, navigate to your repositories.
2. Select the site.
3. Navigate to *Settings*.
4. In the left sidebar, select Pages.
5. Under the GitHub Pages from the source section drop-down menu, select the main branch.
6. Upon correct selection and saving of the main branch, refresh the page and the site is successfully deployed.
7. The site is published with the live site address provided.

Images

### Forking a GitHub Repository
1. Login to GitHub.
2. Locate your desired repository '[brandAmi](https://github.com/aoifesmith/brandAmi)'.
3. Locate the fork option in the top-right hand corner of the repository page.
4. You will be asked where you want to fork it to.
5. You should now have a copy of this repository into your GitHub account.
6. For more information on how to clone a repository, please check this [GitHub documentation](https://docs.github.com/en/github/getting-started-with-github/fork-a-repo).
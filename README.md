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
4. As a user, I want to be alerted to any errors I make during my application process.
5. As a user, I want to know whether I meet eligibility criteria.
6. As a user, I want to be offered the opportunity to reset the application process. 
7. As a user, I want to be provided with contact information for the site owner in case I want to reach out with any queries I have about the site.

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
*As a user, I want to be alerted to any errors I make during my application process.*
##### Acceptance Criteria:
* Unsuccessful data input errors are displayed on form area.
##### Description:
If the user enters an unsuccessful input for the user id or password, an error will be displayed in the form area under the 'Apply' heading. It will be highlighted with a different colour background which draws the user attention to the information required. 

#### User Story 5:
*As a user, I want to know whether I meet eligibility criteria.*
##### Acceptance Criteria:
* Successful completion of the application displayed to user.
##### Description:
If the user successfully answers the eligibility criteria a message will be displayed that the user is a successful candidate and will be contacted in due course. If the user is unsuccessful in a question they will not be able to proceed with further queries and will be prompted that they are ineligibe to become a brandAmi ambassador. 

#### User Story 6:
*As a user, I want to be offered the opportunity to reset the application process mid process*
##### Acceptance Criteria:
* Reset feature provided in the eligibility application area.
##### Description:
If the user wants to return to the initial eligibility checker questions they can opt to click on the reset feature and reset the questions. 

#### User Story 7:
*As a user, I want to be provided with contact information for the site owner in case I want to reach out with any queries I have about the site.*
##### Acceptance Criteria:
* Contact Information displayed in footer.
##### Description:
Contact information will be added to the footer. This will contain a name and email for the site owner.

### The Skeleton Plane
#### Wireframes
Wireframes were originally hand sketched designs created to aid planning the website layout. These were then created using Balsamiq. 
Mobile, Tablet, and Desktop wireframes are all available here with images to follow in the dropdown menu below.

Wireframes Layout Images
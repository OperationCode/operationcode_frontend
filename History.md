# Commit Log
[![Build Status](https://travis-ci.org/OperationCode/operationcode_frontend.svg?branch=master)](https://travis-ci.org/OperationCode/operationcode_frontend)

----

### [generated with git-extras](https://github.com/tj/git-extras/blob/master/Readme.md)

### [Example Commands](https://github.com/tj/git-extras/blob/master/Commands.md#examples)

```git changelog -h
```

logs / 2017-08-25
==================

  * added config for sentry Pull Request [#486]
  * Merge pull request #424 from OperationCode/#418
  * #418 added toLowerCase on email input

[@sethbergman](https://github.com/sethbergman)


logs / 2017-08-25
==================

  * added config for sentry
  * deleted analytics folder
  * Merge branch 'master' of https://github.com/OperationCode/operationcode_frontend
  * Merge pull request #424 from OperationCode/#418
  * #418 added toLowerCase on email input

logs / 2017-08-24
=================

  * test
  * Complete
  * Scroll-Top-Target Complete
  * Removed protocol from links - some don't have SSL
  * Fixes Buttons
  * Fixed Scroll Link Buttons
  * CSS magic
  * Added media queries
  * Changes to things!
  * updates
  * Merge pull request #422 from sethbergman/raven
  * moved scripts
  * Merge pull request #421 from OperationCode/sethbergman-patch-1
  * Update .gitignore
  * Merge pull request #420 from OperationCode/kill-drift
  * Delete package-lock.json
  * Fix #346 - Kill Drift
  * Merge pull request #415 from OperationCode/gala-banner-fix
  * Change image font and remove mobile padding
  * Merge pull request #411 from sethbergman/static-images
  * Fix #414 - Update gala banner date
  * added yarn.lock
  * eslint-disable
  * static images
  * host images locally
  * Merge pull request #406 from OperationCode/issue#265backup
  * Login user after signing up, redirect to signup-info with token in place
  * Remove thanks component, add gi bill route back in
  * Adjust patch value to properly send boolean not string of 'identifier' value
  * Add mentor question only for civillian / volunteer path with patch support to backend
  * Adjust select values
  * Add error handling for save and continue function
  * Cherry Picking
  * Remove gi bill link due to linting error
  * Cherry Picking
  * Cherry pick comit
  * Cherry pick commit
  * Adjust state to fit DB
  * Adjust identifier values again, add to patch payload
  * Convert identifier to boolean, adjust control flow to suit new identifier value
  * Fix 'go back' button to fix UX issue
  * Adjust patch endpoint
  * Add generic patch method, write patch request for form, adjust field values
  * Fix identifier for workInfo for easier state management
  * Fix buttons on mobile
  * Cherry Pick Commit
  * Cheryy Pick
  * cherry Pick
  * Cherry Pick
  * Adds back button and handler for next button and redirect on completion
  * Further styling of components
  * Begin styling process for form
  * Refactor interests component to render checkboxes from array values
  * Refactor checkBox handler into a set based implementation to allow only unique values in state
  * Update checkBox component to take name for data aggregation purposes
  * Create a check box form component
  * Add interests component
  * Add dummy case statements for flow testing
  * Remove explicitly defined state to allow update method to dynamically create state fields based on user input
  * Add militaryInfo component and relevant formSelect options in status.js
  * Adjusting formSelect options for schoolInfo for better ux
  * Add update function to schoolInfo component
  * Adjust progress bar implementation and add to child components
  * Add rc-progress bar package for progress bar implementation
  * Add form select options to status, implement props to child components to fill forms on workInfo
  * Create schoolInfo component
  * Generalize bound update funtion so all onChange elements will update state based on their id keys
  * Create workInfo component, add form select options for workInfo
  * Add basic patch function, save and continue button, and create file structure for form components
  * Add route for testing, conquer the passing of state from child component to parent, solidifying my genius for centuries to come
  * Create stateless component Identifier for first step in form
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Cherry Pick Commit
  * Add identifier constants for form select component
  * Merge branch 'master' of https://github.com/OperationCode/operationcode_frontend pull master
  * revalidate the form before rendering
  * Fix Coder Camps link
  * Change Rithm School Logo
  * Move Rithm School logo
  * Add Dev Points Labs logo
  * Add Rithm School
  * merging
  * replace gala link with banner
  * Remove opaque and add TODO
  * Change component to class for state (see full msg)
  * Change eslint-disable method
  * Add styles for drop-down component (above 779px only)
  * Add down arrow icon to drop-down parent
  * Change sideNav render point to 779px
  * Merge branch 'master' into issue#353
  * Cleans up nav dropdown code
  * URL encode payload. Fixes #370
  * Passes props to child via component. Fixes #355
  * Update to team status
  * Fixes nav dropdown styles
  * centered text on teamCard.css 	modified:   src/shared/components/teamCard/teamCard.css
  * fixed css
  * Adds another CTA
  * Removes ticket tailor, adds ejoinme. Fixes #379
  * fix for issue #380
  * removed proptype which tracked onKeyPress on formInput.js
  * removed the onKey prop, revised the formButton.js. Changed prop for button to type=submit. Revised all the other "preventDefault" from "prevenDefault=true" to "preventDefault()". enter now works properly on all forms
  * changed from keydown to onkeypress for the prop to handle the enter for submit
  * added on keyDown props to input component. On login.js, added handleEnter function to catch the enter key and run the established onClick function.
  * use yarn
  * use yarn
  * cleanup
  * Profile page polish and select fix
  * One last fix
  * Fix build
  * Add community folks
  * Add developers
  * Update to team status
  * Adds nav dropdowns
  * Adds Gala nav item and prevents nav contents from overflowing when signed out
  * Fixes tickets display
  * Updates /gala page
  * adds feedback for missing fields
  * added 25px padding to all four sides of logo
  * updated logo to match current
  * Adds sso redirection for logged in users. Fixes #308
  * #77 added disabled prop and loading style to form button
  * #77 disabled button on click
  * #77 added feedback to form handler
  * removed oAuth flow
  * Added sign in with Slack button
  * Fixes alt text
  * Adds discourse section. Fixes #354
  * Fix rendering of /about/financial-statements
  * Centered text <650.
  * Speeds up transition for logo hover.
  * Modified mobile styles for partner logos.
  * More landing page partner image layout changes.
  * Deleted unused logo jpg files.
  * Replaces jpg files with png files, added fade effect to logos, changed some positioning on logos.
  * modified space between links to separate and give breathing room.
  * Fix display
  * Add branding component
  * Create zip of logos
  * Create CODE_OF_CONDUCT.md
  * MacLeod
  * added K MacLeod
  * Added 'report issues' link
  * Resolve #339
  * Fix instructions
  * Updated names.txt
  * Fix componentDidMount
  * Remove line breaks
  * Add challenge route and component
  * Add operationcode_challenge directory
  * Adds setPassword form. Fixes #336
  * Adds reset password scene. Fixes #162
  * Adds links to login page
  * Add link to branding page on /press
  * Fix indentation errors
  * Add /media --> /press redirect
  * Add /press and /about to footer
  * Resize iframes for row display on lg screens
  * Allow collumns to fill section content
  * Rename route from media to press
  * Make section content fit within header lines
  * Reorgnize code into maintainable file structure
  * Add stylesheet for /media
  * Add various photos for /media
  * Add skeleton for /media
  * Add /media to home router
  * Added forking and cloning instructions
  * Added hover styling for page elements
  * Moves sso params outside of user
  * Protects against the api not being deployed
  * Redirects to discourse if SSO params are present. Fixes #302
  * Fix typos
  * Add reference to /gala in /about
  * Add Amazon Smile reference to /about
  * Add Amazon Smile reference to footer
  * Fix extra space before NavItems in SideNav
  * Move drawer directory from shared into sideNav
  * Removed nav directory and moved NavItem component into header directory
  * Remove nav component
  * Changed logout from a button to a NavItem so it will display properly
  * fixed propTypes for Nav
  * Consolidated navs inside of header; deleted navItems from sideNav and topNav
  * Add Coder Camps to partner school section
  * Fix #279 - Contact page design adjustments
  * added scrollToTop component and added it to react router
  * Revert section style change in #284
  * Merge branch 'login-buttons'
  * added package-lock.json from master branch
  * added Raven.config script
  * Merge branch 'login-buttons' of https://github.com/sethbergman/operationcode_frontend into login-buttons
  * Merge branch 'master' of https://github.com/sethbergman/operationcode_frontend into login-buttons
  * used github image url for og:image
  * Add id props to form input components
  * Add status code state variable and check
  * Resolve #269
  * removed extraneous stylesheet from formEmail, formPassword, forZipCode
  * Resolve #75
  * fixes #276
  * Merge branch 'fix-faq' of https://github.com/OperationCode/operationcode_frontend into login-buttons
  * ESLINT is happy
  * Merge branch 'master' of https://github.com/Jonchun/operationcode_frontend into fix-faq
  * added inline eslint rules
  * added div wrappers for the danger zone
  * revert
  * removed eslint rule from question.js
  * Resolve #297
  * Switch to production mode
  * Use relative path
  * Fix unbound var
  * Add the make target
  * Adds deploy script for k8s
  * Update question.js
  * eslint-disable-next-line
  * Fix faq
  * Merge remote-tracking branch 'OperationCode/master'
  * Add redirect for /newgibill
  * Merge remote-tracking branch 'origin/master'
  * Merge pull request #1 from OperationCode/master
  * Merge remote-tracking branch 'OperationCode/master'
  * Removed regex validation on login form
  * Make portraits grayscale on Team page
  * Merge branch 'master' into login-buttons
  * Tags with travis build id. Fixes #285
  * Remove unused code
  * Add boardCard (we should really consolidate this instead)
  * Add images
  * Add board members
  * Adds link to OC backend API endpoint documentation
  * Attempt to fix Heap Analytics
  * Merge branch 'master' into login-buttons
  * Syncs up cookie options. Fixes #270
  * removed changes to cookieHelper.js
  * login link display fixed
  * Adds AuthenticatedRoute to protect pages. Bolsters JWT validation
  * Merge branch 'fix-section-component'
  * Merge branch 'master' into fix-section-component
  * Cleaning up the Team page some
  * Small modifications to contact page copy
  * Fix typo
  * Fix typo
  * Convert <Donate> to newer React component syntax
  * Set all component container divs to 100% width
  * Remove potential for unvalidated props in <Section>
  * Changes menu links to use absolute paths. Fixes #267
  * Redirect back to operationcode.org, not www.
  * Specify host for cookie. Hopefully fixes #266
  * Add Rick to team page
  * Revert "Small changes to make the footer work"
  * Small changes to make the footer work
  * remove privacyPolicy component, update footer link for privacy page, remove yarn from package.json
  * add privacy policy
  * Add Kylems border to faqs, add key to faq renders
  * Adjust header size at 500px breakpoint, committing scope creep sin
  * Re-write markup and css for responsiveness
  * Move each FAQ render into a section for modularity
  * Resize and crop  images
  * Fix styles around usage of ImageCard components on landing
  * Fix styles around usage of ImageCard components in /code_schools
  * Fix ImageCard stylings to be perfectly responsive
  * Refactor history and create <Timeline> component
  * Update FAQ and remove old links
  * Alter fotn sizes in mobile query for schoolCard
  * Add media query to schoolCard to make codeSchools page more responsive
  * Adds mutiple media queries to resize hero Image across different screen sizes
  * Remove unnecessary media queries
  * Remove children styling from sections, remove added padding from section children
  * Move online schools and moocs into separate sections, remove content styling from section children paragraphs
  * Remove paragraph styling from codeSchools and partnerSchools, removing first sentence from codeSchools copy due to redundancy
  * Add fourth card to whatWeDo on front page
  * Fix formatting error
  * Change px to ems
  * Remove span tag from join NavItems function to remove the gap in the menu spacing, re-order rendering of NavItems function to top
  * Reduce menu list padding and reduce hamburger size
  * Add landscape media query to fix hidden menu on landscape
  * Removes about paragraph padding as indicated by @kylemh's TODO in about.css
  * Restructure children of Section component and add responsive styling
  * added a comma
  * Add code school scholarships to front page
  * Merge branch 'about-page'
  * Fix indentations
  * Fix linting error and add TODO notes
  * Merge branch 'about-page' of https://github.com/OperationCode/operationcode_frontend into about-page
  * Add TODO message for future refactoring
  * Resolve #10 - Create About Us page
  * Make footer fully responsive after global stylesheet change
  * Fix index.css to adhere to REM/Media Query usage
  * Add and link route to /about
  * Cut and paste content from team/ to about/
  * Increase font-size of 1rem from 16px to 18px
  * Add TODO message for future refactoring
  * Create and implement QuoteBanner component
  * Convert tabs to spaces
  * Fixes ENV names for ID.me
  * Resolve #10 - Create About Us page
  * Make footer fully responsive after global stylesheet change
  * Fix index.css to adhere to REM/Media Query usage
  * Add and link route to /about
  * Cut and paste content from team/ to about/
  * Increase font-size of 1rem from 16px to 18px
  * Set build vars for production. Fixes #228
  * Adds make target to build site
  * Create and implement QuoteBanner component
  * Convert tabs to spaces
  * Fix desktop and responsive styling to add padding to the bottom of final section component
  * Remove rem-based padding from staffCard component
  * Remove rem-based padding from team component
  * Re-order section components and change background of teamCard to gray for better contrast against white section
  * Add backend API integration to source team members
  * Adjust styling for teamCard component for clearer UI
  * Merge branch 'contact'
  * Merge branch 'master' into contact
  * Add mobile styles
  * Finalize desktop styling and markup for component
  * Add all markup necessary for page
  * Add route for /history url
  * Create history scene and basic history component
  * Add padding between footer logo and other footer aspects
  * Fix #215
  * Fold lines for readability
  * Merge
  * Implement requested changes and condense UI
  * Remove unnecessary comment
  * Deactivate hyphenation when words wrap
  * Update global header font sizes
  * Add react-icons library for FontAwesome usage
  * Remove unnecessary Router Link component
  * Convert tabs to spaces
  * Remove extra lines from contact.css
  * Remove icons and add final styles for contact page
  * Further styling for the contact component
  * Add email and location icon, create contact scene, add contact route, and add basic styles to contact component
  * Resolve #204 - Add Heap Analytics to evaluate Integration
  * Ammend instructions for forking instead of direct contribution
  * Fix scroll anchor references
  * Resolve #195
  * fixed spelling in validation error
  * Remove extra lines from contact.css
  * Remove icons and add final styles for contact page
  * Further styling for the contact component
  * Add email and location icon, create contact scene, add contact route, and add basic styles to contact component
  * Merge branch 'master' into login-enable
  * Clean up branch for merge
  * Add conrad to board, split out team into a different section, include json in team section, and render a teamCard per person
  * Include link buttons with scroll-to-top functionality
  * Render question components for each question section, Add LinkButton and Link
  * Create and import questions.json into the faq scene
  * Create a question component inside FAQ for modularity
  * Style the paragraphs and headline text for FAQ
  * Adds faq folder, files, and route
  * Remove empty component instances
  * Fix padding on staff card and remove strong tags in favor of spans
  * Style staffCard and team.js
  * Build staffCard component, add it to team.js with some styling
  * Add Air Force Reserve and USMC Reserve seals to images and team page
  * Add large header quote to match wireframe
  * Build a team.json file containing every opcode member name and their role
  * Create teamCard component and starter files
  * Add service seals to our front-end image repo and add them to the team page
  * Write the route for team page into home.js
  * Add a team scene and relevant starter files
  * Adds a button that opens Id.Me modal on the /thanks page
  * idme update.  Use official idme troop image.
  * restore redirect in server.js
  * k8s support
  * login stability.
  * updates.
  * id.me update
  * docker updates
  * env variable work.
  * testing config.
  * Added bottom padding to landing h1.
  * ignore backend submodule
  * Docker update
  * Some mocking / testing for id.me
  * fix git attributes file.
  * Id.me Integration.
  * enable login
  * Adds a wildcard route to handle the Id.Me auth redirect
  * Create an Idme component which houses the button and popup logic of the Id.Me Auth flow
  * Adds basic styling to id.Me button
  * Adds a button that opens Id.Me modal on the /thanks page

v1 / 2017-06-24
===============

  * remove backend dir
  * Adds backend target to easily run an instance of the backend. Fixes #174
  * Add licenses
  * Move README to CONTRIBUTING
  * add in code platoon into the components
  * #179 converted png to jpg, updated image path
  * #179 added oracle logo to partners section
  * #179 added oracle logo to assets folder
  * updated image to 200x200 kpg
  * Added Wyncode logo
  * #76 changed font size on mobile devices
  * #76 styled error message into ul on signup page
  * #185 added sentry.io
  * Add RMOTR logo
  * Fixes responsive header background image width
  * Reverting 147705101c851cf6cf35573f926b322b00082fa7. Fixes #176
  * Removed h1 background completely, adjusted padding below h1.
  * Removed box around landing h1. Changed hero button to lowercase. Adjusted background image size for mobile.
  * Merge branch 'master' into issue#135
  * Merge branch 'master' into issue#161
  * Added image for devices with width <760px (not implemented).
  * Changed landing hero image to smaller jpg.
  * Altered family pic to add background noise and a new overlay color.
  * Added textshadow and vertical space for landing headline / join button.
  * Restyled hamburder nav.
  * Issue #69 fixed heading font-size, border-style for mobile < 321px
  * Merge branch 'master' into issue#135
  * Adds a basic gala page. Fixes #44
  * copy yarn.lock before yarn install
  * Styles the 404 page and adds a swtich to router to allow for wildcard routing to 404 page
  * Adds route handling and fourOhFour component for 404 handling
  * Concludes merge
  * Changes all FormButton component instances to on-submit
  * Merge branch 'master' into issue#135
  * Removes a console log statement used during testing
  * Allow users to submit a form with an enter keydown
  * fix signup style on safari.  Fixes #157.
  * Make images wider - fix padding issues in FF.
  * Only check for production mode for GA. Fixes #143
  * Removing bold
  * Converts social media links to <a>. Fixes #148
  * Adds external link check. Fixes #147, fixes #142
  * Removes links to #. Fixes #149
  * Add code-schools to sideNav
  * Add vertical padding for Section component
  * Fix school card styles
  * Center some text
  * Backwards compat
  * Add react scroll to code schools - change imagecard back to space-around.  Fixes #111
  * Various styling fixes.  Fixes #119, #128, #119, #108
  * Removed Trademarks Fixes #139
  * Disable loging in
  * Revert Env changes.
  * Adding trademarks.  fixes #132.
  * Update mentorship copy and style
  * Minor copy changes to membership
  * Make button text larger
  * Additional formatting changes
  * Copy revision to partners section
  * Copy and style changes on mentorship section
  * Adds browserstack badge
  * Implement complete parter section with logos
  * Add partner logos
  * Update labels.json
  * Fix horrible safari rendering fixes #109
  * Merge branch 'code-schools-cooper-kyle'
  * Merge branch 'master' into code-schools-cooper-kyle
  * Make fix addressing @alexspence review
  * Fix some CodeClimate issues
  * Fix typo in AccordianItem.css
  * Various fixes to appease CodeClimate check
  * Add missing code school logos
  * Make all SchoolCard component key attributes unique
  * Make SchoolCard keys random and disable error-handling lint warning
  * Add error-handling to fuzzy search and fix render
  * Fix online school rendering with API
  * Fix tests - pass code schools as a prop to child components
  * Remove schools.json
  * Reorganize fetches to stop breaking lifecycle
  * update
  * Push progress for Spence
  * Add key and alt to SchoolCards
  * Create ISSUE_TEMPLATE.md
  * Create PULL_REQUEST_TEMPLATE.md
  * Complete Schools By State section
  * Push progress for Evan - SchoolCard rendering now
  * Push progress for Evan
  * Add styles to paragraph text across the code schools page
  * Adjust the search function to return schools again
  * Break fuzzy search - bugs in log
  * Use API for json endpoint - bug in log
  * Use API for json endpoint
  * Near-complete fix of fuzzy search - bug in log
  * Add "stateCode": "stateName" JSON for fuzzy search
  * Add image alt's to all code school sections and add key's to all mappings
  * Add functionality that clears fuzzy search results
  * Implement fuzzy search and fix flex display of results
  * Fix typo in Massachussetts
  * Add a working search function to the stateApproved seciton
  * Refactor the search function for easier reading
  * Build out the search function for stateApproved component, currently non-funcitoning
  * Add proxy support for HTTP->HTTPs redirect (#73)
  * Modify school card and section css
  * Remove TODO comment - feature implemented
  * Fix format issues with school cards
  * Decrease section gutter size
  * Make minor style and content adjustments
  * Add new section for online schools and MOOCs
  * Make minor style and content adjustments
  * Make minor style and content adjustments
  * Remove unnecessary usage of React Router
  * Remove unnecessary usage of React Router
  * Resize images on landing to fix format issues
  * Resize images on landing to fix format issues
  * Change StateSortedSchools section to white
  * Adjust SchoolCard component to dynamically render punctuation marks
  * Add Fullstack Academy as partnered school
  * Fix VA Approved schools to show according to updated API
  * Remove unnecessary comma from school name
  * Convert strings of bools to bools
  * Remove extra commas in schools.json
  * Remove extra comma in schools.json
  * Reformat API again
  * Update data in API
  * Make NSS image smaller within canvas
  * Add missing logos and make folder for MOOC logos
  * Add form input event handlers and state handlers to stateSortedSchools
  * Adding partnership school cards.
  * Adding styling for school name links.
  * Adding link props to schoolCards.
  * Add logo prop to schoolCard component and first draft stylings for their rendering
  * Adding link props to schoolCards.
  * Add Fullstack Academy logo
  * Merge branch 'code-schools-cooper-kyle' of https://github.com/OperationCode/operationcode_frontend into code-schools-cooper-kyle
  * Remove MakerSquare (now Hack Reactor) and add images to schools.json
  * Adding ternary operators for the gi, committment, and hardware props.
  * Committing
  * Add TODO comment for implementing id on section headers for scroll anchors
  * Temporary endpoint edit to GH repo internal json
  * Adding props to schoolCards via approvedSchools section.
  * Adding props to schoolCards via approvedSchools section.
  * Remove punctuation from internal json and use temporary endpoint
  * Change state acronyms to state names in schools.json
  * Change schoolCard component size
  * Change format of schoolcards
  * Bring in normalize.css and fix typo in local schools.json
  * Add code school logos
  * Adjusting style names
  * Change card flexgrid to space-around from space-between
  * Use {styles.className} for stylesheet attachments
  * Variable names and reformating
  * Adding promise structure and card rendering for approvedSchools component.
  * merging
  * adjusting header.
  * Add TODO comment for fixing scroll anchors on top buttons
  * Reorganize code-schools progress into standard file structure
  * Add 2 TODO comments to FormInput component
  * Reformat, add newline, and change variable names
  * Remove note/todo comments
  * Fix JSON - Needs feedback
  * Center notes to school reps
  * Reduce unnecessary CSS
  * Fix section.css with reset header margins in mind
  * Prevent user agent styles from affecting header margins
  * Add structure of code-schools route. Ready for card grid
  * Reformat stylesheet
  * Add minimum height to Section component
  * Fix code-schools route in topNav
  * Make Route components formatted in a uniform manner
  * Fix issue with heading lines not centering vertically with text
  * Fix issue with section's bottom margins being funky
  * Add newline to end of file to appease lord linter
  * Merge with code-schools branch
  * Adding Section and markup for code_schools page.
  * Adding route for code_schools to home, adding code_schools.js and styles sheet with successful url test.
  * Adding schoolCard component in shared folder for use in Code Schools.
  * Added Apex logo to partners section
  * forward http requests to https
  * test fix
  * remove some console statements from build process.
  * Move react table css to global instead of the public folder.
  * Update CRA Scripts.  Add ability to have global css bypassing css modules.
  * Parse process.env.PORT as int so conditional works correctly
  * Fixes logic error in the port detection conditional
  * Add new images to moreInformation.js
  * Merge branch 'master' into master
  * Redirect HTTP to HTTPS (#73)
  * Implements financial statements section (#71)
  * PR feedback fixes
  * redirect login to dashboard
  * remove cookie relience from Home
  * Clear console errors
  * redirect user from login based on mentor status
  * create cookie helpers
  * Pull auth route logic into Home
  * Clean up modal
  * Update LICENSE
  * Add session logic to navigation
  * Allow user to self identify as mentor on signup
  * normalize all modals
  * add squad modal
  * polish styling for squads new
  * Fix the invalid proptype warning from Drawer component
  * complete post request for new squads
  * update dashboard links
  * Fix mentor details modal from 404 on close
  * Open mentor details in a modal over the table
  * begin dashboard
  * Updated new squad css
  * Created the new squad form
  * Open mentor show when clicking on mentor in table
  * Add mentor show page
  * add request update modal
  * add post to new squads form
  * Sign-up page styling
  * add mentors table
  * add fields to new squads form
  * Refactor 🚜 part 2: Move all shared logic for index tables to indextable
  * Refactor 🚜 Part 1: create index table component
  * Add squad table
  * add squads route
  * add routing for new squads form
  * add squads new files
  * sign-in styling
  * save login response to session cookie
  * clean up requests
  * add MentorRequestsTable component and route
  * Set auth header for GET /mentors and GET /services
  * 💄
  * Make authorized request to add a request
  * fix mentor changing
  * Merge branch 'mentor-request' of github.com:rubyforgood/operationcode_frontend into mentor-request
  * add submit button
  * add error message on failed request
  * Create formSelect component, clean up mentor request form
  * Populate service dropdown using services from backend
  * Add API GET requests to mentee req form
  * add styling to form
  * build out form
  * add service type drop down for mentor request
  * mentor request form WIP
  * Add more session data to cookies
  * Update auth cookie method
  * add universal cookies
  * Handle user signing and redirect
  * Work in progress - code schools
  * remove password confirmation.  wrap users call in user object.
  * send password and password_confirm to backend on sign up.
  * remove password confirmation.  wrap users call in user object.
  * send password and password_confirm to backend on sign up.
  * Merge branch 'code-schools' of https://github.com/OperationCode/operationcode_frontend into code-schools
  * In-Progress Push
  * Add character espcapes for quotes within JSON (avoid errors)
  * Add broken, partial implementation of code schools route
  * Edit TODO to reflect edited file
  * Add note on TODO for handling quotes via API
  * In-Progress Push
  * Add character espcapes for quotes within JSON (avoid errors)
  * Remove white border from burger icon
  * Adjust bg-image size/positioning when < 600px screenwidth
  * Set fixed width on Landing component container
  * Updated docker to default to production config.
  * Remove some consoles fix config.
  * Sign up page and component.  Fixes #35 and #27.
  * work on sign up component
  * Progress on form components.
  * Separate form controls into different components
  * Add FormPassword component (similar to earlier DataFormItem component)
  * Update eslint rules
  * Add CSS styling for dataFormItem and Form components
  * Added storybook.  Fixed bug with bgimage render
  * Set signup page form inputs to type email/number for mobilke
  * Add placeholder prop to dataFormItem component
  * Work in progress - don't display bg image sometimes.
  * Add broken, partial implementation of code schools route
  * Edit TODO to reflect edited file
  * Add note on TODO for handling quotes via API
  * Add onClick prop callback to NavItem component
  * Add CSS styles to SideNav close
  * Switch SideNav component to stateless /w onClose handler
  * Add click handler to Burger component
  * Add SideNav styling
  * Rework SideNav component to use Drawer component
  * Remove unused styles
  * Create shared Drawer component w/ visibility set by parent
  * Fix missing semicolon
  * Implement optional button-link functionality for ImageCards
  * Hide visibility of footer links to unimplemented routes
  * Resize 'Join Us' section image - one more time
  * Refactor hidden header nav links
  * Refactor social media link implementation
  * Resize 'Join Us' section image
  * Disable and hide header links
  * Add links to social media icons
  * Make partners white bg and fix indentation
  * Fix indentation
  * Add top/bottom padding for neatness
  * Temporary removal of button-links on image cards
  * Increase 'Join Us' image size
  * Move drift to public/index.html
  * Adding drift
  * Add space between words
  * Add prompt for yarn run build to instruct on hosting and/or testing
  * Eliminate irrelevant prompts from create-react-app remnants
  * Fixes #58 - Remove --production flag
  * Fixes #58 - Remove --silent flag
  * Fixes #58
  * lol merges
  * Navigate to Donorbox page when nav item clicked
  * Change button link to point to Donorbox page
  * some tweaks to the copy
  * Work on Landing Page. Fixes #9
  * membership updates.
  * Missed some files.
  * Fix root source for prod.
  * Work on landing page #9
  * Landing Page checkpoint.
  * Add eslint command - yarn lint
  * Turns tests back on
  * Fixes prod build paths
  * Quiets npm install
  * Checks to see if were in docker instead of CI
  * Builds/publishes docker container in travis
  * Comment out broken test
  * Adds travis config
  * Jest test fixes.
  * hamburger icon added to header for mobilization
  * header stuff fixed as well as some of the desktop stuff
  * Force LF on text files in git, allow LF or CRLF in checked out files.
  * Normalize Line Endings.
  * Revert "Turn off ESLint line-break style rule"
  * Adjust Social Media Item & Footer block padding
  * Add responsive styles at small(est) screen widths
  * Adjust responsive styles for footer
  * Add overflow: hidden to prevent scrolling to right on mobile
  * Turn off ESLint line-break style rule
  * Responsive Footer work.
  * Change default port to 4000
  * Added Airbnb eslint config - lax some of the rules.  Some framework for Login.  VS Code launch and recommended extensnions
  * Readme work - added getting started and a few other updates.
  * Updating docker files.
  * Doc Update
  * Doc Update
  * Another doc update.
  * Updating docs and build scripts.
  * Support all the fancy favicon types.
  * Bigger nav fonts, meta tags.
  * Moving some things around - Work on Responsiveness - Smaller Background Image - GA For prod.
  * Merge pull request #22 from alexspence/master
  * Use single quote instead of backtick in webpack config.
  * Adding .env file.
  * Docker and footer work.
  * Update layout - converting to css modules.
  * Ejected.
  * Checkpoint - about to eject.
  * Update README.md
  * Update README.md
  * Update .gitignore and add MIT License
  * Create README.md
  * Create-React-App Initial Push
  * Remove files for clean create-react-app install
  * Update dependencies
  * add labels
  * Merge pull request #2 from Cooperbuilt/master
  * Adding color shades to scss partial
  * Adding color shades to scss colors partial
  * Update _mixins.scss
  * Adding Dist folders, fixing Index
  * Adding file structure, scss partials, and logos
  * Add Yarn package
  * Initial commit

1 / 2017-08-25
==============

  * added config for sentry
  * deleted analytics folder
  * Merge branch 'master' of https://github.com/OperationCode/operationcode_frontend
  * Merge pull request #424 from OperationCode/#418
  * #418 added toLowerCase on email input

1.0.2 / 2017-08-25
==================

  * added config for sentry
  * deleted analytics folder
  * Merge branch 'master' of https://github.com/OperationCode/operationcode_frontend
  * Merge pull request #424 from OperationCode/#418
  * #418 added toLowerCase on email input

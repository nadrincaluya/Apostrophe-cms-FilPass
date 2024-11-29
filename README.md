Front-End Guide for ApostropheCMS Project
1. Project Overview
This document provides guidelines for front-end developers working on the ApostropheCMS project. It covers project setup, features, and customizations implemented, along with instructions for running and developing the application.
Please read the Apostrophe documentation first, specially the Getting Started section to have an overview of the system(https://docs.apostrophecms.org/guide/introduction.html ). After the reading the document you can search the document about the styling and design of apostrophe.No need to understand all the concepts just focus on the styling.
Search for webpack in apostrophecms if needed for more complicated design structures.

2. Project Setup
Prerequisites
Node.js: Version 18 or higher.
npm: Ensure npm is installed alongside Node.js.
Git: Installed for cloning the Bitbucket repository.
MongoDB: This is requirement for apostrophe app, have an your own account, set up a mongoDB cluster and get the connection string
ApostropheCMS: Familiarity with basic concepts is recommended.
Installation Steps
Clone the repository from Bitbucket:
git clone <repository-url> 
cd <project-folder>
Install dependencies:
npm install
Install nvm:
nvm install 18
nvm use 18
MongoDB connection:
Login to or create a MongoDB atlas account and get the connection string then use this code:
export APOS_MONGODB_URI = “mongodb+srv://<username>:<password>@example.abcde.mongodb.net/test”
Run the application
	npm run dev
Or
	APOS_DEV=1 npm run dev
Note: Its recommended use APOS_DEV=1 npm run dev so that the whole apostrophe assets are built correctly.

3. Project Features
Widgets
Core Widgets
Includes Apostrophe's image, rich-text, and video widgets.
These are the apostrophe default widgets and more information in the apostrophe documentation on this.
Don’t have html or scss styling they are default 
Can theoretically be change in the node_modules but not recommended because if the node.j or anything is updated the change will revert back to the original
To change it needs to be overridden, please communicate with the developer if you want to override a core widget

Custom Widgets
Button Widget: Customizable button with styles.
HTML File : modules/button-widget/widget.html
SCSS File: modules/asset/ui/src/_button.scss

Table Widget: Enables table creation with custom rows and columns.
HTML File : modules/table-widget/widget.html
SCSS File: modules/asset/ui/src/_table-widget.scss


Navigation Widget: Dynamic navigation links.
HTML File : modules/navigation-widget/widget.html
SCSS File: modules/asset/ui/src/_navigation.scss

Form Widget: Custom forms with adjustable fields(recipients and emailing is still in development).
HTML File : modules/form-widget/widget.html
SCSS File: N/A

Sliding Banner/ Image Widget: Rotating images with sliding animation.(no styling animation yet, basically a image-widget with no sliding)
HTML File : modules/sliding-widget/widget.html
SCSS File: modules/asset/ui/src/_image-overlay.scss

Banner/Image Widget
Description: Displays a banner image with optional overlay button and alignment options.
HTML File : modules/image-widget/widget.html
SCSS File: modules/asset/ui/src/_image-overlay.scss



Rich Text Enhancements
Custom Fonts: Includes a selection of fonts.
Color Options: Multiple text color choices.
Page Types
Default Page: Standard page template.
Home Page: Homepage of the project and the website.
Calendar Page: Lists events with navigation between months (this is for FPAS).
Events Page: Displays event detail.
Publications Page:  Displays publications pieces
Media Page: Focuses on media pieces.
Export and Import Feature
Purpose
The Export and Import feature allows users to transfer content, such as pieces or widgets, between environments or projects. This is particularly useful for backups, migrations, or bulk content updates.

How Export Works
Triggering Export
Admin users can initiate an export from the admin interface or through a custom route if configured.
Content is serialized into a downloadable file format (commonly JSON or CSV).
What Gets Exported
Selected pieces (e.g., events, media, publications).
Widgets or specific page content, depending on the implementation.
Associated data, such as images or file attachments, may be included or linked.
How Import Works
Uploading the File
Users upload the exported file (e.g., JSON or CSV) through an admin interface or an import endpoint.
File validation ensures that the format and data structure are correct.


4. Styling Guidelines
General
HTML: All of the widgets/modules should have an html in them e.g. image-widget/widget.html
Custom CSS Styling: All custom SCSS files are in styles/.
Bootstrap Styling: Some widgets don’t have scss for them but they have bootstrap on them


5. Fragments
	These are static files that are added
Header
File: views/fragments/header.html
Includes site navigation and logo.
Footer
File: views/fragments/footer.html
Contains social media links and contact information.


6. Best Practices
Use SCSS variables for consistent colors and spacing.
Follow Bootstrap conventions for responsive design.
7. Layout.html:
Located in views/layout.html
Template Inheritance: The layout.html file typically extends data.outerLayout, which is provided by ApostropheCMS core. This allows you to customize the overall layout while still leveraging the built-in functionality.

{% extends data.outerLayout %}
Block Structure: The layout template defines blocks that can be overridden or extended by child templates. Common blocks include:
beforeMain
main
afterMain
Common Elements: It usually contains elements that are consistent across your site, such as:
-Header
-Navigation
-Footer
-Global scripts and stylesheets
Customization: You can customize the layout by adding your own HTML, Nunjucks logic, and Apostrophe-specific tags within these blocks.

Here's a simplified example of what a layout.html might look like:
{% extends data.outerLayout %}

{% block beforeMain %}
  <header>
    <nav>
      {# Your navigation code here #}
    </nav>
  </header>
{% endblock %}

{% block main %}
  {# This block is typically overridden by page templates #}
{% endblock %}

{% block afterMain %}
  <footer>
    {# Your footer content here #}
  </footer>
{% endblock %}



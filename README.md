# ctf-editor
Overview


## The purpose of this project:

Quickly accessing and editing important documents is very important for highly collaborative teams. 
As users start to need more and more browser tabs, even powerful computers quickly slow down. 
There is a real opportunity to reduce the clicks and time needed to access, edit and share documents when compared to today’s web-based alternatives (ie Google Docs). 



## Some key features:

Users’ documents support rich-text formatting (bold text, italics, alignment, etc.)
Users use document-specific URLs to access and modify their documents. 
Users can send these document-specific URLs to people they would like to collaborate on documents with. 
When multiple users are editing the same document, other users can see what edits are being made by which users in real-time. 
All documents are persistent in a database. 
Finally, users can see version histories of documents that they are collaborators on. In other words, they can navigate to past versions of documents.

## Basic components of the project:

Editor View
Document Portal
Revision History View
Login Page
Registration Page

## Main Technologies Utilized:

This application is able to format text, support multiple users, enable document persistence, and allow for real-time collaboration. 
We managed the state of documents by using React. 
We used draftjs to enable easier rich-text editing. 
We leveraged mongodb to persist our documents to a database.
we implemented real-time editing feature by using websockets.



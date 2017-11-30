# Agile Editor


## The purpose of this project:

Quickly accessing and editing important documents is very important for highly collaborative teams. 
As users start to need more and more browser tabs, even powerful computers quickly slow down. 
There is a real opportunity to reduce the clicks and time needed to access, edit and share documents when compared to today’s web-based alternatives (ie Google Docs). 



## Some key features:

1. Users’ documents support rich-text formatting (bold text, italics, alignment, etc.)
1. Users use document-specific URLs to access and modify their documents. 
1. Users can send these document-specific URLs to people they would like to collaborate on documents with. 
1. When multiple users are editing the same document, other users can see what edits are being made by which users in real-time. 
1. Finally, users can see version histories of documents that they are collaborators on. In other words, they can navigate to past versions of documents.

## Main Technologies Utilized:

This application is able to format text, support multiple users, enable document persistence, and allow for real-time collaboration. 
We managed the state of documents by using React and used draftjs to enable easier rich-text editing. 
We chose mongodb to persist our documents to a database and implemented real-time editing feature by using websockets.



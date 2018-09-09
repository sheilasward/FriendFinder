# FriendFinder
This full-stack application will allow users to complete a 10-question survey and then compare their answers with the answers of others that have already taken the survey.  The person who most closely compares with the current user is displayed at the end.

There are two html pages, home.html (the root directory of FriendFinder) and survey.html (which is found at "/survey").  

Both pages have a link to API Friends List (/api/friends), which lists an array of all the objects (each object is a "friend").  The original friends are kept in data/friends.js, and during a run of the server, other friends are added as surveys are taken; however, the new friends do not persist after the server is closed.

Both pages also have a link to my github page for FriendFinder; however when this link is clicked, there are some errors generated in the console log.  It does display the github page, though.

The instructions were to include a "Link to Photo Image (Required)".  This part does not seem to work well, though. I think maybe an upload would work better.
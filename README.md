Music Player Application
How to start the application
download all the files. If any files are mising go to This Repository and select the correct branch.

set the directory from your workspace to the Music_Player folder. Now run npm run start in one terminal and npm server in another. This will start the front and back end respectivly.

Background
Rebmem Engineering has provided electronic goods for several years to third parties and are now looking to expand their offering to supply interactive goods.
They produce portable storage devices and have worked on a new device that will allow the storage and playback of music.
They would like a simple interface built to interact with the device to allow the continuation of development. (Interaction with the firmware will be discussed and implemented at phase two.)
The client is a large organisation and if this goes well could mean a large contract.
Your role will be to take on the development of the interface ensuring that you meet the first phase requirements; any additional elements you can include will help but the deadline is close.
The hardware is still being tested so changes will be required as it is developed. Ensure that you fully document each step to allow us to carry out any changes later.
Requirements
The Music player must:

Allow music playback.
Allow music playback when the device becomes idle. The device will automatically switch to idle mode to save power if no user interaction is recorded over a 30 second period.
Have a random shuffle function.
Have a search option for audio files within a media database.
List display options by song track or album.
Allow for a Creation of a song play list.
Have user control over playback
Diary Whilst on the Project
Day 1
created the wireframes using Draw.io
attempted to make UML diagrams but couldnt quite figure out the process in my head or via diagrams.
Decided to make a start on some things that would be needed regardless
created a repo and cloned it down.
downloaded an installer for MySql but had issues getting it to run or even work
Continued to work with mysql but had difficulty with the syntax of mysql and the fact that ‘ and ` look very similar. Put this down to rustyness
had some issues when it came to react and out of touch on how to start and intergrate it with my application
Day 2
PC had many issues when starting today and lasted until 10:30am
Worked to get the front end to do mysql requests but learned that it wasnt able to on the same endpoint.
split the back and front end running on different endpoints
able to send requests to the back end via postman to getSongs
able to get songs into a dynamic table on the front endpoint
Day 3
Mysql server stopped unexpendently and wouldnt start by normal commands so had to use administrator via powershell to start via:net start MySQL80.
Manged to get albums to work
Day 4
got playlist to work, showing songs, creating and deleting. However there is a loading issue for the items and a window.location.reload will create more issues
due to props errors shuffle took longer than thought
Day 5
Got shuffle to work correctly
got the time to work correctly
Wrote the readme and coppied the diary into it
Worked on a few tests
Plans for work that fell through due to time
focused on the functuionality as key so would like to “beautify the application”
get a bar of progress that the user can then manipulate
More extensive test coverage
Use of sonarqube
Place this on amazons ec2 instance
Load songs onto the application when find a suitable tool for mp3 downloads
Commenting of functions so that i can come back to it later
May Work on the application after sending it off to a point where I am happy and will update the readme.
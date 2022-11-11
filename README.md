# PairJam

![image](https://user-images.githubusercontent.com/22334382/200141746-190ed365-518e-43b7-8a53-5c2a08ba9e15.png)

Input your jams, and get paired with other musicians who know the same music. Start off rocking out to familiar songs. Create set lists. Make friends. PairJam!

# How I made it?
 **Tech used:** HTML, CSS, JavaScript, EJS, Materialize, Express, MongoDB, Passport Auth
 
 I wanted something to help me and my friends know what songs we could show up and start jamming without the fuss of figuring out who can play what.
 
 I started with a Figma design to get me going. Once some pages were ready to populate with data, I completed the essential back-end stuff. Currently, everything is user input. Users input songs, and create bands that members can be added too. Bands will display the songs that all band members can play. This is the first goal of PairJam, and the core idea that sparked the project. With the backend done, some styling was added with a strong commitment to having it mobile ready. None of us are lugging our computer to a gig.

# Optomization Ideas

- Import songs with API, to keep artist and song names consistant, and to ID things better. 
- I would love to make this app much more accessable for all levels of musicians by allowing users to define their skill level at a particular tune.
- Goodbye Heroku! Looking for a new place to host.

# Lessons Learned

Pulling song data from a user while only having a band ID is a pain. BandID --> gets UserID --> gets SongID. I spent hours figuing out how to make this work and discovered many of Express's inner workings. Worth it!

I kept with a MVC architecture from day one, and grew a huge appreciation for how scalable, maintainable, and easy to exapand it was. I love me some organization!

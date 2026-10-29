# Lab 2: Web Scrapping, Search, and Accessible UI
This is a simple program demonstrating how to maintain state across stateless HTTP requests using Express.js and the cookie-parser middleware. 
It tracks the number of times a client visits the /visit-count endpoint using a browser cookie. 


## Date created: October 27, 2026
## Last modification date: October  29, 2026
* Timberlea:    https://web.cs.dal.ca/~wawembi/csci3172/activities/L12/visit-count.js
* GitLab:       https://git.cs.dal.ca/wawembi/csci3172/-/tree/main/activities/L12?ref_type=heads 


## Cookie Implementation
app.use(cookieParser());
app.get('/visit-count', (req, res) => {
    let visits = parseInt(req.cookies.visits, 10) || 0;
    visits++;
    res.cookie('visits', visits, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true
    });
    res.send(`You have visited this page ${visits} time(s).`);
});

* State is preserved by storing the visit count in a browser cookie, which the browser sends with subsequent HTTP requests so the server can retrieve and increment the counter.


## Technologies Used
Node.js
Express.js
cookie-parser


const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 3000;

// Enable cookie parsing
app.use(cookieParser());

app.get('/visit-count', (req, res) => {
    let visits = parseInt(req.cookies.visits, 10) || 0;
    visits++;
    // Sending the updated count back as a cookie
    res.cookie('visits', visits, {
        maxAge: 24 * 60 * 60 * 1000, 
        httpOnly: true
    });

    res.send(`You have visited this page ${visits} time(s).`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

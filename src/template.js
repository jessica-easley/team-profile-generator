function generateHTML(myTeam) {
    let html = '
    <!DOCTYPE html>
    <html>
        <head>
            <title>My Team</title>
        </head>
        <div class="header">
            My Team
        </div>
        <body>
<div class="boxes">
    <div class="manager-box"></div>
    <div class="intern-box"></div>
    <div class="engineer-box"></div>
</div>
        </body>
    </html>
    ';
}

module.exports = generateHTML;
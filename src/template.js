const genTeam = team => {
 
    // Team cards - manager
const newManager = manager => {
    return `
    <div class="team-card">
    <div class="card-header">
    <h3 class="card-title">${manager.getName()}</h3>
    <h4 class="card-title"><i class="fa-light fa-mug-hot mr-2"></i>${manager.getRole()}</h4>
    </div>
    <div class="card-body">
    <ul class="employee-list">
        <li class="employee-list-item">ID: ${manager.getId()}</li>
        <li class="employee-list-item">Email Address: ${manager.getEmail()}</li>
        <li class="employee-list-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>
    `;
};

//  Intern Card
const newIntern = (intern) => {
    return `
    <div class="team-card">
    <div class="card-header">
    <h3 class="card-title">${intern.getName()}</h3>
    <h4 class="card-title"><i class="fa-light fa-mug-hot mr-2"></i>${intern.getRole()}</h4>
    </div>
    <div class="card-body">
    <ul class="employee-list">
        <li class="employee-list-item">ID: ${intern.getId()}</li>
        <li class="employee-list-item">Email Address: ${intern.getEmail()}</li>
        <li class="employee-list-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
        </div>
    `;
};
//  Engineer Card
const newEngineer = (engineer) => {
    return `
    <div class="team-card">
    <div class="card-header">
    <h3 class="card-title">${engineer.getName()}</h3>
    <h4 class="card-title"><i class="fa-light fa-mug-hot mr-2"></i>${engineer.getRole()}</h4>
    </div>
    <div class="card-body">
    <ul class="employee-list">
        <li class="employee-list-item">ID: ${engineer.getId()}</li>
        <li class="employee-list-item">Email Address: ${engineer.getEmail()}</li>
        <li class="employee-list-item">GitHub: ${engineer.getGithub()}</li>
        </ul>
        </div>
        </div>
    `;
};

const html = [];

html.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => newManager(manager))
);

html.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => newIntern(intern))
    .join("")
);

html.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => newEngineer(engineer))
    .join("")
);

return html.join("");

}

// function generateHTML(myTeam) => {
    module.exports = team => {

    return `
    <!DOCTYPE html>
    <html>
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
    crossorigin="anonymous"
  />
        <link rel="stylesheet" href="./dist/style.css" />
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
        <body>
        <div class="container">
        <div class="row">
        <div class="col-md-12 myTeam">
        <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
        <div class="row">
    <div class="col-md-12 team cards content-center">
    ${genTeam(team)}
    </div>
</div>
    </body>
    </html>
    `;
};

// module.exports = generateHTML;
// Renders manager information
function renderManager(manager) {
    return `    <div class="card manager flex-container">
            <div class="card-top">
                <h2>${manager.getName()}</h2>
                <h3><i class="fas fa-user-tie"></i> ${manager.getRole()}</h3>
            </div>
            <div class="card-bottom">
                <p>
                <i class="far fa-id-card"></i> ID #${manager.getId()}<br>
                <i class="far fa-envelope"></i> <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a><br>
                <i class="far fa-building"></i> Office #${manager.officeNumber}
                </p>
            </div>
        </div>
`
}

// Renders engineer information
function renderEngineer(engineer) {
    return `        <div class="card engineer flex-container">
            <div class="card-top">
                <h2>${engineer.getName()}</h2>
                <h3><i class="fas fa-laptop-code"></i> ${engineer.getRole()}</h3>
            </div>
            <div class="card-bottom">
                <p>
                    <i class="far fa-id-card"></i> ID #${engineer.getId()}<br>
                    <i class="far fa-envelope"></i> <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a><br>            
                    <i class="fab fa-github"></i> <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a>
                </p>
            </div>
        </div>
`
}

// Renders intern information
function renderIntern(intern) {
    return `        <div class="card intern flex-container">
            <div class="card-top">
                <h2>${intern.getName()}</h2>
                <h3><i class="fas fa-user-graduate"></i> ${intern.getRole()}</h3>
            </div>
            <div class="card-bottom">
                <p>
                    <i class="far fa-id-card"></i> ID #${intern.getId()}<br>
                    <i class="far fa-envelope"></i> <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a><br>    
                    <i class="fas fa-graduation-cap"></i> ${intern.getSchool()}        
                </p>
            </div>
        </div>
`
}

// Renders whole team 
function renderTeam(arr) {
    let html = "";
    for (var i = 0; i < arr[0].length; i++) {
        html += renderManager(arr[0][i]);
    }

    // Sorts engineer array (within team array) by ID (ascending)
    arr[1].sort(function(a, b) {
        return a.id - b.id;
    })

    for (var i = 0; i < arr[1].length; i++) {
        html += renderEngineer(arr[1][i]);
    }

    // Sorts intern array (within team array) by ID (ascending)
    arr[2].sort(function(a, b) {
        return a.id - b.id;
    })

    for (var i = 0; i < arr[2].length; i++) {
        html += renderIntern(arr[2][i]);
    }
    return html;
}

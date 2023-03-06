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
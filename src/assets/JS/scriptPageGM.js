function mostrarMenu() {
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == "none") {
        menu.style.display = 'flex'
    } else {
        menu.style.display = 'none'
    }
}
function cadastrar() {
    let email = document.getElementById("campo-email").value

    
    console.log(email)
}
function cap(){
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")

    console.log(email)
    console.log(senha)

}
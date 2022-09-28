//User&password

//const enterUser = document.querySelector('.principal-form.Usuari')
//const enterPass = document.querySelector('.principal-form.Clau')

/*function enterAdmin() {
    if (document.form.usuari.value == 'Admin.Eva' && document.form.clau.value == 'M@st0d0nt3') {
        window.location = "manwebsss.html"
    } else {
        alert("L'usuari i/o la contrasenya són incorrectes. Si us plau, intenteu novament.")
    }

}*/

const ingLogin = document.querySelector('.form.login.value')
const ingPass = document.querySelector('.form.password.value')

function go() {
    if (ingLogin == 'admin' && ingPass == 'acb1') {
        window.location.href = "manwebsss.html"
    } else {
        alert("L'usuari i/o la contrasenya són incorrectes. Si us plau, intenteu novament.")
    }
}
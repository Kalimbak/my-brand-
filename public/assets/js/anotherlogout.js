function logout(){
 
    localStorage.removeItem('token')
    localStorage.removeItem('role')

  
    window.location.href = '../../pages/login.html'
  }
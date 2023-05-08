export const logAuthStatus=(isLogged)=>{
  if(isLogged){
    console.log("user is logged in")
  }
  else{
    console.log("user not logged")
  }
}

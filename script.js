function toggle(a){
  if(a.checkbox.checked==true){
    document.documentElement.setAttribute('data-theme', 'dark')
  }
  else if(a.checkbox.checked==false){
    document.documentElement.setAttribute('data-theme', 'light')
  }
};

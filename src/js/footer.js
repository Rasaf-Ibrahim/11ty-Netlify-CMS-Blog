
  function  hello () {

    let date = new window.Date();   
    
    let year = date.getFullYear();
    
    return document.querySelector('.js_footer').innerHTML = year;
    
    }
    
    hello();
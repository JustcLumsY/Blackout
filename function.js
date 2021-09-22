function myFunction(imgs) 
  {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }

// // Model
//     let errorMessage = null;
//     let username = null;
//     let password = 'null';

// // View
//     showLoginForm();
//     function showLoginForm()
//     {
//       document.getElementById('app').innerHTML = `
//         <div id="error" style="color: red">${errorMessage || ''}</div>
//         <input placeholder="Username"
//             id="username" 
//             type="txt"
//             oninput="username = this.value"
//             value="${username || ''}" /><br />
//         <input placeholder="Password"
//             id="password" 
//             type="password"
//             oninput="password = this.value"
//              value="${password || ''}" /><br />
//         <button onclick="logIn()">Log in</button>
//       `;
//     }

//     // Controller
//     function logIn() 
//     {
//       if (username === 'john' && password === 'hei') 
//     }
//       else 
//       {
//         errorMessage = 'Wrong username or password';
//         showLoginForm();
//       }
    
    
  
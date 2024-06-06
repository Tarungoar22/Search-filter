
  function searchfun() {
 
    let  inputt = document.getElementById("inputdata").value.toUpperCase();
    const table = document.getElementById("mytable");
    const tr = table.getElementsByTagName("tr");
    for( let i = 0; i < tr.length; i++){
       let td = tr[i].getElementsByTagName("td")[0]
       if(td){
          let tdvalu = td.innerHTML.toUpperCase() || td.innerText.toUpperCase();
          if( tdvalu.indexOf(inputt) > -1 ) {
            tr[i].style.display ="";
          }else {
            tr[i].style.display ="none"
          }
       }
    }
  }

   //1. all td search
   // 2. sorting
  // function searchfun() {
  //   let inputt = document.getElementById("inputdata").value.toUpperCase();
  //   const table = document.getElementById("mytable");
  //   const tr = table.getElementsByTagName("tr");
  //   for (let i = 0; i < tr.length; i++) {
  //     let td1 = tr[i].getElementsByTagName("td")[0];
  //     let td2 = tr[i].getElementsByTagName("td")[1];
  //     let td3 = tr[i].getElementsByTagName("td")[2];
  //     if (td1 && td2 && td3) {
  //       let tdvalu = td1.innerHTML.toUpperCase() + " " + td2.innerHTML.toUpperCase() + " " + td3.innerHTML.toUpperCase();
  //       if (tdvalu.indexOf(inputt) > -1) {
  //         tr[i].style.display = "";
  //       } else {
  //         tr[i].style.display = "none";
  //       }
  //     }
  //   }
  // }
  
  
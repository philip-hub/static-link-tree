const urlParams = new URLSearchParams(window.location.search);
      let des = urlParams.get('des');
      
      if(des != null){
        des = des.replace(/%20/g, " ")
      }
      //alert(des)
     
      console.log(des);
      // s

      let image = urlParams.get('image')
      let link = urlParams.get('link')
      let link2 = urlParams.get('link2')
      let link3 = urlParams.get('link3')
      let link4 = urlParams.get('link4')
      
      //alert(link)
      // black      
      let name = urlParams.get('name')
      
      if(name != null){
        name = name.replace(/%20/g, " ")
      }
      //alert(name)

      document.getElementById("name").innerHTML = name;
      document.getElementById("description").innerHTML = des;
      document.getElementById("link").innerHTML = '<a href="https://'+link+'.com">My URL</a>';
      document.getElementById("image").innerHTML = '<img src="https://i.giphy.com/'+image+'giphy.webp" width="50%" height="50%" >';
          
          // https://compression.stanleypounds.repl.co/?des=Rowlett&link=memphishack&name=Kaite%20Pounds&image=media/MT5UUV1d4CXE2A37Dg/

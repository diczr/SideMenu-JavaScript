
            
            function abrirMenu() {
                document.getElementById("openSideMenu").style.width = "250px";
                document.body.style.backgroundColor ="rgba(0,0,0,0.7)";
                document.getElementById("main_menu").style.display = "none";
            }
            
            function fecharMenu() {
                document.getElementById("openSideMenu").style.width = "0";
                document.getElementById("openSideMenu").style.marginLeft = "0";
                document.body.style.backgroundColor = "white";
                document.getElementById("main_menu").style.display = "block";
            }
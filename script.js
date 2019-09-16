var marvel = {
    renderDesc: function () {
        const url = `https://gateway.marvel.com/v1/public/stories/608?&ts=1&apikey=abcf346b054278e43003775ac5dc1e0c&hash=8b6bc4b8bebb6f1901d773dc92bd251e`
        var message = document.getElementById("message");
        var footer = document.getElementById("footer");
        var description = document.getElementById("description");

        $.ajax({
            url:url,
            type:"GET",
            beforeSend: function () {
                message.innerHTML = "Loading...";
            },
            
            complete: function () {
                message.innerHTML = "Successfully loaded!";
            },

            success: function (data) {
                var descripString = "";
                
                for (var i = 0; i < data.data.results.length;i++) {
                    var element = data.data.results[i];
                    
                    if (element.description != "" ) {
                    descripString += "<h2 class=descrip>"+element.description+"</h2>";
                    } else {
                        descripString += "<h2>Sorry, no description available :(</h2>"
                    }
                }
                
                description.innerHTML = descripString;
                footer.innerHTML = data.attributionHTML;
                                
            },
            
            error: function () {
                message.innerHTML = "We are sorry! :(";
            }
        });
    },
    
    renderChar: function() {
        const urlChars = `https://gateway.marvel.com:443/v1/public/characters?stories=608&ts=1&apikey=abcf346b054278e43003775ac5dc1e0c&hash=8b6bc4b8bebb6f1901d773dc92bd251e`
        var charContainer = document.getElementById("characters-container");
        
        $.ajax ({
            url: urlChars,
            type: "GET",
            beforeSend: function () {
                message.innerHTML = "Loading...";
            },
            
            complete: function () {
                message.innerHTML = "Successfully loaded!";
            },

            success: function (data) {
                var image = "";
                for ( var i = 0; i< data.data.results.length; i++) {
                    var element = data.data.results[i];
                    image += " <img class=img src='"+element.thumbnail.path+"/standard_fantastic."+element.thumbnail.extension+"'/>";                    
                    image += "<h3 class=imgName>"+element.name+"</h3>";
                    
                }
                charContainer.innerHTML = image;
                
            },
            
            error: function () {
                message.innerHTML = "No images available...";
            }            
        });
    }
};




marvel.renderDesc()
marvel.renderChar()
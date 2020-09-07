var photosIndex = 0;   
        showPhoto();
        
        function showPhoto(){
            var i;
            var paintings = document.getElementsByClassName('photo');
            
            for(i=0;i<paintings.length;i++){
                
                paintings[i].style.display="none";
            }
            
            photosIndex++;
            
            if(photosIndex > paintings.length){
                photosIndex=1;
            }
            paintings[photosIndex-1].className +=" next";
            paintings[photosIndex-1].style.display="block";
            console.log(photosIndex-1);
            if((photosIndex-1)!=0){
                paintings[photosIndex-2].style.display="block";
            }
            setTimeout(showPhoto,2300);
        }

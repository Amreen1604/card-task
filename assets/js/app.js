"use strict";
var cl=console.log;
/* alert('hello'); */

let randomimages = ["https://source.unsplash.com/random/?city" ,
					"https://source.unsplash.com/random/?fashion" ,
					"https://source.unsplash.com/random/?foodanddrink", 
					"https://source.unsplash.com/random/?javascript" ,
					"https://source.unsplash.com/random/?html" ,
                    "https://source.unsplash.com/random/?css" ,
                    "https://source.unsplash.com/random/?css3" ,
                    "https://source.unsplash.com/random/?bootstrap" ,
                    "https://source.unsplash.com/random/?java" ,
                    "https://source.unsplash.com/random/?web" ,
                    "https://source.unsplash.com/random/?webdevelopment" ,
                    "https://source.unsplash.com/random/?ui" ,
                    "https://source.unsplash.com/random/?node.js" ,
                    "https://source.unsplash.com/random/?nature" ,
                    "https://source.unsplash.com/random/?sky" ,
                    "https://source.unsplash.com/random/?birds" ,
                    "https://source.unsplash.com/random/?flower", 
                    "https://source.unsplash.com/random/?moon" ,
                    "https://source.unsplash.com/random/?sun",
                    "https://source.unsplash.com/random/?angular",
                    "https://source.unsplash.com/random/?typescript"];

let imgContainer =document.getElementById('imageContainer');
console.log(imgContainer);

let result = " ";

randomimages.forEach(function(img,i){
	result += `<div class="col-sm-4 mb-4">
					<div class="card">
							<div class="card-header text-uppercase  text-center">Image Number ${[i+1]}</div>
							<div class="card-body">
								<img src=${img} class="img-fluid p-4" alt="randomimages"  title="randomimages">
							</div>
					</div>
				</div>`
});

console.log(result);

imgContainer.innerHTML = result;
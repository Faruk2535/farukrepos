function getElement(element){
    return document.querySelector(element);
}

const allCampgrounds = document.querySelectorAll('.campground')
let campImage = [];
let campName = [];

allCampgrounds.forEach(campground => {

    let viewCamp = campground.querySelector('.campground > a')
    viewCamp.addEventListener('click', ()=>{
        let imgsrc = campground.querySelector('.campground > img').src;
        // var campImage = imgsrc
        campImage.push(imgsrc)
    })
    
});


// document.querySelector('.camp__img').src = campImage;







// for (let i = 0; i < allCampgrounds.length; i++) {
//     const campground = allCampgrounds[i];
//     campground.querySelector('a').addEventListener('click', campDetails)
// }

// function campDetails(){
//     campImage.pop()
//     campName.pop()

//     campImage.push(campground.querySelector('img').src);
//     campName.push(campground.querySelector('h5').innerText);

// }

// getElement(".camp__info img").src = campImage[0]
// getElement(".camp__name h4").innerText = campName[0]



// console.log(campName)









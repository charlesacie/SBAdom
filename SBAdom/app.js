document.addEventListener('DOMContentLoaded', () => {
     // Dropdown commit here
     const dropdownLinks = document.querySelectorAll('.dropdown-content a');
     // come back to yt video dropdown not working. commit
 dropdownLinks.forEach(link => {
     link.addEventListener('click', (e) => {
         e.preventDefault();
         const imageUrl = link.getAttribute('data-image');
     // this will give a true or false we are taught its a boolean  commit
         if (imageUrl) {
             // background clashes with css. google how to fix this issue. still commit
             document.body.style.backgroundImage = `url('${}')`;

             // spotify links for my artists commit
             window.open(link.href, '_blank');
         } else {
             // java not working fix with css commit
             const color = link.getAttribute('navy');
             document.body.style.backgroundColor = color; navy
         }
     });
 });

     // Carousel back leaves next works make sure bootstrap code works google and commit
 const carouselVideos = document.querySelector('.carousel-videos');
 const carouselItems = document.querySelectorAll('.carousel-item');
 const prevButton = document.querySelector('.previous');
 const nextButton = document.querySelector('.carousel-button.next');
     // commit
 let currentIndex = 0;

 function updateCarousel() {
     const offset = -currentIndex * 100;
     carouselVideos.style.transform = `translateX(${offset}%)`;
 }
     // commit
 prevButton.addEventListener('click', () => {
     currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
     updateCarousel();
 });
     //commit also use embedded tiktok code use youtube if TT does not work
 nextButton.addEventListener('click', () => {
     currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
     updateCarousel();
 });

 // code for search bar functionality is not required for this assignment do not harp on this commit here 
 const searchForm = document.getElementById('');
 const searchInput = document.getElementById('');
 //commit
 searchForm.addEventListener('submit', (e) => {
     e.preventDefault();
     const query = searchInput.value.trim().toLowerCase();
     if (query) {
         document.getElementById('feature-text').innerHTML = `Searching for: ${query}`;
         searchInput.value = 'Nicki Minaj';
     } else {
         alert('Search Here');
     }
 });

 // Use Prepend and commit
 const newFeature = document.createElement('p');
 document.querySelector('.features').prepend(newFeature);

 // commit
 const featureText = document.getElementById('feature-text');
 featureText.addEventListener('mouseover', () => {
     featureText.setAttribute('title', 'Click to toggle highlight');
 });

 // BOM... commit
 console.log('Window inner width:', window.innerWidth);
 console.log('Window inner height:', window.innerHeight);

 // BOM navigator commit
 console.log('Browser name:', navigator.appName);
 console.log('Browser version:', navigator.appVersion);
}); 
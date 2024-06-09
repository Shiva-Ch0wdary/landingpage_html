document.addEventListener('DOMContentLoaded', function() {
  const reviews = [
      {
          title: "The Best Financial Accounting App Ever!",
          content: "“Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Acomusan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Leotus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.”",
          name: "Nick Jonas",
          image: "assets/testimonial.svg"
      },
      {
          title: "Amazing Experience",
          content: "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est at lobortis.”",
          name: "John Doe",
          image: "assets/testimonial.svg"
      },
      {
          title: "Highly Recommended",
          content: "“Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.”",
          name: "Jane Smith",
          image: "assets/testimonial.svg"
      },
      {
          title: "A Must-Have App",
          content: "“Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Maecenas faucibus mollis interdum. Nullam quis risus eget urna mollis ornare vel eu leo.”",
          name: "Michael Brown",
          image: "assets/testimonial.svg"
      },
      {
          title: "Incredible Features",
          content: "“Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.”",
          name: "Emily Clark",
          image: "assets/testimonial.svg"
      }
  ];

  function showReview(index) {
      const testimonial = reviews[index];
      
      // Update testimonial content
      document.getElementById('testimonial-title').textContent = testimonial.title;
      document.getElementById('testimonial-content').textContent = testimonial.content;
      
      // Update user name
      document.getElementById('user-name').textContent = testimonial.name;
      
      // Update profile image
      document.getElementById('profile-image').src = testimonial.image;
  }

  const navButtons = document.querySelectorAll('.nav-button');
  navButtons.forEach((button, index) => {
      button.addEventListener('click', () => showReview(index));
  });

  showReview(0); // Show the first review initially
});





  document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeLightbox = document.getElementById('close-lightbox');

    galleryItems.forEach(item => {
      item.addEventListener('click', function() {
        const imgSrc = item.getAttribute('data-src');
        lightboxImg.src = imgSrc;
        lightbox.style.display = 'flex';
      });
    });

    closeLightbox.addEventListener('click', function() {
      lightbox.style.display = 'none';
    });
  });


document.addEventListener('DOMContentLoaded', function () {
    // Obtén los elementos relevantes
    const toggleVideo = document.getElementById('toggle-video');
    const togglePhoto = document.getElementById('toggle-photo');
    const videoGallery = document.getElementById('video-gallery');
    const photoGallery = document.getElementById('photo-gallery');
  
    // Función para mostrar la galería de videos y ocultar la de fotos
    function showVideoGallery() {
      videoGallery.style.display = 'flex';
      photoGallery.style.display = 'none';
    }
  
    // Función para mostrar la galería de fotos y ocultar la de videos
    function showPhotoGallery() {
      videoGallery.style.display = 'none';
      photoGallery.style.display = 'flex';
    }
  
    // Función para manejar el cambio de galería cuando se hace clic en el toggle
    function handleGalleryToggle() {
      if (toggleVideo.checked) {
        showVideoGallery();
      } else {
        showPhotoGallery();
      }
    }
  
    // Asigna el manejador de eventos al cambio de los toggles
    toggleVideo.addEventListener('change', handleGalleryToggle);
    togglePhoto.addEventListener('change', handleGalleryToggle);
  
    // Asegúrate de mostrar la galería correcta al cargar la página
    handleGalleryToggle();
  });
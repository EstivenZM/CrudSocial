const imageUrlInput = document.getElementById('imageUrlInput');
const loadImageButton = document.getElementById('loadImageButton');
const imageContainer = document.getElementById('imageContainer');
const uploadedImages = document.getElementById('uploadedImages');

// When loading the page, check if there is an image saved in LocalStrage.
const savedImageUrl = localStorage.getItem('uploadedImageUrl');
if (savedImageUrl) {
  const uploadedImg = document.createElement('img');
  uploadedImg.src = savedImageUrl;
  uploadedImg.alt = 'Imagen subida';
  uploadedImg.style.maxWidth = '200px';
  uploadedImages.appendChild(uploadedImg);
};

loadImageButton.addEventListener('click', () => {
  const imageUrl = imageUrlInput.value.trim();

  if (!imageUrl) {
    Swal.fire({
      icon: 'warning',
      title: 'Campo vacío',
      text: 'Por favor, ingresa la URL de una imagen antes de cargarla.'
    });
    return;
  }

  const img = document.createElement('img');
  img.src = imageUrl;
  img.alt = 'Imagen cargada desde URL';
  img.style.maxWidth = '200px';

  // Creation of delete button when loading an image.
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.id = 'button-delete';
  deleteButton.addEventListener('click', () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto eliminará la imagen cargada.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        img.remove();
        deleteButton.remove();
        uploadButton.remove();
        imageUrlInput.value = '';
      }
    });
  });

  // Creation of an upload button when loading an image.
  const uploadButton = document.createElement('button');
  uploadButton.textContent = 'Subir';
  uploadButton.id = 'button-upload';
  uploadButton.addEventListener('click', () => {
    // Hide image and buttons.
    img.style.display = 'none';
    deleteButton.style.display = 'none';
    uploadButton.style.display = 'none';

    // Display the image in the other container.
    const uploadedImg = document.createElement('img');
    uploadedImg.src = img.src;
    uploadedImg.alt = 'Imagen subida';
    uploadedImg.style.maxWidth = '200px';
    uploadedImages.appendChild(uploadedImg);

    // Save URL in LocalStorage.
    localStorage.setItem('uploadedImageUrl', img.src);
  });

  imageContainer.innerHTML = '';
  imageContainer.appendChild(img);
  imageContainer.appendChild(deleteButton);
  imageContainer.appendChild(uploadButton);
});
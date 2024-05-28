const fileOn = document.querySelector(".fileOn");

const viewFile = (transFile) => {
  const fileList = [];

  for (let i = 0; i < transFile.length; i++) {
    fileList.push(transFile[i]);
  }

  const imgList = document.querySelector(".imgList");

  fileList.forEach((it) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(it);
    fileReader.addEventListener("load", (e) => {
      const img = document.createElement("img");

      img.src = e.target.result;

      imgList.appendChild(img);
    });
  });
};

fileOn.addEventListener("dragover", (e) => {
  e.preventDefault();
});

fileOn.addEventListener("dragleave", (e) => {
  e.preventDefault();
});

fileOn.addEventListener("drop", (e) => {
  e.preventDefault();

  const transFile = e.dataTransfer.files;

  viewFile(transFile);
});

// Minimal PDF.js viewer
// Loads PDF from the URL provided in data-pdf-url attribute on #pdf-viewer
// Requires pdfjsLib loaded from CDN (pdf.min.js)

(async function(){
  if (typeof pdfjsLib === 'undefined') {
    console.error('pdfjsLib not found. Make sure to include pdfjs-dist from CDN.');
    return;
  }

  // Configure worker
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.worker.min.js';

  const viewer = document.getElementById('pdf-viewer');
  if (!viewer) return;
  const url = viewer.getAttribute('data-pdf-url');
  if (!url) return;

  const canvas = document.getElementById('pdf-canvas');
  const ctx = canvas.getContext('2d');
  const pageNumField = document.getElementById('page-num');
  const pageCountField = document.getElementById('page-count');
  const prevBtn = document.getElementById('prev-page');
  const nextBtn = document.getElementById('next-page');
  const zoomIn = document.getElementById('zoom-in');
  const zoomOut = document.getElementById('zoom-out');

  let pdfDoc = null;
  let pageNum = 1;
  let scale = 1.2; // default zoom

  async function renderPage(num){
    const page = await pdfDoc.getPage(num);
    const viewport = page.getViewport({ scale: scale });
    canvas.height = viewport.height;
    canvas.width = viewport.width;

    // Clear canvas
    ctx.clearRect(0,0,canvas.width, canvas.height);

    const renderContext = {
      canvasContext: ctx,
      viewport: viewport
    };
    await page.render(renderContext).promise;
    pageNumField.textContent = num;
  }

  function updateButtons(){
    prevBtn.disabled = pageNum <= 1;
    nextBtn.disabled = pageNum >= pdfDoc.numPages;
  }

  prevBtn.addEventListener('click', ()=>{
    if (pageNum <= 1) return;
    pageNum--;
    renderPage(pageNum).then(updateButtons);
  });

  nextBtn.addEventListener('click', ()=>{
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    renderPage(pageNum).then(updateButtons);
  });

  zoomIn.addEventListener('click', ()=>{
    scale = Math.min(scale + 0.2, 3.0);
    renderPage(pageNum);
  });

  zoomOut.addEventListener('click', ()=>{
    scale = Math.max(scale - 0.2, 0.6);
    renderPage(pageNum);
  });

  try{
    pdfDoc = await pdfjsLib.getDocument(url).promise;
    pageCountField.textContent = pdfDoc.numPages;
    renderPage(pageNum).then(updateButtons);
  }catch(err){
    console.error('Failed to load PDF', err);
    viewer.innerHTML = '<p>Unable to load PDF. <a href="'+url+'">Download</a></p>';
  }
})();

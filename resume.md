---
layout: default
title: Resume
---

<section class="section">
  <div class="container">
    <h1>Resume</h1>
    <p class="muted">Preview the resume below. Use the download button to save a copy.</p>

    <p style="margin-top:16px;">
      <a class="btn btn-primary" href="{{ site.resume | relative_url }}" target="_blank" rel="noopener">Open PDF in new tab</a>
      <a class="btn btn-outline" href="{{ site.resume | relative_url }}" download>Download PDF</a>
    </p>

    <div style="margin-top:20px;">
      <!-- PDF.js viewer -->
      <div id="pdf-viewer" data-pdf-url="{{ site.resume | relative_url }}">
        <div class="pdf-controls" style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">
          <button id="prev-page" class="btn btn-outline">Previous</button>
          <span>Page <span id="page-num">1</span> / <span id="page-count">0</span></span>
          <button id="next-page" class="btn btn-outline">Next</button>
          <div style="flex:1"></div>
          <button id="zoom-out" class="btn btn-outline">-</button>
          <button id="zoom-in" class="btn btn-outline">+</button>
          <a class="btn btn-primary" href="{{ site.resume | relative_url }}" target="_blank">Open in new tab</a>
        </div>
        <div class="pdf-canvas-wrap" style="overflow:auto;border:1px solid rgba(0,0,0,0.06);background:#fff;padding:12px;border-radius:8px;">
          <canvas id="pdf-canvas" style="display:block;margin:0 auto;max-width:100%"></canvas>
        </div>
      </div>
      <script src="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.min.js"></script>
      <script src="{{ '/assets/js/pdf-viewer.js' | relative_url }}"></script>
    </div>
  </div>
</section>
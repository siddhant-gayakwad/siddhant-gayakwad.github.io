---
layout: default
title: Resume
---

<div class="page-head">
  <div>
    <p class="name" style="font-size:22px;">Resume</p>
    <p class="role">Preview below, or grab the PDF.</p>
  </div>
</div>

<div style="margin: 20px 0 20px; display:flex; gap:10px;">
  <a class="btn btn-primary" href="{{ site.resume | relative_url }}" target="_blank" rel="noopener">Open in new tab</a>
  <a class="btn btn-outline" href="{{ site.resume | relative_url }}" download>Download PDF</a>
</div>

<div id="pdf-viewer" data-pdf-url="{{ site.resume | relative_url }}">
  <div class="resume-toolbar">
    <button id="prev-page" class="btn btn-outline">← prev</button>
    <span class="page-info">page <span id="page-num">1</span> / <span id="page-count">0</span></span>
    <button id="next-page" class="btn btn-outline">next →</button>
    <div class="spacer"></div>
    <button id="zoom-out" class="btn btn-outline">−</button>
    <button id="zoom-in" class="btn btn-outline">+</button>
  </div>
  <div class="pdf-canvas-wrap">
    <canvas id="pdf-canvas" style="display:block;margin:0 auto;max-width:100%"></canvas>
  </div>
</div>

<script src="https://unpkg.com/pdfjs-dist@3.9.179/build/pdf.min.js"></script>
<script src="{{ '/assets/js/pdf-viewer.js' | relative_url }}"></script>

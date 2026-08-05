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
      <!-- Embedded PDF viewer with fallback link -->
      <iframe src="{{ site.resume | relative_url }}" style="width:100%;height:80vh;border:0;" title="Resume PDF">
        <p>Your browser does not support embedded PDFs. You can <a href="{{ site.resume | relative_url }}">download the PDF</a> instead.</p>
      </iframe>
    </div>
  </div>
</section>
---
title: "Can I download and view LRGs locally?"
faq_group: view
faq_order: 4
faq_tags:
  - view
  - records
faq_related:
  - use-a-lrg-record
---

Yes, each LRG can be downloaded from its own page on the LRG website or by following the instructions described on the [Data page](/data).
If you want to display the downloaded LRG(s) locally on your web browser with the same layout as the LRG website, you need to download the files:  

* [lrg2html.xsl]({{ site.urls.lrg_ftp_http }}lrg2html.xsl)
* [lrg2html.css]({{ site.urls.lrg_ftp_http }}lrg2html.css)
* [lrg2html.js]({{ site.urls.lrg_ftp_http }}lrg2html.js)
* The [img]({{ site.urls.lrg_ftp_http }}img) directory

and place these in the same directory as the downloaded LRG file(s).  
Without these extra files, your web browser will display the LRG data in XML rather than the nicely formatted version that you see when viewing LRGs from the ftp site.

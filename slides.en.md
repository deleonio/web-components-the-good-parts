---
theme: ./theme
colorSchema: light
highlighter: shiki
lineNumbers: true
transition: fade
info: |
  ## Impressum
  Präsentation zum Theme **Web Components**.

  Autor: **Martin** Oppitz<br>
  E-Mail: **[github@martinoppitz.com](mailto:github@martinoppitz.com)**
drawings:
  persist: false
# css: unocss
title: Web Components - The Good Parts
layout: center
---

# **Web Components:** The Good Parts

### _The perspective makes the difference_

---
layout: quote
---

# Teaser

With the help of the **Web Component**standard of the **W3C**it has been possible to create **custom HTML elements**since **2014**. However, due to the **lack of**comprehensive **browser support**, **Web Components**had a hard time asserting themselves for a long time.

Thanks to **Microsoft**, **2021**will turn the tide and the web component standard can finally show what it's made of. With the **Good Part**we show how **powerful**Web Components are, how to use them **properly**and which cool **features**are still waiting for us.

---
layout: two-cols
---

# Course of content

- Icebreaker
- Speaker introduction
- What is a web component?
  - Semantic, styling and behavior
- When do I need web components?
  - motivation: _webstandard vs. framework_
  - qualities: _leading quality characteristics_
  - corporate design: _shadow dom_
  - requirements: _encapsulate anything_

::right::

# <br>

- **Button-Task:** The 8 Habits
  1. construction: _simple html_
  2. properties: _api design, `_`-prefix, less_
  3. validation: _only string, number, boolean_
  4. consistent styling: _with shadow dom, performance_
  5. handle dynamics: _encapsulate complexity, seo_
  6. reuse: _with no shadow dom, ssr_
  7. event handling: _jump over the shadow_
  8. developer experience: _typescript power_


---
layout: about-me
---

# Speaker

<v-clicks>

- My name is **Martin** Oppitz.
- **Value history:**
  - In the meantime **over 25 years** on the web
  - Computer science studies, sole proprietor and private business
  - Since 3 years at the **ITZBund** in **architecture consulting**
- **Interests:** Family, biking and skiing, traveling and open source

</v-clicks>

---
layout: image-right-50
image: '/assets/html-js-css.png'
handle: 2
---

# Web Components
<small class="underline">What is a Web Component?</small>

**Web Components** is a **web standard** of the **<kol-abbr _title="World Wide Web Consortium">W3C</kol-abbr>** since 2014.

<v-clicks>

- Web Component ≙ <strong>own</strong> HTML-Element
- Component consists of …
  - HTML <kol-icon _icon="icofont-arrow-right"></kol-icon> <strong>Semantic</strong>
  - JavaScript <kol-icon _icon="icofont-arrow-right"></kol-icon> <strong>Behavior</strong>
  - CSS <kol-icon _icon="icofont-arrow-right"></kol-icon> <strong>Styling</strong>
- <strong>Robuster, konsistenter und teilbarer</strong> Baustein (Shadow DOM)
- **erst 2021** technischer Durchbruch (<kol-abbr _title="Microsoft Internet Explorer 11">IE11</kol-abbr> & <kol-abbr _title="Microsoft Edge Webbrowser">EDGE</kol-abbr>)
- in allen webbasierten Benutzeroberflächen wiederverwendbar<sup>1</sup>

</v-clicks>
---
layout: image-right-50
image: '/assets/html-js-css.png'
handle: 2
---

# Motivation
<small class="underline">When do I need web components?</small>

<strong>Web Components</strong> ist seit Juli 2014 ein <strong>Webstandard</strong> des <strong><kol-abbr _title="World Wide Web Consortium">W3C</kol-abbr></strong>.

<v-clicks>

- motivation: _webstandard vs. framework_
- qualities: _leading quality characteristics_
- corporate design: _shadow dom_
- requirements: _encapsulate anything_

</v-clicks>

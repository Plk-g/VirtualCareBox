# 💌 VirtualCareBox

A small, heartfelt web project — a virtual care package you can send to someone you love when you can't be there in person.

The landing page greets them with a personal message and some photos, then lets them open the box to find clickable items inside, each with its own little note.

> **Live demo:** https://plk-g.github.io/VirtualCareBox/

---

## ✨ What's Inside

- **Landing page** (`index.html`) — a warm welcome with personal photos and an "Open the Box" button
- **Care box page** (`carebox.html`) — an interactive box with 9 items that animate in on load; clicking any item pops up its name and a custom message
- **Items included:** Goku plushie, Lindt chocolates, chocolate chip cookies, Indian chai, Ichiran ramen, a throw blanket, a get well soon card, blue roses, and a tissue box

---

## 🛠️ Built With

- Plain HTML, CSS, and vanilla JavaScript — no frameworks, no dependencies
- Google Fonts (Poppins)
- Responsive layout with mobile breakpoints
- Prettier for consistent code formatting

---

## 🚀 Getting Started

Clone the repo and open `index.html` directly in a browser — no build step needed.

```bash
git clone https://github.com/Plk-g/VirtualCareBox.git
cd VirtualCareBox
open index.html   # or just double-click it
```

**Optional:** install dev dependencies to use the formatting scripts.

```bash
npm install
npm run format        # format all files with Prettier
npm run check:format  # check without writing
```

---

## 💬 Customizing

**Photos:** replace `photo1.JPG` and `photo2.JPG` with your own images (or update the `src` attributes in `index.html`).

**Item messages:** each item's name and note live as `data-*` attributes directly in `carebox.html` — no JavaScript to touch.

```html
<img src="tea.png" class="item" id="item-tea"
     data-name="Indian Tea"
     data-message="Made chai for you and coffee for me hehe" />
```

To swap in a different item, replace the image file and update `src`, `alt`, and the two `data-*` attributes.

---

## ♿ Accessibility

- Popup dialog has `role="dialog"`, `aria-modal`, and is labeled + described by its visible content
- All items are keyboard-focusable and respond to Enter / Space
- Esc closes the popup and returns focus to the previously active item

---

## 📁 File Structure

```
VirtualCareBox/
├── index.html                        # Landing / welcome page
├── carebox.html                      # Interactive care box
├── assets/
│   ├── styles/
│   │   └── site.css                  # Shared stylesheet
│   └── scripts/
│       └── carebox.js                # Popup + keyboard interaction logic
├── images/
│   ├── carebox.png
│   ├── goku.png
│   ├── lindt.png
│   ├── cookie.png
│   ├── tea.png
│   ├── ichiran.png
│   ├── blanket.png
│   ├── card.png
│   ├── rose.png
│   ├── tissues.png
│   ├── photo1.JPG                    # Replace with your own photos
│   └── photo2.JPG
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── pull_request_template.md
├── .prettierrc.json
├── .prettierignore
├── .gitignore
├── package.json
├── LICENSE
├── CODE_OF_CONDUCT.md
└── CONTRIBUTING.md
```

---

## 🤝 Contributing

Contributions are welcome! Please read [`CONTRIBUTING.md`](CONTRIBUTING.md) before opening a pull request, and note that this project follows the [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md).

---

*Made with love for someone who deserved a little extra care. 🫶*

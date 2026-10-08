# Video editor portfolio

A responsive, single-page portfolio built with plain HTML, CSS, and vanilla JavaScript.

## Customize the portfolio

- In `index.html`, replace **Your Name**, the short bio, email address, and the `X` placeholders in the stats with your own information. Update the page title and social-sharing descriptions too.
- Open `script.js` and edit the `projects` array at the top. Each project has a `title`, `niche`, `client`, `youtubeId`, and `thumbnail`. Use the ID from the end of a YouTube URL (for example, `M7lc1UVf-VE` from `youtube.com/watch?v=M7lc1UVf-VE`). The sample entries all use YouTube's IFrame Player API demo video; replace the IDs and sample project details before publishing.
- Replace the sample thumbnail URLs with your own publicly accessible image URLs. Keep descriptive project titles so the generated thumbnail alt text remains useful.
- The profile and contact links are in `index.html`; replace the sample email address where it appears.

## Run locally

No build step or dependencies are required. Open `index.html` in a browser, or serve the folder locally:

```sh
python -m http.server 8000
```

Then visit [http://localhost:8000](http://localhost:8000).

## Deploy for free

### GitHub Pages

1. Push these files to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **Deploy from a branch**, choose your default branch and the `/ (root)` folder, then save.
4. Open the published URL shown on the Pages settings screen.

### Netlify

1. Sign in to Netlify and choose **Add new site → Import an existing project**.
2. Connect the GitHub repository containing these files.
3. Leave the build command blank and set the publish directory to the repository root (`.`).
4. Deploy the site; Netlify will provide a public URL.

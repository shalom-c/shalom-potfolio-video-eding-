# Shalom Taki Sunday — Video Editor Portfolio

A responsive, single-page portfolio for Shalom Taki Sunday, a video editor specializing in YouTube, short-form, documentary, and podcast storytelling. It is built with plain HTML, CSS, and vanilla JavaScript.

## Portfolio details

- Contact: [takisunday3@gmail.com](mailto:takisunday3@gmail.com?subject=Video%20editing%20project%20inquiry&body=Hi%20Shalom%2C%0A%0AI%27d%20like%20to%20talk%20about%20a%20video%20editing%20project.%0A%0A)
- YTJobs: [Shalom Taki Sunday's profile](http://ytjobs.co/talent/profile/642218?r=749)
- Editing tools: Premiere Pro, After Effects, DaVinci Resolve, and CapCut.
- Featured work is maintained in the `projects` array at the top of `script.js`. Each entry includes its YouTube title, niche, client, video ID, and matching YouTube thumbnail URL.
- The portfolio displays a 48-hour turnaround stat.

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

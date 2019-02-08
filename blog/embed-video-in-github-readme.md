---
layout: blog
type: blog
title: Embed Video in Github README.md
date: 2017-07-03
labels:
  - Github
  - Video
---
Sometimes you may want to embed a youtube video into your repository's README.md file. There are several methods such as using youtube's auto-generated picture, a video screenshot, or an animated gif.

## Use youtube's preview picture
We can use youtube's auto-generated picture for the video:

```
http://img.youtube.com/vi/VIDEO-ID/0.jpg
```

Template:

```markdown
[![Alt text for your video](https://img.youtube.com/vi/VIDEO-ID/0.jpg)](http://www.youtube.com/watch?v=VIDEO-ID)
```

Example:

```markdown
[![SC2 Video](https://img.youtube.com/vi/--b-9HrKK6w/0.jpg)](http://www.youtube.com/watch?v=--b-9HrKK6w)
```
Which gives you this (using --b-9HrKK6w for VIDEO-ID). But this doesn't feel like a video. We can do better.

[![Alt text for your video](https://img.youtube.com/vi/--b-9HrKK6w/0.jpg)](http://www.youtube.com/watch?v=--b-9HrKK6w "SC2 Mini game - Click to Watch!"){:target="_blank"}

Notice how it's not completely certain if it's an image or a video.

## Use a video screenshot or .gif
To make it feel more like a video, we can use a video placeholder picture, screenshot, or .gif for our image. First create a directory to hold the screenshot or gif such as `doc/screenshot_youtube.PNG` then use this format.

Template:

```markdown
[![Alt text for your video](doc/screenshot_youtube.PNG)](https://www.youtube.com/watch?v=VIDEO-ID "Put hover text here!")
```

Example:

```markdown
[![SC2 Video](doc/SC2_youtube.PNG)](https://www.youtube.com/watch?v=--b-9HrKK6w "SC2 Mini game - Click to Watch!")
```

This method gives us this. If you need a quick fix, this method "tricks" the user into thinking the video is on the README page with a picture. It's not perfect but it works. 

[![SC2 Video](../images/blog/embed-video-in-github-readme.PNG)](https://www.youtube.com/watch?v=--b-9HrKK6w "SC2 Mini game - Click to Watch!"){:target="_blank"}

Similarly, you could use an animated .gif instead since they are rendered on Github's readme. 

Template:

```markdown
[![Alt text for your video](doc/gifName.gif)](https://www.youtube.com/watch?v=VIDEO-ID)
```

Example:

```markdown
[![SC2 Video](doc/SC2_youtube.gif)](https://www.youtube.com/watch?v=--b-9HrKK6w)
```
<div>
<a href="https://www.youtube.com/watch?v=--b-9HrKK6w" target="_blank" title="SC2 Mini game - Click to Watch!">

<video src="../images/blog/embed-video-in-github-readme.mp4" autoplay="" loop="" playsinline="" style="width: 100%; padding-bottom:10px"></video>
</a>
</div>
This method is probably the most eye catching but it takes some work to get that .gif file. 

Good luck!


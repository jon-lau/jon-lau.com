---
layout: blog
type: blog
title: Jekyll Embed Video Without Plugin
date: 2017-07-22
labels:
  - Jekyll
  - Video
youtubeId1: Nb8YTFCTzjM
youtubeId2: --b-9HrKK6w
youtubeId3: 85yrW6rgm-s
---
Embed videos in Jekyll webpages without a plugin. If you are hosting your webpage using Github pages, you can't use third party plugins. Here is a method to use 'includes' instead of plugins. This plugin works for both Youtube and Vimeo.

## Examples
For in-depth instructions and examples:

**Source Code:** <a href="https://github.com/nathancy/jekyll-embed-video" target="_blank"><i class="large github icon"></i>https://github.com/nathancy/jekyll-embed-video</a>

{% include youtubePlayer.html id=page.youtubeId1 %}

<div>
<p style="padding-bottom:25px"></p>
</div>

{% include youtubePlayer.html id=page.youtubeId2 %}

<div>
<p style="padding-bottom:25px"></p>
</div>

{% include youtubePlayer.html id=page.youtubeId3 %}
 
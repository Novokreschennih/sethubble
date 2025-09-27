---
layout: layouts/base.njk
title: Блог
permalink: /blog/index.html
---

{# --- ШАПКА ГЛАВНОЙ СТРАНИЦЫ БЛОГА --- #}
<div class="blog-header">
  <h1>{{ title }} SetHubble</h1>
  <p>Все о вирусном партнерском маркетинге, автоматизации и росте вашего бизнеса.</p>
</div>

{# --- СПИСОК ПОСТОВ В ВИДЕ ПЛИТОК --- #}
<div class="post-list">
  {% for post in collections.posts | reverse %}
    <a href="{{ post.url }}" class="post-card">
      <article>
        <div class="post-card-content">
          <h2>{{ post.data.title }}</h2>
          <p class="post-card-summary">{{ post.data.summary }}</p>
          <div class="post-card-meta">
            <time datetime="{{ post.date | machineDate }}">{{ post.date | readableDate }}</time>
            <span class="read-more">Читать далее →</span>
          </div>
        </div>
      </article>
    </a>
  {% endfor %}
</div>

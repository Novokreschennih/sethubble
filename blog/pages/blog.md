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
  {# Эта строка ищет все статьи с тегом "post" #}
  {% set postslist = collections.post | reverse %}
  
  {% for post in postslist %}
    <a href="{{ post.url | url }}" class="post-card">
      <article>
        <div class="post-card-content">
          <h2>{{ post.data.title }}</h2>
          {% if post.data.summary %}
            <p class="post-card-summary">{{ post.data.summary }}</p>
          {% endif %}
          <div class="post-card-meta">
            <time datetime="{{ post.date | machineDate }}">{{ post.date | readableDate }}</time>
            <span class="read-more">Читать далее →</span>
          </div>
        </div>
      </article>
    </a>
  {% endfor %}
</div>

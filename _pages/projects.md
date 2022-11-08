---
title:
layout: default
permalink: /projects/
published: true
---


<div class="ProjectContainer">
  {% for project in site.projects %}

  {% if project.redirect %}
    <div><a href="{{ project.redirect }}" target="_blank">{{ project.title }}</a> - {{ project.description }}</div>
    

  {% else %}
    <div><a href="{{ project.url | prepend: site.baseurl | prepend: site.url }}">{{ project.title }}</a> - {{ project.description }}</div>

  {% endif %}

  {% endfor %}
</div>

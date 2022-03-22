<template>
  <div>
    <Project
      name="Todoninja v3"
      url="https://github.com/todoninja"
      description="An extended Todo-App optimized for mobile usage."
      :image="TodoninjaLogo"
      :links="{ 'Read more': 'test.de' }"
    ></Project>
    <Project name="Opaque JS" url="https://github.com/opaquejs" description="A client-side Javascript ORM for any API." :image="OpaqueLogo"></Project>
    <Project name="Todoninja v2" discontinued description="An extended Todo-App optimized for mobile usage." :image="TodoninjaLogo"></Project>
    <Project
      discontinued
      name="remember.link"
      description="A link shortener with customizable and better memorizable links."
      :image="RememberLinkLogo"
    ></Project>
    <Project
      discontinued
      name="Artfamily"
      description="An online artwork forum for sharing your creations and sketches with artists around the world."
      :image="ArtfamilyLogo"
    ></Project>
    <Project name="DKD" url="https://dkdmerch.de" description="A kind of fashion brand that we wear and design with my friends." :image="DKDLogo"></Project>
    <Project
      discontinued
      name="Asocial Network"
      description='This is an anti-social network inspired by the "Känguru-Chroniken" authored by Marc Uwe Kling.'
      :image="AsozialesNetzwerkLogo"
    ></Project>
  </div>
</template>

<script lang="ts" setup>
import OpaqueLogo from "../assets/images/opaque.png";
import ArtfamilyLogo from "../assets/images/artfamily.png";
import AsozialesNetzwerkLogo from "../assets/images/asozialesnetzwerk.png";
import DKDLogo from "../assets/images/dkd.svg";
import RememberLinkLogo from "../assets/images/rememberlink.png";
import TodoninjaLogo from "../assets/images/todoninja.svg";
import Project from "./Project.vue";
</script>

<script setup>
import { ref } from "vue";
import ButtonComponent from '../components/ButtonComponent.vue'
import ButtonHoverFocusComponent from '../components/ButtonHoverFocusComponent.vue'
</script>

<template>
  <div class="mt-10 ml-14">
    <h1 class="text-2xl my-4">Buttons</h1>
    <div class="flex mb-4">
      <div class="flex flex-col mr-44">
        <h6 class="text-color-rightbar">{{ "</Button />".toString() }}</h6>
        <ButtonComponent>Default</ButtonComponent>
      </div>
      <div class="flex flex-col">
        <h6 class="text-color-rightbar">{{ "&:hover,&:focus".toString() }}</h6>
        <ButtonHoverFocusComponent>Default</ButtonHoverFocusComponent>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="flex flex-col mr-24">
        <h6 class="text-color-rightbar">{{ '</Button variant="outline" />'.toString() }}</h6>
        <ButtonComponent variant="outline">Default</ButtonComponent>
      </div>
      <div class="flex flex-col">
        <h6 class="text-color-rightbar">{{ "&:hover,&:focus".toString() }}</h6>
        <ButtonHoverFocusComponent strHoverFocus="outline">Default</ButtonHoverFocusComponent>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="flex flex-col mr-24">
        <h6 class="text-color-rightbar">{{ '</Button variant="outline" />'.toString() }}</h6>
        <ButtonComponent variant="text">Default</ButtonComponent>
      </div>
      <div class="flex flex-col">
        <h6 class="text-color-rightbar">{{ "&:hover,&:focus".toString() }}</h6>
        <ButtonHoverFocusComponent strHoverFocus="text">Default</ButtonHoverFocusComponent>
        </div>
    </div>
    <div class="flex mb-4">
      <div class="flex flex-col">
        <h6 class="text-color-rightbar">{{ '</Button disableShadow />'.toString() }}</h6>
        <ButtonComponent disableShadow >Default</ButtonComponent>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="flex flex-col mr-24">
        <h6 class="text-color-rightbar">{{ '</Button disabled />'.toString() }}</h6>
        <ButtonComponent disabled>Disabled</ButtonComponent>
      </div>
      <div class="flex flex-col">
        <h6 class="text-color-rightbar">{{ '</Button variant="text" disabled />'.toString() }}</h6>
        <ButtonComponent variant="text" disabled>Disabled</ButtonComponent>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="flex flex-col mr-24">
        <h6 class="text-color-rightbar">{{ '</Button startIcon="local_grocery_store" />'.toString() }}</h6>
        <ButtonComponent startIcon="local_grocery_store">Default</ButtonComponent>
      </div>
      <div class="flex flex-col">
        <h6 class="text-color-rightbar">{{ '</Button endIcon="local_grocery_store" />'.toString() }}</h6>
        <ButtonComponent endIcon="local_grocery_store">Default</ButtonComponent>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="flex flex-col mr-20">
        <h6 class="text-color-rightbar">{{ '</Button size="sm" />'.toString() }}</h6>
        <ButtonComponent size="sm">Default</ButtonComponent>
      </div>
      <div class="flex flex-col mr-20">
        <h6 class="text-color-rightbar">{{ '</Button size="md" />'.toString() }}</h6>
        <ButtonComponent size="md">Default</ButtonComponent>
      </div>
      <div class="flex flex-col">
        <h6 class="text-color-rightbar">{{ '</Button size="lg" />'.toString() }}</h6>
        <ButtonComponent size="lg">Default</ButtonComponent>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="flex flex-col mr-12">
        <h6 class="text-color-rightbar">{{ '</Button color="default" />'.toString() }}</h6>
        <ButtonComponent color="default">Default</ButtonComponent>
      </div>
      <div class="flex flex-col mr-10">
        <h6 class="text-color-rightbar">{{ '</Button color="primary" />'.toString() }}</h6>
        <ButtonComponent color="primary">Default</ButtonComponent>
      </div>
      <div class="flex flex-col mr-14">
        <h6 class="text-color-rightbar">{{ '</Button color="secondary" />'.toString() }}</h6>
        <ButtonComponent color="secondary">Secondary</ButtonComponent>
      </div>
      <div class="flex flex-col">
        <h6 class="text-color-rightbar">{{ '</Button color="danger" />'.toString() }}</h6>
        <ButtonComponent color="danger">Danger</ButtonComponent>
      </div>
    </div>
    <div class="flex mb-4">
      <div class="flex flex-col mr-28">
        <h6 class="text-color-rightbar">{{ "&:hover,&:focus".toString() }}</h6>
        <ButtonHoverFocusComponent strHoverFocus="default">Default</ButtonHoverFocusComponent>
      </div>
      <div class="flex mr-28 mt-6">
        <ButtonHoverFocusComponent strHoverFocus="primary">Default</ButtonHoverFocusComponent>
      </div>
      <div class="flex mr-28 mt-6">
        <ButtonHoverFocusComponent strHoverFocus="secondary">Secondary</ButtonHoverFocusComponent>
      </div>
      <div class="flex mt-6">
        <ButtonHoverFocusComponent strHoverFocus="danger">Danger</ButtonHoverFocusComponent>
      </div>
    </div>
  </div>
</template>

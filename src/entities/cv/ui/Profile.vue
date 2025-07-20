<script setup lang="ts">
import type { IProfile } from '../types';

interface Props {
  data: IProfile;
}

defineProps<Props>();
</script>

<template>
  <div class="container">
    <div>
      <div class="name box">
        {{ `${data.lastname} ${data.firstname} ${data.middlename}` }}
      </div>

      <div class="text box">
        <div class="label">Дата рождения:</div>
        <div>
          {{ data.birthday }}
        </div>
      </div>

      <div class="text box">
        <div class="label">Локация:</div>
        <div>
          {{ data.location }}
        </div>
      </div>

      <div class="text box">
        <div class="label">Формат работы:</div>
        <div>
          {{ data.formatWoks }}
        </div>
      </div>

      <div class="text box">
        <div class="label">Контакты:</div>
        <div>
          <div v-for="contact of data.contacts">
            {{ `${contact.type}: ${contact.value}` }}
          </div>
        </div>
      </div>

      <div class="text box">
        <div class="label">Репозитории:</div>
        <div>
          <div v-for="repo of data.repos">
            {{ `${repo}` }}
          </div>
        </div>
      </div>
    </div>

    <img
      src="/img/avatar.png"
      width="250px"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/shared/styles' as *;

.box {
  display: flex;
  margin-bottom: 0.5rem;

  div {
    margin-right: 0.5rem;
  }
}

.label {
  @include MPLUS_medium;
}

.name {
  @include MPLUS_bold;
  font-size: 26px;
  margin-bottom: 2rem;
}

.container {
  display: flex;
}
</style>

<script setup lang="ts">
import { useApp } from '@/app';
import { Icon } from '@/shared/ui';
import type { IProfile } from '../types';

interface Props {
  data: IProfile;
}

defineProps<Props>();
const { entities } = useApp();
const titles = entities.profile.titles;
</script>

<template>
  <div class="container">
    <div>
      <div class="name box">
        {{ `${titles.lastname} ${titles.firstname} ${titles.middlename}` }}
      </div>

      <div class="text box">
        <div class="label">{{ titles.labels.birthday }}</div>
        <div>
          {{ data.birthday }}
        </div>
      </div>

      <div class="text box">
        <div class="label">{{ titles.labels.location }}</div>
        <div>
          {{ titles.location }}
        </div>
      </div>

      <div class="text box">
        <div class="label">{{ titles.labels.formatFork }}</div>
        <div>
          {{ titles.formatWoks }}
        </div>
      </div>

      <div class="text box">
        <div class="label">{{ titles.labels.contacts }}</div>
        <div>
          <div v-for="contact of data.contacts">
            <div class="contactRow">
              <Icon :name="contact.type" />
              {{ `${contact.value}` }}
            </div>
          </div>
        </div>
      </div>

      <div class="text box">
        <div class="label">{{ titles.labels.repository }}</div>
        <div>
          <div v-for="repo of data.repos">
            {{ `${repo}` }}
          </div>
        </div>
      </div>
    </div>

    <img
      src="/img/avatar.png"
      width="240px"
    />
  </div>
</template>

<style scoped lang="scss">
@use '@/shared/styles' as *;

.box {
  display: flex;
  margin-bottom: 0.25rem;

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
  margin-bottom: 1rem;
}

.container {
  display: flex;
}

.contactRow {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>

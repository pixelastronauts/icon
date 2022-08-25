import { defineNuxtModule, createResolver, addComponent } from '@nuxt/kit'

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'icon',
    configKey: 'icon'
  },
  defaults: {},
  setup (_options, nuxt) {
    const { resolve } = createResolver(import.meta.url)

    // nuxt.options.build.transpile.push(resolve('./runtime'))
    addComponent({
      name: 'Icon',
      global: true,
      filePath: resolve('./runtime/Icon.vue')
    })
  }
})
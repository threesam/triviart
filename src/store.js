import { writable } from 'svelte/store'

// CONTROLS
export const showQuiz = writable(false)
export const showCategories = writable(true)
export const activeCategory = writable(9)

export const score = writable(0)
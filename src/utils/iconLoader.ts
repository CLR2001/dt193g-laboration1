/**
 * @file SVG Icon Asset Loader
 * @module IconLoader
 * @description Injects SVG sprite sheet into the DOM and provide typed icon helpers.
 */

import iconSvg from '/icons.svg?raw'

/**
 * Valid icon IDs from icons.svg file.
 * Update this whenever a symbol is added or removed from the sprite.
 */
export type IconName = 'home' | 'dark-mode' | 'light-mode'

/**
 * @function initIcons
 * @description Creates a hidden container at the top of the `<body>` to host all SVG definitions.
 */
export function initIcons(): void {
  const SPRITE_ID = 'global-svg-sprite'

  if (document.getElementById(SPRITE_ID)) return

  const div = document.createElement('div')
  div.id = SPRITE_ID
  div.hidden = true
  div.innerHTML = iconSvg

  document.body.prepend(div)
}

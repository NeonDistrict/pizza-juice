# @blockadegames/pizza-juice

## 2.6.2

### Patch Changes

- i was dumb - exporting correctly now

## 2.6.1

### Patch Changes

- Export createIcon

## 2.6.0

### Minor Changes

- New colors and Icons

## 2.5.2

### Patch Changes

- - Input `css` is injecting in the `<input>` instead of in the wrapper
  - forawrdRef change
  - Added `css` prop in components that were missing it

## 2.5.1

### Patch Changes

- Tooltip does'nt need a global provider wrapping the App anymore

  Small change in type of `ComponentWithAs` internally, no breaking change

## 2.5.0

### Minor Changes

- Docs for all these components:

  - rate
  - accordion
  - stepper
  - spinner
  - button
  - checkbox
  - input
  - select
  - textarea
  - toggle
  - modal
  - text

  ***

  - Box
    - Isn't `display: block` by default anymore
  - Text

    - default tag is now `p` instead of `span`

  - Select

    - Add full width
    - Add font-family to option
    - Change border-color on hover to match Textarea

  - Input

    - Change border-color on hover to match Textarea

  - Toggle

    - Fix indicator ON on sm size

  - Modal
    - add portal prop

## 2.4.0

### Minor Changes

- Accordion subitems prop

## 2.3.0

### Minor Changes

- Change build to react-jsx instead of preserve. This result in no JSX syntax in the bundled file

## 2.2.2

### Patch Changes

- exporting ClickAwayListener and remove Carousel

## 2.2.1

### Patch Changes

- Fix: export carousel

## 2.2.0

### Minor Changes

- Theme Provider & New components - BaseRadio, Skeleton, Animations, Slider, ClickAwayListener

## 2.1.2

### Minor Changes

- CSS props in Container and Countdown size in toast

## 2.1.0

### Minor Changes

- dae0348: Redesign and change API of toast, and Countdown variant small

## 2.0.4

### Patch Changes

- Now in monorepo

## 2.0.3

### Patch Changes

- Added types for `handleChange` in Input
- Pagination fixed when empty data

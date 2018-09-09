const elTransition = '0.3s width ease-in-out, 0.3s padding-left ease-in-out, 0.3s padding-right ease-in-out'
const Transition = {
    'before-enter'(el) {
        el.style.transition = elTransition
        if (!el.dataset) el.dataset = {}

        el.dataset.oldPaddingLeft = el.style.paddingLeft
        el.dataset.oldPaddingRight = el.style.paddingRight

        el.style.width = 0
        el.style.paddingLeft = 0
        el.style.paddingRight = 0
    },

    'enter'(el) {

        el.dataset.oldOverflow = el.style.overflow
        if (el.scrollWidth !== 0) {
            el.style.width = el.scrollWidth + 'px'
            el.style.paddingLeft = el.dataset.oldPaddingLeft
            el.style.paddingRight = el.dataset.oldPaddingRight
        } else {
            el.style.width = ''
            el.style.paddingLeft = el.dataset.oldPaddingLeft
            el.style.paddingRight = el.dataset.oldPaddingRight
        }
        el.style.overflow = 'hidden'
    },

    'after-enter'(el) {
        el.style.transition = ''
        el.style.width = ''
        el.style.overflow = el.dataset.oldOverflow
    },

    'before-leave'(el) {
        if (!el.dataset) el.dataset = {}
        el.dataset.oldPaddingLeft = el.style.paddingLeft
        el.dataset.oldPaddingRight = el.style.paddingRight
        el.dataset.oldOverflow = el.style.overflow

        el.style.width = el.scrollWidth + 'px'
        el.style.overflow = 'hidden'
    },

    'leave'(el) {
        if (el.scrollWidth !== 0) {
            el.style.transition = elTransition
            el.style.width = 0
            el.style.paddingLeft = 0
            el.style.paddingRight = 0
        }
    },

    'after-leave'(el) {
        el.style.transition = ''
        el.style.width = ''
        el.style.overflow = el.dataset.oldOverflow
        el.style.paddingLeft = el.dataset.oldPaddingLeft
        el.style.paddingRight = el.dataset.oldPaddingRight
    }
}

export default {
    name: 'collapseLeftTransition',
    functional: true,
    render(h, { children }) {
        const data = {
            on: Transition
        }
        return h('transition', data, children)
    }
}

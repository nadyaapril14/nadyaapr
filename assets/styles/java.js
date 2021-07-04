const controller = new ScrollMagic.Conroller()
const scene = new ScrollMagic.Scene({
....triggerElement:'.skills',
....triggerHook: 0
})
.setTween(t1)
.addTo(controller)
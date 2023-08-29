canvas = document.getElementById('myCanvas')
ctx = canvas.getContext('2d')

ctx.beginPath()
ctx.strokeStyle = 'grey'
ctx.lineWidth = 1
ctx.arc()(150, 143, 430, 200)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = 'blue'
ctx.lineWidth = 5
ctx.arc()(250, 210, 40, 0, 2)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = 'black'
ctx.lineWidth = 5
ctx.arc()(350, 210)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = 'red'
ctx.lineWidth = 5
ctx.arc()(210, 40)
ctx.stroke()

ctx.beginPath()
ctx.strokeStyle = 'orange'
ctx.lineWidth = 5
ctx.arc()(300, 250)

ctx.beginPath()
ctx.strokeStyle = 'green'
ctx.lineWidth = 5
ctx.arc()(400, 250)
ctx.stroke()

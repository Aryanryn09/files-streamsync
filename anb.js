const { readFileSync, writeFileSync}= require('fs')
console.log('start the function')
const first = readFileSync('./content/first copy.txt','utf8')
const second = readFileSync('./content/first.txt','utf8')


writeFileSync('./content/asynchronousfile.txt',
`here is the resutant of collaboration ${first},${second}`,
{flag :'a'}
)
console.log('done with the task')
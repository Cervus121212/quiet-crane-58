import f from'fs'
const O=process.env.MAKEFUN_OUTPUT_DIR||'/output'
const poem=`We agree: you take this end,
I take that one.
Neither of us sees where it is going.
The doorway decides the angle.
We carry it through.`
f.mkdirSync(O,{recursive:!0})
f.writeFileSync(O+'/entry.txt',poem)

// Unix Epoch - January 1st 1970 00:00:00 

// const now = new Date()
// const timestap = now.getTime()
// console.log(timestap)

// const myDate = new Date(timestap)
// console.log(myDate.getFullYear())

const firstdata = new Date('March 16 1997')
const secondDate = new Date('March 09 1995')
const firstdataStamp = firstdata.getTime()
const secondDateStamp = secondDate.getTime()


if (firstdataStamp < secondDateStamp){

    console.log(firstdata.toString())
} else {

    console.log(secondDate.toString())
}

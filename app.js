const yargs = require("yargs");
const stdData=require('./std')
////////////////////add method////////////////
yargs.command({
  command: "add",
  describe: "add command",
  builder: {
    id: {
      describe: "student id",
      demandOption: true,
      type: "number",
    },
    namestd: {
      describe: "student name",
      demandOption: true,
      type: "string",
    },
    subject: {
      describe: "student subject",
      demandOption: true,
      type: "string",
    },
    grade: {
      describe: "student grade",
      demandOption: true,
      type: "number",
    },
    comment: {
      describe: "student comment",
      type: 'string',
    },
  },
  handler: (argv) => {
    // console.log(`studentId ${argv.id}`);
    stdData.addStdData(argv.id,argv.namestd,argv.subject,argv.grade,argv.comment)
  },
});
////////////////////remove method////////////////
yargs.command({
  command: "remove",
  describe: "remove command",
  builder: {
    id: {
      describe: "student id",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
    // console.log("this is remove method");
    stdData.removestd(argv.id)
  },
});
////////////////////read method////////////////
yargs.command({
  command: "read",
  describe: "read command",
  builder: {
    id: {
      describe: "student id",
      demandOption: true,
      type: "number",
    },
  },
  handler: (argv) => {
      // console.log("this is read method")
    stdData.readstd(argv.id)
  },
});

////////////////////list method////////////////
yargs.command({
  command: "list",
  describe: "list command",
  
  handler: () => {
      // console.log("this is list method")
   stdData.list();
  },
});
// console.log(yargs.argv)
yargs.parse();

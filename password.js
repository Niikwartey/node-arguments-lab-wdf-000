// code solution here
const chars = "abcdefghijklmnopqrstuvwxyz1234567890".split("");

function makePasswords() {
  process.argv.shift(); process.argv.shift();
  let length = parseInt( process.argv[0], 10 );
  let number = parseInt( process.argv[1], 10 );

  for(let i = 0; i < number; i++) {
    let password = generatePassword(length)
    process.stdout.write(password)
  }
}

function generatePassword(length) {
  let password = "";
  for(let c = 0; c < length; c++) {
    password += chars[Math.floor(Math.random()*10)]
  }
  return password;
}


makePasswords();
// end
process.exit(0)


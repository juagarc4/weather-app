require('colors')
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const Searches = require('./helpers/models/searches')

const main = async () => {
  const searches = new Searches()
  let opt = ''

  do {
    opt = await inquirerMenu()
    switch (opt) {
      case 1:
        // Ask for place
        const place = await readInput('City: ')
        await searches.city(place)

        // Show found places
        // Show places selector
        // Show weather information
        // Show results
        // console.clear()
        console.log('Information of the city'.green)
        console.log('======================='.green)
        console.log('Lat:')
        console.log('Lon:')
        console.log('Temperature:')
        console.log('Min:')
        console.log('Max:')
        break
      case 2:
        console.log(opt)
        break
      default:
        break
    }

    if (opt !== 0) await pause()
  } while (opt !== 0)
}

main()

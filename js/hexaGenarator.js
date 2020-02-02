// ====== Hexa Color genarator ======
const inputNumOfColors = document.querySelector('#input_num_of_colors')
const genarateColor = document.querySelector('#btn_genarate')
const stopGenarateColor = document.querySelector('#btn_stop')
const colorContainer = document.querySelector('.color-container')
// hexacolor function
const hexaColorGenarate = () => {
    let hexaString = '0123456789abcdef'
    let hexaColor = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexaString.length)
        hexaColor += hexaString[index]
    }
    return hexaColor
}
const genarateColorBox = (n = 5) => {
    for (let i = 0; i < n; i++) {
        let colorBox;
        let copy;
        let bgColor = hexaColorGenarate()
        colorBox = document.createElement('div')
        colorBox.setAttribute('class', 'color-box')

        colorElement = document.createElement('p')
        colorElement.textContent = bgColor

        copy = document.createElement('button')
        copy.setAttribute('class', 'copy')
        copy.textContent = 'copy'

        colorBox.style.background = bgColor

        colorBox.appendChild(colorElement)
        colorBox.appendChild(copy)
        colorContainer.append(colorBox)

        copy.addEventListener('click', function () {
            var copyText = colorElement.textContent;
            console.log(copyText)
            copyText.select();
            copyText.setSelectionRange(0, 99999)
            document.execCommand("copy");
            alert("Copied the text: " + copyText.value);
        })


        // //change color with setInterval
        // let changeColor = setInterval(function () {
        //     let bgColor = hexaColorGenarate()
        //     colorBox.style.background = bgColor
        //     colorBox.textContent = bgColor
        //     copy.setAttribute('class', 'copy')
        //     copy.textContent = 'Copy'
        //     colorBox.appendChild(copy)
        // }, 100000000000)

        // stopGenarateColor.addEventListener('click', function () {
        //     function myStopFunction() {
        //         clearInterval(changeColor);
        //     }
        //     myStopFunction()
        // })
        // colorBox.addEventListener('mouseover', function () {
        //     function myStopFunction() {
        //         clearInterval(changeColor);
        //     }
        //     myStopFunction()
        // })

        // colorBox.addEventListener('mouseout', function () {
        //     function myStartFunction() {
        //         clearInterval(myStopFunction);
        //     }
        //     myStartFunction()
        // })
        // colorBox.addEventListener('mouseout', function () {
        //     setInterval(function () {
        //         let bgColor = hexaColorGenarate()
        //         colorBox.style.background = bgColor
        //         colorBox.textContent = bgColor
        //         // why copy changes
        //         copy.setAttribute('class', 'copy')
        //         copy.textContent = 'Copy'
        //         colorBox.appendChild(copy)
        //     }, 1000)
        // })
    }
}
genarateColorBox()
// addEventListner

genarateColor.addEventListener('click', function () {
    colorContainer.innerHTML = '';
    let userInput = inputNumOfColors.value
    genarateColorBox(userInput)
})





// copy function






// Time interval
// Defult color box
// let colorBox;
// let copy;
// for (i = 0; i < 3; i++) {
//     colorBox = document.createElement('div')
//     colorBox.setAttribute('class', 'color-box')
//     colorBox.style.background = hexaColorGenarate()
//     colorBox.textContent = hexaColorGenarate()

//     copy = document.createElement('button')
//     copy.setAttribute('class', 'copy')
//     copy.textContent = 'Copy'

//     colorBox.appendChild(copy)
//     colorContainer.append(colorBox)
// }

// setInterval(function () {
//     let bgColor = hexaColorGenarate()
//     colorBox.style.background = bgColor
//     colorBox.textContent = bgColor

// }, 1000)

// genarateColor.addEventListener('click', function () {
//     let userInput = inputNumOfColors.value
//     for (i = 3; i < userInput; i++) {
//         colorBox = document.createElement('div')
//         colorBox.setAttribute('class', 'color-box')
//         colorBox.textContent = hexaColorGenarate()
//         colorBox.style.background = hexaColorGenarate()

//         copy = document.createElement('button')
//         copy.setAttribute('class', 'copy')
//         copy.textContent = 'Copy'

//         colorBox.appendChild(copy)
//         colorContainer.append(colorBox)
//     }
// })
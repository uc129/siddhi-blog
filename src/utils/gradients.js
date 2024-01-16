
export const Gradients = [

    'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
    'bg-gradient-to-r from-green-400 to-blue-500',
    'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
    'bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500',
    'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
    'bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500',
    'bg-gradient-to-r from-green-400 via-yellow-500 to-red-500',
    'bg-gradient-to-r from-[#5FC3E4] via-[#E55D87] to-[#5FC3E4]',
    'bg-gradient-to-r from-[#E5E5BE] via-[#003973] to-[#E5E5BE]',
    'bg-gradient-to-r from-[#cc95c0] via-[#dbd4b4] to-[#7aa1d2]',
    'bg-gradient-to-r from-[#348f50] via-[#56b4d3] to-[#348f50]',
    'bg-gradient-to-r from-[#ff6e7f] via-[#bfe9ff] to-[#ff6e7f]',
    'bg-gradient-to-r from-[#77a1d3] via-[#79cbca] to-[#e684ae]',
    'bg-gradient-to-r from-[#314755] via-[#26a0da] to-[#314755]',
    'bg-gradient-to-r from-[#9796f0] via-[#fbc7d4] to-[#9796f0]',
    'bg-gradient-to-r from-[#acb6e5] via-[#86fde8] to-[#acb6e5]',
    'bg-gradient-to-r from-[#ee9ca7] via-[#ffdde1] to-[#ee9ca7]',

]

export const borderColours = Gradients.map((gradient) => {
    let colour;
    const gradientArray = gradient.split('from-');
    const gradientArray2 = gradientArray[1].split(' ');

    colour = gradientArray2[0];
    return colour;


})



// background: linear-gradient(to top, #5FC3E4, #E55D87); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


// background: linear-gradient(to top, #E5E5BE, #003973); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// background: linear-gradient(to top, #cc95c0, #dbd4b4, #7aa1d2); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// background: linear-gradient(to top, #348f50, #56b4d3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

// background: linear-gradient(to top, #ff6e7f, #bfe9ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


// background: linear-gradient(to top, #77a1d3, #79cbca, #e684ae);

// background: linear-gradient(to top, #314755, #26a0da);


// background: linear-gradient(to top, #9796f0, #fbc7d4);

// background: linear-gradient(to top, #acb6e5, #86fde8);

//  background: linear-gradient(to top, #ee9ca7, #ffdde1)
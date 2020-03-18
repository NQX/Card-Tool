const jimp = require('jimp');

console.log(jimp.FONT_SANS_10_BLACK)

async function createImage() {
    const image = new jimp(1280, 720);
    const avatar = await jimp.read('./map.png')

    let horizontal = Math.floor((image.bitmap.width / 2) - (avatar.bitmap.width / 2));

    let font = await jimp.loadFont('./fonts/anna/anna.fnt');
    await image.print(font, 0,0, {text: "vero hello", 
                                    alignmentX: jimp.HORIZONTAL_ALIGN_CENTER,
                                    alignmentY: 0,
                                    maxWidth: 1 },
                                    image.bitmap.width ,
                                    image.bitmap.height);

    


    await avatar.resize(50, 50)

    await image.composite(avatar, horizontal, 0)
    await image.writeAsync('./export4.png')
}


createImage().catch(console.error);

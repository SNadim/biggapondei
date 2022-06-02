const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');

ffmpeg.setFfmpegPath(ffmpegPath);

const path = require('path');
const fs = require('fs-extra');

async function videoUploader(req, res){
    req.pipe(req.busboy);
    req.busboy.on('file', (fieldname, file, fileInfo) => {
        console.log(`Uploading: ${fileInfo.filename}`);
        console.log(`${__dirname}/../`)
        const fstream = fs.createWriteStream(`../server/Video_Storage/${fileInfo.filename}`);
        file.pipe(fstream);
        fstream.on('close', () => {
            console.log(`Upload Finished of ${fileInfo.filename}`);
            ffmpeg(`../server/Video_Storage/${fileInfo.filename}`)
                .size('1080x?')
                .videoCodec('libx264')
                .output(`../server/1080p/${fileInfo.filename}`, { end: true })
                .run();
            ffmpeg(`../server/Video_Storage/${fileInfo.filename}`)
                .size('720x?')
                .videoCodec('libx264')
                .output(`../server/720p/${fileInfo.filename}`, { end: true })
                .run();
        });
    });
}

module.exports = {
    videoUploader
}
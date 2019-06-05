global.electron = require('electron')
global.fs = require('fs')
global.path = require('path')
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffprobePath = require('@ffprobe-installer/ffprobe').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
ffmpeg.setFfprobePath(ffprobePath);
global.ffmpeg = ffmpeg

const crypto = require('crypto'); 
global.md5 = function md5(data){
  // 以md5的格式创建一个哈希值
  let hash = crypto.createHash('md5');
  return hash.update(data).digest('hex');
}


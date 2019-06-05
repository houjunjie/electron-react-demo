/*
 * @Author: ajie 
 * @Date: 2019-05-27 18:07:41 
 * @Last Modified by: ajie
 * @Last Modified time: 2019-05-30 14:49:50
 */
import React from 'react';
import { connect } from 'react-redux';
import {Button, Row,Col, Icon, Input} from 'antd';
import styles from './index.less';


const electron = window.electron;

const { dialog } = electron.remote;
const fs = window.fs;
const path = window.path;
const md5 = window.md5;
const ffmpeg = window.ffmpeg;


function Home () {
  const handleClick = () => {
    dialog.showOpenDialog({ properties: ['openDirectory']}, (filename) => {
      console.log(filename);
      if(filename){
        listingFile(filename[0])
      }
    })
  }
  const listingFile = (filepath) => {
    
    fs.readdir(filepath, async (err, file) => {
      if (err) {
        return alert(err)
      }
      let tableData = []
      for (let filename of file) {
        const stat = fs.statSync(path.join(filepath, filename))
        if (stat.isFile()) {
          let temp = filename.match(/(.+)(\.[^.]+$)/)
          let suffix = temp[2];
          let newName = md5(temp[1]);
          let oldPath = filepath + '\\' + filename
          // let newPath = filepath + '/' + newName + suffix;//给图片重新命名，利用变量i，顺序递增
          console.log(oldPath, 'oldPath');
          ffmpeg.ffprobe(oldPath,function(err, metadata) {
            console.log(metadata, err);
        });
          // fs.rename(oldPath, newPath, async (err) =>{//文件重命名方法，参数代表的意思参考API
          //   if(!err){//替换成功，提示信息
          //     console.log(newPath + '替换成功！');
          //     console.log(process, 2323);
          //     tableData.push({
          //       oleName: filename,
          //       newName: newName + suffix
          //     })
          //   }
          // })
          // if (path.extname(filename).toLowerCase() === '.png') {
          // }
        }
      }
      console.log(tableData);
    })
  }
  return (
    <div className={styles.box}>
      <Row >
        <Input  
          addonAfter={
            <Button onClick={handleClick}>
              <Icon type="home" />
            </Button>
          }
        />
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
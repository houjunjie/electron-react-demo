/*
 * @Author: ajie 
 * @Date: 2019-05-27 18:07:44 
 * @Last Modified by:   ajie 
 * @Last Modified time: 2019-05-27 18:07:44 
 */
import React from 'react';
import { connect } from 'react-redux';
import {Button} from 'antd';
import styles from './index.less';

function Login ({login, updateState}) {
  const { count } = login;
  const handleClick = () => {
    updateState({count: count + 1})
  }
  return <div>
    <span className={styles.count}>{count}</span>
    <Button onClick={handleClick}>click</Button>
  </div>
}

const mapStateToProps = (state) => ({
  login: state.login
})

const mapDispatchToProps = (dispatch) => ({
  updateState: dispatch.login.updateState
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)
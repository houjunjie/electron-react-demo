/*
 * @Author: ajie 
 * @Date: 2019-05-27 18:07:41 
 * @Last Modified by: ajie
 * @Last Modified time: 2019-05-27 18:14:28
 */
import React from 'react';
import { connect } from 'react-redux';

function Home () {
  return <div>
    Home
  </div>
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)
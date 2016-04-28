import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render (){
    if(!this.props.book){
      //if this.props.book is undefined (when app first boots up) return early with this div
      return <div>Select a book to get started.</div>
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}


function mapStateToProps(state){
  //return an object that will show up as props in our BookDetail
  return{
    book: state.activeBook
  }
}


export default connect(mapStateToProps)(BookDetail);
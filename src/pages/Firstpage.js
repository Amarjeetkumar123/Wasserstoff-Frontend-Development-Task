import React from 'react'
import Bottompart from '../component/first-page/Bottompart';
import CommentBox from '../component/first-page/CommentBox';
import Leftbar from '../component/first-page/Leftbar'
import Map from '../component/first-page/Map';

const Firstpage = (props) => {

  const users = props.users;
 
  return (
    <>
      <div style={{display:"flex",position:"relative"}}>
        <Leftbar users={users} />
        <CommentBox/>
        <Map/>
      </div>
      <Bottompart/>

    </>
  );
}

export default Firstpage
import React, { useEffect, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';

const ZipCode = (props) => {
  const isOpenPost = props.isOpenPost;
  const setIsOpenPost = props.setIsOpenPost;
  const setZipCode = props.setZipCode;
  const setAddr = props.setAddr;

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    setZipCode(data.zonecode);
    setAddr(fullAddr);

    setIsOpenPost(false);
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    zIndex: '99',
    overFlow: 'hidden',
    padding: '7px',
  };

  return (
    <>
      {isOpenPost ? (
        <DaumPostcode
          style={postCodeStyle}
          autoClose
          onComplete={onCompletePost}
        />
      ) : null}
    </>
  );
};

export default ZipCode;

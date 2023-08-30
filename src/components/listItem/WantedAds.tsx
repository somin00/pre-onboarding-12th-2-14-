import React from 'react';

import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

function WantedAds() {
  return (
    <AdsWrapper>
      <Link to='https://www.wanted.co.kr/'>
        <img src='/assets/awoptimize.png' alt='원티드 광고 이미지' />
      </Link>
    </AdsWrapper>
  );
}

export default WantedAds;

const AdsWrapper = styled.li`
  height: 57px;
  margin-bottom: 10px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

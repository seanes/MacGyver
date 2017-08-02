import React from 'react';
import '../../css/components/tabbar.css';

const AgentIcon = ({ isActive }) => (
  <div className="icon">
    <svg width="25px" height="23px" viewBox="0 0 25 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <g id="Page-1" stroke="none" strokeWidth="1"  fillRule="evenodd">
        <g id="spy" fillRule="nonzero" fill={isActive ? '#f43820' : '#000'}>
          <path d="M24.954872,10.7251447 C24.821998,10.3679106 24.423376,10.1868468 24.064124,10.3189745 C23.079872,10.6811021 22.075935,10.9894 21.0621555,11.2536553 L19.3052657,2.82195319 C18.911565,0.825357447 16.8003445,-0.486131915 14.689124,0.243017021 C13.2767224,0.747059574 11.7216043,0.747059574 10.3092028,0.243017021 C8.31117126,-0.437195745 6.17534449,0.673655319 5.68813976,2.82195319 L3.93617126,11.2536553 C2.91747047,10.9894 1.91845472,10.6811021 0.934202756,10.3189745 C0.574950787,10.1868468 0.17632874,10.3679106 0.0434547244,10.7251447 C-0.0894192913,11.0823787 0.0926673228,11.4787617 0.451919291,11.6108894 C8.35054134,14.4296128 16.6379429,14.4394 24.5464075,11.6108894 C24.9056594,11.4787617 25.0877461,11.0823787 24.954872,10.7251447 Z M5.28951772,11.576634 L5.93420276,8.48386809 L7.68617126,8.48386809 C8.07002953,8.48386809 8.3800689,8.17557021 8.3800689,7.79386809 C8.3800689,7.41216596 8.07002953,7.10386809 7.68617126,7.10386809 L6.22455709,7.10386809 L6.50999016,5.72386809 L9.42337598,5.72386809 C9.80723425,5.72386809 10.1172736,5.41557021 10.1172736,5.03386809 C10.1172736,4.65216596 9.80723425,4.34386809 9.42337598,4.34386809 L6.80034449,4.34386809 L7.05625,3.10578298 C7.27278543,2.02429362 8.48341535,1.08961277 9.84660433,1.54961277 C11.5592028,2.16131489 13.4489665,2.16131489 15.161565,1.54961277 C16.6034941,1.08471915 17.7452264,2.07322979 17.9519193,3.10578298 L19.7137303,11.576634 C14.9843996,12.5994 10.0139272,12.5994 5.28951772,11.576634 Z" id="Shape"></path>
          <path d="M22.1546752,18.6234426 C21.7511319,16.9204638 19.8466043,15.6236553 17.5631398,15.6236553 C15.3830217,15.6236553 13.5572343,16.7981234 13.040502,18.3836553 C12.661565,18.2955702 12.3466043,18.2955702 11.9676673,18.3836553 C11.450935,16.7981234 9.62022638,15.6187617 7.44010827,15.6187617 C5.15172244,15.6187617 3.24719488,16.9155702 2.84857283,18.6185489 C2.54345472,18.6919532 2.31215551,18.9611021 2.31215551,19.2889745 C2.31215551,19.6168468 2.54345472,19.8859957 2.84857283,19.9594 C3.25211614,21.6623787 5.1566437,22.9591872 7.44010827,22.9591872 C9.80231299,22.9591872 11.7560531,21.5742936 12.0660925,19.7881234 C12.4105807,19.6706766 12.5926673,19.665783 12.9322343,19.7832298 C13.2373524,21.5742936 15.1960138,22.9591872 17.5631398,22.9591872 C19.8515256,22.9591872 21.7511319,21.6623787 22.1546752,19.9594 C22.4597933,19.8859957 22.6910925,19.6168468 22.6910925,19.2889745 C22.6910925,18.9708894 22.4597933,18.6968468 22.1546752,18.6234426 Z M7.44010827,21.5840809 C5.6586122,21.5840809 4.15270669,20.5368468 4.15270669,19.2987617 C4.15270669,18.0606766 5.6586122,17.0085489 7.44010827,17.0085489 C9.22160433,17.0085489 10.7275098,18.055783 10.7275098,19.2987617 C10.7275098,20.5417404 9.22160433,21.5840809 7.44010827,21.5840809 Z M17.5582185,21.5840809 C15.7767224,21.5840809 14.2708169,20.5368468 14.2708169,19.2987617 C14.2708169,18.0606766 15.7767224,17.0085489 17.5582185,17.0085489 C19.3397146,17.0085489 20.8456201,18.055783 20.8456201,19.2987617 C20.8456201,20.5417404 19.3397146,21.5840809 17.5582185,21.5840809 Z" id="Shape"></path>
        </g>
      </g>
    </svg>
  </div>
);

export default AgentIcon;

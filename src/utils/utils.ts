export const formatSeconds = ( value: number ) => {
  let theTime = Math.ceil( value ); // 秒
  let middle = 0; // 分

  if ( theTime > 60 ) {
    middle = Math.floor( theTime / 60 );
    theTime = theTime % 60;

  }
  if ( theTime < 10 ) {
    return middle + ':0' + theTime;
  } else {
    return middle + ':' + theTime;
  }

};

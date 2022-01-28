/**
 * mock tracks
 * simplified timestamp as float
 * simulate show/hide function call
 * with console.log
 *
 * I envision this file could be generated from an annotation meta data.
 */
const tracks = [
  [
    {
      startTime: 1.2,
      endTime: 3.1,
      show: () => {
        console.log('show: T0-A0');
      },
      hide: () => {
        console.log('hide: T0-A0');
      },
    },
    {
      startTime: 5.0,
      endTime: 9.4,
      show: () => {
        console.log('show: T0-A1');
      },
      hide: () => {
        console.log('hide: T0-A1');
      },
    },
    {
      startTime: 12.3,
      endTime: 15.6,
      show: () => {
        console.log('show: T0-A2');
      },
      hide: () => {
        console.log('hide: T0-A2');
      },
    },
  ],
  [
    {
      startTime: 18.2,
      endTime: 20.8,
      show: () => {
        console.log('show: T1-A0');
      },
      hide: () => {
        console.log('hide: T1-A0');
      },
    },
    {
      startTime: 22.7,
      endTime: 25.9,
      show: () => {
        console.log('show: T1-A1');
      },
      hide: () => {
        console.log('hide: T1-A1');
      },
    },
  ],
];

export default tracks;

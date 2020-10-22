import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useHslCycle from 'hooks/useHslCycle';
import variants from './PalmytreeAnimation';

const Palmytree = ({ height = 580, variant }) => {
  const strokeColorOne = useHslCycle(1, 0, 'forward');
  const strokeColorTwo = useHslCycle(1, 0, 'backward');

  return (
    <motion.svg
      id='svg2'
      xmlns='http://www.w3.org/2000/svg'
      viewBox={`0 0 568 ${height}`}
      // initial='initial'
      // animate='animate'
      // variants={variants}
      // stroke={`linear-gradient(${strokeColorOne}, ${strokeColorTwo})`}
      fillOpacity={0}
    >
      <defs>
        <linearGradient id='linear' x1='0%' y1='0%' x2='100%' y2='0%'>
          <stop offset='0%' stopColor={strokeColorOne} stopOpacity='0.5' />
          <stop offset='100%' stopColor={strokeColorTwo} stopOpacity='1.0' />
        </linearGradient>
      </defs>

      <g id='layer1'>
        <g id='layer1-9'>
          <path
            id='path3028'
            d='M99.251,575.348c0-5.148,26.2-29.294,40.313-37.157a253.907,253.907,0,0,1,30.229-13.639c19.527-7.12,19.031-4.849,11.064-50.642-9.949-57.185-23.769-102.944-42.786-141.67-6.075-12.373-12.021-23.486-13.213-24.7s-4.5,5.523-7.361,14.96c-4.353,14.375-6.068,16.93-10.574,15.751-5-1.306-5.054-1.049-.833,3.616,4.9,5.41,3.115,15.419-2.213,12.436-2.292-1.282-2.27-.774.076,1.765,4,4.336,1.622,12.058-2.887,9.356-2.378-1.425-2.41-.869-.118,2.125,2.158,2.822,2.255,7.049.319,13.9l-2.782,9.842-5.239-11.706c-2.882-6.437-6.742-21.365-8.577-33.172-3.276-21.07-3.418-21.335-7.683-14.306-2.389,3.938-5.317,7.161-6.505,7.161s-2.161,1.983-2.161,4.407c0,3.287-1.6,3.9-6.3,2.407-5.54-1.759-5.852-1.455-2.57,2.5,4.671,5.628,1.867,10.728-4.572,8.316-4.042-1.514-4.261-1.107-1.341,2.49,3.975,4.9,2.006,8.315-3.56,6.179-2.682-1.029-3.273.343-2.094,4.852,1.134,4.338.635,5.662-1.611,4.274-2.022-1.249-3.255-.028-3.255,3.241,0,2.889-1.808,7.709-4.018,10.711-3.863,5.249-4.094,5.26-6.025.276C29.9,380.993,36.486,341,43.582,324.507c3.477-8.083,11.622-21.2,18.1-29.156l11.777-14.458-7.49-.242c-4.12-.132-11.6-.369-16.629-.527-6.541-.205-9.164-1.632-9.225-5.019-.079-4.318-.336-4.3-2.952.189-1.576,2.706-4.069,4.921-5.539,4.921s-2.772-2.215-2.894-4.921c-.132-2.94-.793-3.506-1.64-1.407a6.239,6.239,0,0,1-5.4,3.515,3.839,3.839,0,0,1-4.027-3.515c-.034-2.742-.546-2.722-2.329.088-1.572,2.476-4.326,2.848-8.809,1.19L0,272.752l8.71-6.2C29.5,251.745,49.039,245.1,71.835,245.082l21.793-.029.062-11.248c.034-6.186,2.507-16.634,5.5-23.217,6.218-13.7,19.214-31.618,22.931-31.618,3.428,0-.453,23.389-4.309,25.969-2.043,1.367-1.752,2.08.863,2.109,3.021.033,2.753,1.366-1.139,5.667-3.423,3.782-3.913,5.624-1.5,5.624,2.809,0,2.751,1.036-.268,4.758-2.622,3.233-2.732,4.08-.344,2.646,1.933-1.162,3.515-.847,3.515.7a6.123,6.123,0,0,1-2.784,4.533c-1.761,1.089-1.538,3.054.608,5.352,2.724,2.916,6.074.7,17.013-11.273,7.67-8.392,20-17.967,28.216-21.915,13.789-6.624,48.836-14.768,51.611-11.992,2.828,2.827-17.536,18.861-22.414,17.648-4.1-1.019-4.447-.5-1.788,2.706,2.637,3.178,1.969,4.5-3.355,6.63-3.656,1.464-5.544,2.742-4.194,2.841s.89,2.062-1.022,4.365-4.464,3.576-5.674,2.828-2.974.663-3.923,3.135a4.53,4.53,0,0,1-6.065,2.828c-2.823-1.083-3.639-.531-2.335,1.58,1.161,1.878-1.419,5.976-6.126,9.73l-8.133,6.485,13.75-4.139c26.947-8.11,55.711-4.081,82.359,11.536l13.318,7.8-8.127,2.709c-5.6,1.868-9.731,1.708-13.29-.515-4.152-2.593-5.163-2.394-5.163,1.018,0,5.161-3.206,5.442-8.286.727-3.03-2.812-3.39-2.812-1.8,0,1.3,2.3.056,3.515-3.572,3.515-3.055,0-6.194-1.581-6.974-3.515-.847-2.1-1.507-1.533-1.64,1.406-.121,2.707-1.664,4.922-3.427,4.922s-4.93-2.215-7.037-4.922c-3.65-4.687-3.75-4.687-2.118,0,1.487,4.271-.2,4.922-12.725,4.922H169.4l21.62,17.575c11.891,9.666,23.61,20.635,26.042,24.375l4.421,6.8-14.014-1.917c-7.707-1.054-14.39-3.03-14.851-4.392s-3.308-1.829-6.327-1.039c-3.146.823-5.489.028-5.489-1.871,0-1.818-1.275-2.518-2.832-1.555s-3.632-.335-4.61-2.882c-1.423-3.71-2.26-3.885-4.2-.882-1.843,2.856-2.814,2.319-4.069-2.249-1.216-4.425-3.187-5.6-7.5-4.47-4.745,1.241-5.487.571-3.911-3.536,1.543-4.021,1.162-4.419-1.842-1.925-2.809,2.331-4.726,2.252-7.421-.3-2-1.9,2.3,5.308,9.551,16.01,31.546,46.553,59.259,119.521,70.308,185.118,1.642,9.748,2.493,10.545,11.251,10.545H245L246.749,489c3.194-39.8,10.058-91.4,15.969-120.046,12.8-62.035,38.571-131.8,65.392-177.006,7.235-12.2,12.769-22.56,12.3-23.031s-6.966,2.946-14.433,7.594-13.869,8.052-14.224,7.564-2.868-4.049-5.583-7.916l-4.936-7.03,1.915,9.328c1.445,7.035.641,10.74-3.271,15.071-5.157,5.711-5.2,5.683-8.485-5.11l-3.3-10.852-.216,13.123c-.239,14.553-5.228,19.075-10.662,9.665-3.216-5.57-3.421-5.4-3.515,2.89-.093,8.236-6.621,15.605-21.675,24.467-10.064,5.925,14.953-50.25,32.664-73.344,12.33-16.079,12.306-16.152-3.891-11.655-9.6,2.665-11.574,2.4-14.764-1.959-3.468-4.743-3.682-4.7-3.682.825,0,9.274-7.752,10.155-12.668,1.439l-4.3-7.631.752,8.384c.912,10.16-7.183,13.234-13.75,5.22-4.087-4.987-4.174-4.979-2.5.231.984,3.07.174,6.387-1.88,7.69-5.4,3.428-7.828,2.858-7.828-1.842,0-2.32-1.266-4.218-2.812-4.218s-2.812,2.531-2.812,5.624c0,3.125-1.875,5.624-4.218,5.624-2.32,0-4.218-1.34-4.218-2.978s-1.286-2.183-2.858-1.211a3.133,3.133,0,0,0-1.376,4.163c1.258,2.036-26.712,12.2-28.541,10.37-1.617-1.617,30.028-36.267,42.545-46.585,28.231-23.27,68.906-39.615,98.9-39.742l13.654-.059L314.678,74.021c-12.424-10.87-13.436-12.635-10.447-18.221,1.821-3.4,2.136-6.185.7-6.185s-3.394,2.041-4.351,4.535c-1.421,3.7-2.518,3.889-5.988,1.009-3.787-3.142-3.776-4.247.1-10.159,3.769-5.751,3.8-6.633.2-6.633-2.279,0-5.25,1.978-6.6,4.4-2.227,3.979-2.81,3.974-6.152-.053-3.092-3.727-2.873-5.354,1.35-10.02,5.292-5.848,2.045-7.946-3.584-2.316-2.466,2.465-4.369,2.331-7.847-.556-4.224-3.505-4.177-4.118.584-7.659s4.612-3.71-1.922-2.111c-5.71,1.4-8.337.059-13.441-6.845l-6.345-8.581h8.639c35.036,0,85.515,20.229,107.378,43.032L380.4,61.683l13.689-12.8c7.528-7.042,18.891-15.458,25.25-18.7,14.285-7.288,40.585-14.308,53.605-14.308H482.7L470.617,26.415c-6.648,5.8-16.05,12.056-20.893,13.9s-7.151,3.427-5.127,3.515c7.825.337-.275,5.782-8.6,5.782-8.348,0-8.523.217-3.349,4.129,5.148,3.894,4.9,4.152-4.384,4.544-5.413.228-7.557,1.008-4.765,1.732,6.989,1.812,4.159,8.032-3.278,7.2-6.43-.716-8.37,3.627-2.5,5.6,2.679.9,2.511,2.406-.7,6.324-3.959,4.827-3.7,5.014,4.149,3.057,36.929-9.2,60.174-8.591,90.4,2.383,19.2,6.97,46.448,22.394,53.709,30.405,4.191,4.624,3.627,4.923-9.333,4.959-7.586.029-16.617.8-20.07,1.722-5.012,1.343-6.963.061-9.681-6.366l-3.4-8.048L521.737,115c-1.306,9.61-9.755,10.451-14.117,1.406l-3.052-6.327-.191,6.327c-.143,4.739-1.873,6.327-6.893,6.327-4.456,0-7.4-2.12-8.793-6.327l-2.091-6.327-1.244,6.327c-.744,3.779-3.3,6.327-6.345,6.327-2.806,0-6.042-2.847-7.192-6.327l-2.091-6.327-1.245,6.327c-1.1,5.567-2.994,6.341-15.812,6.446l-14.568.118,16.308,6.773a140.786,140.786,0,0,1,68.173,59.022c7.818,13.341,22.231,51.751,20.186,53.8-.644.644-6.841-2-13.771-5.87-11.418-6.382-12.509-7.9-11.64-16.21.892-8.527.729-8.726-2.318-2.842-5.181,10-10.822,7.853-11.077-4.218-.216-10.3-.287-10.365-3.012-2.914-2.449,6.7-3.462,7.214-8.277,4.219-4.2-2.614-5.1-5.392-3.856-11.85l1.632-8.436-5.26,6.545c-4.472,5.565-5.763,5.941-8.609,2.512-1.948-2.347-2.691-8.026-1.776-13.576l1.572-9.542-4.59,7.974c-5.181,9-3.854,9.581-27.772-12.1-7.043-6.384-10.316-8.112-9.159-4.836,8.329,23.59,17.6,89.383,13.6,96.529-1.919,3.429-5,1.383-15.513-10.313-13.6-15.128-15.05-18.081-10.307-21.013a6.309,6.309,0,0,0,2.812-4.728c0-1.822-1.732-1.553-4.432.688-3.673,3.049-4.87,2.987-6.987-.359-3.647-5.764-3.276-7.571,2.28-11.105,4.1-2.608,3.633-2.857-2.812-1.492-9.04,1.914-10.918-4.6-2.812-9.756,4.144-2.635,3.746-2.882-2.519-1.566-10.452,2.2-13.393-6.168-4.648-13.22l6.464-5.213-6.678,1.883c-4.307,1.215-7.537.528-9.1-1.933-3.937-6.213-2.911-8.034,4.526-8.034,3.867,0,7.03-1.265,7.03-2.812s-3.659-2.812-8.132-2.812c-7.476,0-8.333-1.077-10.63-13.357l-2.5-13.357-11.981,20.039c-40.348,67.489-65.662,174.472-72.452,306.193l-1.886,36.59,22.153,6.5a387.166,387.166,0,0,1,45.333,17.35c21.662,10.136,60.99,34.489,64.272,39.8.8,1.3-73.274,2.363-164.617,2.363-113.876,0-166.077-.926-166.077-2.946Z'
            stroke={'url(#linear)'}
            fill={variant === 'home' ? '' : 'url(#linear)'}
            fillOpacity={variant === 'home' ? 0 : 1}
            strokeWidth='3px'
          />
        </g>
      </g>
    </motion.svg>
  );
};

Palmytree.propTypes = {
  height: PropTypes.number,
  variant: PropTypes.oneOf(['home', 'logo'])
};

export default Palmytree;

import React from 'react';
import { motion } from 'framer-motion';
import useStyles from 'components/Envelope/EnvelopeStyle';

const Envelope = ({
  envelopeContainerControls,
  envelopeControls,
  palmtreeControls,
  ...props
}) => {
  const classes = useStyles();
  return (
    <>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        key='form-container-5'
        className={classes.envelopeFront}
        initial={{ opacity: 0 }}
        animate={envelopeContainerControls}
        exit={{ opacity: 0 }}
        viewBox='0 0 400 350'
        width='340'
        height='297.5'
      >
        <motion.path
          d='M0 100 V350 H400 V100 L250 150 H150 Z'
          stroke='#000'
          strokeWidth={5}
          fill='rgba(255, 0, 0, 1)'
          animate={envelopeControls}
        />
        <motion.path
          d='M0 350 H400 L250 150 H150 Z'
          stroke='#000'
          strokeWidth={5}
          fill='rgba(255, 0, 0, 1)'
          animate={envelopeControls}
        />
        <motion.path
          d='M0 100 H400 L200 0 Z'
          stroke='#000'
          strokeWidth={5}
          fill='rgba(255, 0, 0, 1)'
          animate={envelopeControls}
          initial={{ opacity: 0 }}
          custom={'flap'}
        />
      </motion.svg>
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        key='form-container-4'
        className={classes.envelopeBack}
        initial={{ opacity: 0 }}
        animate={envelopeContainerControls}
        exit={{ opacity: 0 }}
        viewBox='0 0 400 350'
        width='340'
        height='297.5'
      >
        <motion.path
          d='M0 100 V350 H400 V100 L250 150 H150 Z'
          stroke='#000'
          strokeWidth={5}
          fill='rgba(255, 0, 0, 1)'
          animate={envelopeControls}
        />
        <motion.path
          d='M0 350 H400 L250 150 H150 Z'
          stroke='#000'
          strokeWidth={5}
          fill='rgba(255, 0, 0, 1)'
          animate={envelopeControls}
        />
        <motion.path
          d='M0 100 H400 L250 150 H150 Z'
          stroke='#000'
          strokeWidth={5}
          fill='rgba(255, 0, 0, 0.8)'
          animate={envelopeControls}
        />
        <motion.path
          d='M0 100 H400 L200 0 Z'
          stroke='#000'
          strokeWidth={3}
          fill='rgba(255, 0, 0, 0.8)'
          fillOpacity={1}
          animate={envelopeControls}
          custom={'back-flap'}
        />
      </motion.svg>
      <motion.svg
        className={classes.palmTree}
        animate={palmtreeControls}
        initial={{
          scale: 12,
          opacity: 0,
          originX: 0,
          originY: 0,
          x: 75,
          y: 0
        }}
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        preserveAspectRatio='xMidYMid meet'
        viewBox='-4 -4 46 46'
      >
        <motion.circle cx='18' cy='18' r='48%' fill='rgba(0, 0, 255, 1)' />
        <motion.path
          fill='#C1694F'
          d='M21.978 20.424a29.331 29.331 0 0 0-.247-2.325a30.78 30.78 0 0 0-1.885-6.93c-.527-1.299-.943-2.043-.943-2.043l-3.613.466s.417.87.868 2.575c.183.692.371 1.524.54 2.495c.086.49.166 1.012.238 1.573c.1.781.183 1.632.242 2.549c.034.518.058 1.058.074 1.619c.006.204.015.401.018.611a14.52 14.52 0 0 1-.118 1.989c-.074.6-.182 1.197-.311 1.789a26.225 26.225 0 0 1-.67 2.475a34.793 34.793 0 0 1-.655 1.84c-.344.891-.69 1.692-.989 2.359c-.502 1.119-.871 1.863-.871 2.018c0 .49.35 1.408 2.797 2.02c3.827.956 4.196-.621 4.196-.621s.243-.738.526-2.192c.14-.718.289-1.605.424-2.678c.081-.642.156-1.348.222-2.116a61.85 61.85 0 0 0 .22-4.864c.002-.246.008-.484.008-.737c0-.64-.03-1.261-.071-1.872z'
        />
        <motion.path
          fill='#D99E82'
          d='M18.306 30.068c-1.403-.244-2.298-.653-2.789-.959c-.344.891-.69 1.692-.989 2.359c.916.499 2.079.895 3.341 1.114c.729.127 1.452.191 2.131.191c.414 0 .803-.033 1.176-.08c.14-.718.289-1.605.424-2.678c-.444.157-1.548.357-3.294.053zm1.06-4.673c-1.093-.108-1.934-.348-2.525-.602a26.225 26.225 0 0 1-.67 2.475c.864.326 1.881.561 2.945.666c.429.042.855.064 1.27.064c.502 0 .978-.039 1.435-.099c.068-.8.125-1.667.165-2.605c-.628.135-1.509.21-2.62.101zm.309-2.133c.822 0 1.63-.083 2.366-.228c.002-.246.008-.484.008-.737c0-.641-.029-1.262-.071-1.873c-.529.138-1.285.272-2.352.286c-1.084-.005-1.847-.155-2.374-.306c.006.204.015.401.018.611a14.52 14.52 0 0 1-.118 1.989c.763.161 1.605.253 2.461.257l.062.001zm-.249-4.577a12.08 12.08 0 0 0 2.304-.585a30.343 30.343 0 0 0-.485-2.513c-.496.204-1.199.431-2.181.572a9.03 9.03 0 0 1-2.129.077c.1.781.183 1.632.242 2.549c.152.006.29.029.446.029c.588.001 1.2-.043 1.803-.129zm1.271-5.116a30.223 30.223 0 0 0-.852-2.4a9.452 9.452 0 0 1-1.737.659a9.23 9.23 0 0 1-1.951.339c.183.692.371 1.524.54 2.495a12.42 12.42 0 0 0 2.094-.376c.679-.188 1.31-.44 1.906-.717z'
        />
        <motion.path
          fill='#3E721D'
          d='M32.61 4.305c-.044-.061-4.48-5.994-10.234-3.39c-2.581 1.167-4.247 3.074-4.851 5.535c-1.125-1.568-2.835-2.565-5.093-2.968C6.233 2.376 2.507 9.25 2.47 9.32c-.054.102-.031.229.056.305s.217.081.311.015c.028-.02 2.846-1.993 7.543-1.157c4.801.854 8.167 1.694 8.201 1.702a.254.254 0 0 0 .245-.073c.032-.035 3.22-3.46 6.153-4.787c4.339-1.961 7.298-.659 7.326-.646a.252.252 0 0 0 .298-.07a.246.246 0 0 0 .007-.304z'
        />
        <motion.path
          fill='#5C913B'
          d='M27.884 7.63c-4.405-2.328-7.849-1.193-9.995.22c-2.575-.487-7.334-.459-11.364 4.707c-4.983 6.387-.618 14.342-.573 14.422a.376.376 0 0 0 .689-.086c.015-.054 1.527-5.52 5.35-10.118c2.074-2.496 4.55-4.806 6.308-6.34c1.762.298 4.327.947 6.846 2.354c4.958 2.773 7.234 7.466 7.257 7.513a.372.372 0 0 0 .379.212a.377.377 0 0 0 .325-.287c.02-.088 1.968-8.8-5.222-12.597z'
        />
      </motion.svg>
    </>
  );
};

export default Envelope;
